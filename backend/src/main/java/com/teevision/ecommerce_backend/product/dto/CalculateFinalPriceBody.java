package com.teevision.ecommerce_backend.product.dto;

public record CalculateFinalPriceBody(
        String frontQuantityBySizes,
        String backQuantityBySizes,
        Integer numberOfColors,
        Long productId) {
}
