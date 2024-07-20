package com.teevision.ecommerce_backend.product;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teevision.ecommerce_backend.priceSettings.JpaPriceSettingsRepository;
import com.teevision.ecommerce_backend.priceSettings.PriceSettings;
import com.teevision.ecommerce_backend.product.dto.CalculateFinalPriceBody;
import com.teevision.ecommerce_backend.product.dto.ProductReturnDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final JpaProductRepository productRepository;
    private final JpaPriceSettingsRepository priceSettingsRepository;

    public Collection<Product> getAllProducts() {
        Collection<Product> products = productRepository.findAll();
        return products;
    }
    public ProductReturnDto getProductById(long id) {
        Product product = productRepository.findById(id).orElseThrow();
        return Product.convertToReturnDto(product);
    }

    public Float calculateFinalPrice(CalculateFinalPriceBody calculateFinalPriceBody) {
        ObjectMapper mapper = new ObjectMapper();

        Integer frontNumberOfColors = calculateFinalPriceBody.frontNumberOfColors();
        Integer backNumberOfColors = calculateFinalPriceBody.backNumberOfColors();
        String quantityBySizes = calculateFinalPriceBody.quantityBySizes();
        Product product = productRepository.findById(calculateFinalPriceBody.productId()).orElseThrow();

        Map quantityBySizesMap = StringToMap(mapper, quantityBySizes);

        assert quantityBySizesMap != null;
        Integer totalQuantity = calculateTotalQuantity(quantityBySizesMap);

        PriceSettings priceSettings = priceSettingsRepository.findById(1L).orElse(new PriceSettings());

        // Charge for front and back print
        String frontPrintPrice = priceSettings.getFrontPrintPrice();
        String backPrintPrice = priceSettings.getBackPrintPrice();
        Float frontPrintCharge = calculateColorPrintCharge(mapper, frontNumberOfColors, frontPrintPrice, totalQuantity);
        Float backPrintCharge = calculateColorPrintCharge(mapper, backNumberOfColors, backPrintPrice, totalQuantity);
        System.out.println("---------------------------------------");
        System.out.println("Front Print Charge: " + frontPrintCharge);
        System.out.println("Front Print Total Charge: " + frontPrintCharge * totalQuantity);
        System.out.println("Back Print Charge: " + backPrintCharge);
        System.out.println("Back Print Total Charge: " + backPrintCharge * totalQuantity);

        Float totalPriceOfProductBySize = calculateTotalPriceOfProductBySize(quantityBySizesMap, product);
        System.out.println("Total Price of Product By Size: " + totalPriceOfProductBySize);

        Float setupCharge = priceSettings.getSetupChargePerNumberOfColors() * (frontNumberOfColors + backNumberOfColors);
        System.out.println("Setup Charge: " + setupCharge);

        Float numberOfTShirtPerPackage = priceSettings.getNumberOfTShirtPerPackage().floatValue();
        Float handlingCharge = (((Double) Math.ceil(totalQuantity / numberOfTShirtPerPackage)).floatValue()) * 45;
        System.out.println("Handling Charge: " + handlingCharge);

        float total = (frontPrintCharge * totalQuantity ) + (backPrintCharge * totalQuantity) + totalPriceOfProductBySize + setupCharge + handlingCharge;
        System.out.println("Total Without Admin Fees: " + total);

        float adminFees = priceSettings.getAdminFees();
        System.out.println("Admin Fees: " + (total * (priceSettings.getAdminFees() / 100)));

        Float totalWithAdminFees = total + adminFees;
        System.out.println("Total With Admin Fees: " + totalWithAdminFees);

        return totalWithAdminFees;
    }

    private Float calculateColorPrintCharge(ObjectMapper mapper, Integer numberOfColors, String printPrice, int totalQuantity) {
        try {
            ArrayList printPriceMap = mapper.readValue(printPrice, ArrayList.class);

            for(Object itemRange : printPriceMap){
                Map<String, Object> contents = (Map<String, Object>) itemRange;

                Integer from = (Integer) contents.get("from");
                Integer to = (Integer) contents.get("to");

                if (totalQuantity >= from && totalQuantity <= to) {
                    Map<String, Object> pricePerColorQuantityContents = (Map<String, Object>) contents.get("pricePerColorQuantity");
//                    try{
//                        return ((Double) pricePerColorQuantityContents.get(numberOfColors.toString())).floatValue();
//                    }catch(ClassCastException e){
//                        return ((Integer) pricePerColorQuantityContents.get(numberOfColors.toString())).floatValue();
//                    }

                    return getFloatByObject(pricePerColorQuantityContents.get(numberOfColors.toString()));
                }
            }
        } catch(JsonProcessingException e) {
            e.printStackTrace();
        }
        return 0F;
    }

    private Integer calculateTotalQuantity(Map quantityBySizesMap) {
        return quantityBySizesMap.values().stream().mapToInt(value -> (Integer) value).sum();
    }

    private Map StringToMap(ObjectMapper mapper, String stringValue) {
        try {
            return mapper.readValue(stringValue, Map.class);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    private Float calculateTotalPriceOfProductBySize(Map quantityBySizesMap, Product product) {
        float totalPriceOfProductBySize = 0F;
        for (Object obj : quantityBySizesMap.keySet()) {
            Integer quantity = (Integer) quantityBySizesMap.get(obj);
            Float productPriceBySize = getProductPriceBySize(product.getSizePricesForWhite(), (String) obj);
            totalPriceOfProductBySize += productPriceBySize * quantity;
        }
        return totalPriceOfProductBySize;
    }

    private Float getProductPriceBySize(String sizePrices, String size) {
        try {
            Map sizePricesMap = new ObjectMapper().readValue(sizePrices, Map.class);
            Map sizePrice = (Map<String, Integer>) sizePricesMap.get(size);

            return sizePrice != null
                    ? (getFloatByObject(sizePrice.get("markup"))) * (getFloatByObject(sizePrice.get("originalPrice")))
                    : 0F;

        } catch (JsonProcessingException e) {
            e.fillInStackTrace();
        }
        return 0F;
    }

    private Float getFloatByObject(Object obj) {
        if (obj == null) {
            return 0F;
        }
        try {
            return ((Double) obj).floatValue();
        } catch (ClassCastException e) {
            return ((Integer) obj).floatValue();
        }
    }
}
