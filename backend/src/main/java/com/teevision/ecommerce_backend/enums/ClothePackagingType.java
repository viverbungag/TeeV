package com.teevision.ecommerce_backend.enums;

public enum ClothePackagingType {

    TSHIRT("TSHIRT"), HOODIE("HOODIE");

    private final String name;

    ClothePackagingType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public static ClothePackagingType fromString(String name) {
        return switch (name) {
            case "TSHIRT" -> TSHIRT;
            case "HOODIE" -> HOODIE;
            default -> TSHIRT;
        };
    }
}
