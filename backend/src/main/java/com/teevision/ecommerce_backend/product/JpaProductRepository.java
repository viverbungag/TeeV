package com.teevision.ecommerce_backend.product;

import com.teevision.ecommerce_backend.enums.ClothePackagingType;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface JpaProductRepository extends JpaRepository<Product, Long> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO products (" +
                "name, is_product_visible_in_website, " +
                "has_fiber_info, has_features_info, " +
                "has_size_info, available_sizes, " +
                "available_clothe_size_parts, prices_per_color_on_white_clothes, " +
                "prices_per_color_on_colored_clothes, " +
                "clothe_packaging_type, brand_id, style_id) " +
            "VALUES (:name, :isProductVisibleInWebsite, " +
                ":hasFiberInfo, " +
                ":hasFeaturesInfo, :hasSizeInfo, " +
                "CAST(:availableSizes AS jsonb), CAST(:availableClotheSizeParts AS jsonb), " +
                "CAST(:pricesPerColorOnWhiteClothes AS jsonb), CAST(:pricesPerColorOnColoredClothes AS jsonb), :clothePackagingType, " +
                ":brandId, :styleId)", nativeQuery = true)
    void createProduct(@Param("name") String name,
                       @Param("isProductVisibleInWebsite") Boolean isProductVisibleInWebsite,
                       @Param("hasFiberInfo") Boolean hasFiberInfo,
                       @Param("hasFeaturesInfo") Boolean hasFeaturesInfo,
                       @Param("hasSizeInfo") Boolean hasSizeInfo,
                       @Param("availableSizes") String availableSizes,
                       @Param("availableClotheSizeParts") String availableClotheSizeParts,
                       @Param("pricesPerColorOnWhiteClothes") String pricesPerColorOnWhiteClothes,
                       @Param("pricesPerColorOnColoredClothes") String pricesPerColorOnColoredClothes,
                       @Param("clothePackagingType") String clothePackagingType,
                       @Param("brandId") Long brandId,
                       @Param("styleId") Long styleId);

    Optional<Product> findByName(String name);
}
