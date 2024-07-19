package com.teevision.ecommerce_backend.enums;

public enum ClotheSizePart {
    BODY_LENGTH("BODY LENGTH"), BODY_WIDTH("BODY WIDTH"), FULL_BODY_LENGTH("FULL BODY LENGTH"), NECK_CIRCUMFERENCE("NECK CIRCUMFERENCE"), SLEEVE_LENGTH("SLEEVE LENGTH");

    private final String name;

    ClotheSizePart(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
