package com.teevision.ecommerce_backend.product.dto;

import java.util.ArrayList;
import java.util.List;

public record CreateProductDto(
        String name,
        Boolean hasFiberInfo,
        List<String> fiberInfoItems,
        Boolean hasFeaturesInfo,
        List<String> featuresInfoItems,
        Boolean isProductVisibleInWebsite,
        Boolean hasSizeInfo,
        String availableSizes,
        String availableClotheSizeParts,
        String clothePackagingType,
        String pricesPerColorOnWhiteClothes,
        String pricesPerColorOnColoredClothes,
        String sizesInfo) {
}
