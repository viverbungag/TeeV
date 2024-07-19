package com.teevision.ecommerce_backend.product;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.teevision.ecommerce_backend.priceSettings.JpaPriceSettingsRepository;
import com.teevision.ecommerce_backend.priceSettings.PriceSettings;
import com.teevision.ecommerce_backend.product.dto.CalculateFinalPriceBody;
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

    public Integer calculateFinalPrice(CalculateFinalPriceBody calculateFinalPriceBody) {

        Integer frontNumberOfColors = calculateFinalPriceBody.frontNumberOfColors();
        Integer backNumberOfColors = calculateFinalPriceBody.backNumberOfColors();
        String quantityBySizes = calculateFinalPriceBody.quantityBySizes();
        Product product = productRepository.findById(calculateFinalPriceBody.productId()).orElseThrow();

        PriceSettings priceSettings = priceSettingsRepository.findById(1L).orElse(new PriceSettings());
        String frontPrintPrice = priceSettings.getFrontPrintPrice();
        String backPrintPrice = priceSettings.getBackPrintPrice();

        try{
            ObjectMapper mapper = new ObjectMapper();
            Float frontPrintCharge = calculateColorPrintCharge(mapper, quantityBySizes, frontNumberOfColors, frontPrintPrice);
            Float backPrintCharge = calculateColorPrintCharge(mapper, quantityBySizes, backNumberOfColors, backPrintPrice);
        }catch(Exception e){
            e.printStackTrace();
        }

        return 0;
    }

    private Float calculateColorPrintCharge(ObjectMapper mapper, String quantityBySizes, Integer numberOfColors, String printPrice) {
        try {
            Map quantityBySizesMap = mapper.readValue(quantityBySizes, Map.class);
            Integer totalQuantity = quantityBySizesMap.values().stream().mapToInt(value -> (Integer) value).sum();
            ArrayList printPriceMap = mapper.readValue(printPrice, ArrayList.class);

            for(Object itemRange : printPriceMap){
                Map<String, Object> contents = (Map<String, Object>) itemRange;

                Integer from = (Integer) contents.get("from");
                Integer to = (Integer) contents.get("to");

                if (totalQuantity >= from && totalQuantity <= to) {
                    Map<String, Object> pricePerColorQuantityContents = (Map<String, Object>) contents.get("pricePerColorQuantity");
                    try{
                        return ((Double) pricePerColorQuantityContents.get(numberOfColors.toString())).floatValue();
                    }catch(ClassCastException e){
                        return ((Integer) pricePerColorQuantityContents.get(numberOfColors.toString())).floatValue();
                    }
                }
            }
        } catch(Exception e) {
            e.printStackTrace();
        }
        return 0F;
    }
}
