package com.teevision.ecommerce_backend.product;

import com.teevision.ecommerce_backend.enums.ClothePackagingType;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaProductRepository extends JpaRepository<Product, Long> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO product (" +
                "name, is_product_visible_in_website, " +
                "has_fiber_info, fiber_info_items, has_features_info, " +
                "features_info_items, has_size_info, available_sizes, " +
                "available_clothe_size_parts, size_prices_for_white, " +
                "size_prices_for_colored, clothe_packaging_type, " +
                "clothe_packaging_type, brand_id, style_id) " +
            "VALUES (:name, :isProductVisibleInWebsite, " +
                ":hasFiberInfo, CAST(:fiberInfoItems AS jsonb), " +
                ":hasFeaturesInfo, CAST(:featuresInfoItems AS jsonb), :hasSizeInfo, " +
                "CAST(:availableSizes AS jsonb), CAST(:availableClotheSizeParts AS jsonb), " +
                "CAST(:sizePricesForWhite AS jsonb), CAST(:sizePricesForColored AS jsonb), :clothePackagingType, " +
                ":brandId, :styleId)", nativeQuery = true)
    void createProduct(@Param("name") String name,
                       @Param("isProductVisibleInWebsite") Boolean isProductVisibleInWebsite,
                       @Param("hasFiberInfo") Boolean hasFiberInfo,
                       @Param("hasFeaturesInfo") Boolean hasFeaturesInfo,
                       @Param("hasSizeInfo") Boolean hasSizeInfo,
                       @Param("availableSizes") String availableSizes,
                       @Param("availableClotheSizeParts") String availableClotheSizeParts,
                       @Param("sizePricesForWhite") String sizePricesForWhite,
                       @Param("sizePricesForColored") String sizePricesForColored,
                       @Param("clothePackagingType") ClothePackagingType clothePackagingType,
                       @Param("brandId") Long brandId,
                       @Param("styleId") Long styleId);
}
