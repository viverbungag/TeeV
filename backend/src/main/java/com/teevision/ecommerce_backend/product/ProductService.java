package com.teevision.ecommerce_backend.product;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teevision.ecommerce_backend.enums.ClothePackagingType;
import com.teevision.ecommerce_backend.priceSettings.JpaPriceSettingsRepository;
import com.teevision.ecommerce_backend.priceSettings.PriceSettings;
import com.teevision.ecommerce_backend.product.dto.CalculateFinalPriceBody;
import com.teevision.ecommerce_backend.product.dto.CreateProductDto;
import com.teevision.ecommerce_backend.product.dto.ProductReturnDto;
import com.teevision.ecommerce_backend.product.exceptions.QuantityIsInRestrictionRangeException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
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

        PriceSettings priceSettings = priceSettingsRepository.findById(1L).orElse(new PriceSettings());
        String quantityBySizes = calculateFinalPriceBody.quantityBySizes();
        Map quantityBySizesMap = StringToMap(mapper, quantityBySizes);

        assert quantityBySizesMap != null;
        Integer totalQuantity = calculateTotalQuantity(quantityBySizesMap);

        if (totalQuantity < priceSettings.getMinimumQuantity()){
            throw new QuantityIsInRestrictionRangeException("Quantity should be more than " + priceSettings.getMinimumQuantity());
        }

        if (totalQuantity > priceSettings.getMaximumQuantity()){
            throw new QuantityIsInRestrictionRangeException("Quantity should be less than " + priceSettings.getMaximumQuantity());
        }


        Product product = productRepository.findById(calculateFinalPriceBody.productId()).orElseThrow();

        Integer frontNumberOfColorsTemp = calculateFinalPriceBody.frontNumberOfColors();
        Integer backNumberOfColorsTemp = calculateFinalPriceBody.backNumberOfColors();

        Integer frontNumberOfColors = 0;
        Integer backNumberOfColors = 0;

        if (frontNumberOfColorsTemp >= backNumberOfColorsTemp) {
            frontNumberOfColors = frontNumberOfColorsTemp;
            backNumberOfColors = backNumberOfColorsTemp;
        } else {
            frontNumberOfColors = backNumberOfColorsTemp;
            backNumberOfColors = frontNumberOfColorsTemp;
        }


        // Charge for front and back print
        String frontPrintPrice = priceSettings.getFrontPrintPrice();
        String backPrintPrice = priceSettings.getBackPrintPrice();
        BigDecimal frontPrintCharge = BigDecimal.valueOf(calculateColorPrintCharge(mapper, frontNumberOfColors, frontPrintPrice, totalQuantity));
        BigDecimal backPrintCharge = BigDecimal.valueOf(calculateColorPrintCharge(mapper, backNumberOfColors, backPrintPrice, totalQuantity));

        // Implement that whoever the greater quantity is the front price

        System.out.println("---------------------------------------");
        System.out.println("Front Print Charge: " + frontPrintCharge);
        System.out.println("Front Print Total Charge: " + frontPrintCharge.multiply(BigDecimal.valueOf(totalQuantity)));
        System.out.println("Back Print Charge: " + backPrintCharge);
        System.out.println("Back Print Total Charge: " + backPrintCharge.multiply(BigDecimal.valueOf(totalQuantity)));

        BigDecimal setupCharge = BigDecimal.valueOf(priceSettings.getSetupChargePerNumberOfColors())
                .multiply(BigDecimal.valueOf(frontNumberOfColors + backNumberOfColors));

        System.out.println("Setup Charge: " + setupCharge);

        BigDecimal handlingCharge = BigDecimal.valueOf(calculateHandlingCharge(totalQuantity, priceSettings, product));
        System.out.println("Handling Charge: " + handlingCharge);

        BigDecimal subtotal = frontPrintCharge
                .multiply(BigDecimal.valueOf(totalQuantity))
                .add(backPrintCharge
                        .multiply(BigDecimal.valueOf(totalQuantity)))
                .add(setupCharge)
                .add(handlingCharge);

        System.out.println("Subtotal: " + subtotal);

        BigDecimal totalPriceOfProductBySize = calculateTotalPriceOfProductBySize(quantityBySizesMap, product);
        System.out.println("Total Price of Product By Size: " + totalPriceOfProductBySize);

        BigDecimal total = subtotal.add(totalPriceOfProductBySize);
        System.out.println("Total Without Admin Fees: " + total);

        BigDecimal adminFees = total
                .multiply(BigDecimal.valueOf(priceSettings.getAdminFees())
                        .divide(BigDecimal.valueOf(100), 20, RoundingMode.HALF_EVEN));
        System.out.println("Admin Fees: " + adminFees);

        BigDecimal totalWithAdminFees = total.add(adminFees);
        System.out.println("Total With Admin Fees: " + totalWithAdminFees);

        return totalWithAdminFees.setScale(4, RoundingMode.HALF_EVEN).floatValue();
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

    private BigDecimal calculateTotalPriceOfProductBySize(Map quantityBySizesMap, Product product) {
        BigDecimal totalPriceOfProductBySize = BigDecimal.ZERO;
        for (Object obj : quantityBySizesMap.keySet()) {
            Integer quantity = (Integer) quantityBySizesMap.get(obj);
            BigDecimal productPriceBySize = getProductPriceBySize(product.getSizePricesForWhite(), (String) obj);
//            System.out.println("Size: " + obj);
//            System.out.println("productPriceBySize: " + productPriceBySize);
//            System.out.println("quantity: " + quantity);
            totalPriceOfProductBySize = totalPriceOfProductBySize
                    .add(productPriceBySize
                            .multiply(new BigDecimal(quantity)));
        }
        return totalPriceOfProductBySize;
    }

    private BigDecimal getProductPriceBySize(String sizePrices, String size) {
        try {
            Map sizePricesMap = new ObjectMapper().readValue(sizePrices, Map.class);
            Map sizePrice = (Map<String, Integer>) sizePricesMap.get(size);

            if (sizePrice == null) {
                return BigDecimal.ZERO;
            }

            float markupPrice = (getFloatByObject(sizePrice.get("markup")));
            float originalPrice = (getFloatByObject(sizePrice.get("originalPrice")));

            BigDecimal markupPriceBigDecimal = new BigDecimal(markupPrice);
            BigDecimal originalPriceBigDecimal = new BigDecimal(originalPrice);
            BigDecimal salePrice = markupPriceBigDecimal.multiply(originalPriceBigDecimal);
            return salePrice;

        } catch (JsonProcessingException e) {
            e.fillInStackTrace();
        }
        return BigDecimal.ZERO;
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

    private Float calculateHandlingCharge(Integer totalQuantity, PriceSettings priceSettings, Product product) {

        if (product.getClothePackagingType() == ClothePackagingType.TSHIRT) {
            Float numberOfTShirtPerPackage = priceSettings.getNumberOfTShirtPerPackage().floatValue();
            return (((Double) Math.ceil(totalQuantity / numberOfTShirtPerPackage)).floatValue()) * priceSettings.getPricePerTShirtPackage();
        }

        if (product.getClothePackagingType() == ClothePackagingType.HOODIE) {
            Float numberOfHoodiePerPackage = priceSettings.getNumberOfHoodiePerPackage().floatValue();
            return (((Double) Math.ceil(totalQuantity / numberOfHoodiePerPackage)).floatValue()) * priceSettings.getPricePerHoodiePackage();
        }

        return 0F;
    }

    public void createProduct(CreateProductDto createProductDto) {



        productRepository.createProduct(
                createProductDto.name(),
                createProductDto.isProductVisibleInWebsite(),
                createProductDto.hasFiberInfo(),
                createProductDto.hasFeaturesInfo(),
                createProductDto.hasSizeInfo(),
                createProductDto.availableSizes(),
                createProductDto.availableClotheSizeParts(),
                createProductDto.sizePricesForWhite(),
                createProductDto.sizePricesForColored(),
                ClothePackagingType.fromString(createProductDto.clothePackagingType()),
                1L,
                1L);
    }
}
