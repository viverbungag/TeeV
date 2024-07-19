package com.teevision.ecommerce_backend.product.dto;

public record CalculateFinalPriceBody(
        String quantityBySizes,
        Integer frontNumberOfColors,
        Integer backNumberOfColors,
        Long productId) {
}
