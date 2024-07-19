package com.teevision.ecommerce_backend.product.dto;

import com.teevision.ecommerce_backend.enums.Size;

public record AvailableSize(
        Size name,
        Boolean value) {
}
