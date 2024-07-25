package com.teevision.ecommerce_backend.product.exceptions;

public class QuantityIsInRestrictionRangeException extends RuntimeException {
    public QuantityIsInRestrictionRangeException(String message) {
        super(message);
    }
}
