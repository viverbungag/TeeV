package com.teevision.ecommerce_backend.product;

import com.teevision.ecommerce_backend.enums.Size;
import jakarta.persistence.Enumerated;

public record AvailableSize(
        Size name,
        Boolean value) {
}
