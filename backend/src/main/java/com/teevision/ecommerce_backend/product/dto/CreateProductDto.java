package com.teevision.ecommerce_backend.product.dto;

import java.util.ArrayList;

public record CreateProductDto(
        String name,
        Boolean hasFiberInfo,
//        ArrayList<String> fiberInfoItems,
        Boolean hasFeaturesInfo,
//        ArrayList<String> featuresInfoItems,
        Boolean isProductVisibleInWebsite,
        Boolean hasSizeInfo,
        String availableSizes,
        String availableClotheSizeParts,
        String clothePackagingType,
        String pricesPerColorOnWhiteClothes,
        String pricesPerColorOnColoredClothes,
        String sizesInfo,
        String sizePricesForWhite,
        String sizePricesForColored) {
}
