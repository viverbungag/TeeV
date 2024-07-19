package com.teevision.ecommerce_backend.product.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class PrintType {

    private Integer from;
    private Integer to;
    private Map<String, Integer> pricePerColorQuantity;
}
