package com.teevision.ecommerce_backend.enums;

public enum Size {

    XS("XS"), S("S"), M("M"), LG("LG"), XL("XL"), XL2("2XL"), XL3("3XL"), XL4("4XL"), XL5("5XL");

    private final String name;

    Size(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
