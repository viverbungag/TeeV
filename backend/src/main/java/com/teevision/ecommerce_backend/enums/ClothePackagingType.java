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
        for (ClothePackagingType type : ClothePackagingType.values()) {
            if (type.getName().equalsIgnoreCase(name)) {
                return type;
            }
        }
        return TSHIRT;
    }
}
