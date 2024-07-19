package com.teevision.ecommerce_backend.product.dto;

import com.teevision.ecommerce_backend.enums.ClotheSizePart;

public record AvailableClotheSizeParts(
        ClotheSizePart name,
        Boolean value) {
}
