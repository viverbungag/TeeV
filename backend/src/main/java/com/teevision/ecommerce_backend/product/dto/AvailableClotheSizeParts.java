package com.teevision.ecommerce_backend.product;

import com.teevision.ecommerce_backend.enums.ClotheSizePart;
import jakarta.persistence.Enumerated;

public record AvailableClotheSizeParts(
        ClotheSizePart name,
        Boolean value) {
}
