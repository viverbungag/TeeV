package com.teevision.ecommerce_backend.product;

import com.teevision.ecommerce_backend.Brand.Brand;
import com.teevision.ecommerce_backend.Style.Style;
import com.teevision.ecommerce_backend.category.Category;
import com.teevision.ecommerce_backend.enums.ClothePackagingType;
import com.teevision.ecommerce_backend.product.dto.CreateProductDto;
import com.teevision.ecommerce_backend.product.dto.ProductReturnDto;
import com.teevision.ecommerce_backend.product.dto.TempBrand;
import com.teevision.ecommerce_backend.product.dto.TempStyle;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Collection;

@Entity(name = "product")
@ToString
@NoArgsConstructor
@Getter
@Setter
@RequiredArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    @NonNull
    private String name;

    @Column(name = "is_product_visible_in_website")
    @NonNull
    private Boolean isProductVisibleInWebsite;

    @Column(name = "has_fiber_info")
    @NonNull
    private Boolean hasFiberInfo;


//    @ElementCollection(targetClass = String.class, fetch = FetchType.LAZY)
//    @CollectionTable(name = "fiber_info_items", joinColumns = @JoinColumn(name = "product_id"))
//    @Column(name = "fiber_info_item", nullable = false)
//    @NonNull
//    private ArrayList<String> fiberInfoItems;

    @Column(name = "has_features_info")
    @NonNull
    private Boolean hasFeaturesInfo;

//    @ElementCollection(targetClass = String.class, fetch = FetchType.LAZY)
//    @CollectionTable(name = "feature_info_items", joinColumns = @JoinColumn(name = "product_id"))
//    @Column(name = "feature_info_item", nullable = false)
//    @NonNull
//    private ArrayList<String> featuresInfoItems;

    @Column(name = "has_size_info")
    @NonNull
    private Boolean hasSizeInfo;

    @Column(name="available_sizes", columnDefinition = "jsonb")
    @NonNull
    private String availableSizes;

    @Column(name="available_clothe_size_parts" ,columnDefinition = "jsonb")
    @NonNull
    private String availableClotheSizeParts;

    @Column(name="size_prices_for_white", columnDefinition = "jsonb")
    @NonNull
    private String sizePricesForWhite;

    @Column(name="size_prices_for_colored", columnDefinition = "jsonb")
    @NonNull
    private String sizePricesForColored;

    @Enumerated(EnumType.STRING)
    @Column(name="clothe_packaging_type")
    @NonNull
    private ClothePackagingType clothePackagingType;

    @ManyToMany()
    @JoinTable(
            name = "product_category",
            joinColumns = { @JoinColumn(name = "product_id") },
            inverseJoinColumns = { @JoinColumn(name = "category_id") }
    )
    private Collection<Category> categories;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "style_id")
    private Style style;

    public static ProductReturnDto convertToReturnDto(Product product) {
        TempBrand brand = new TempBrand(product.getBrand().getName());
        TempStyle style = new TempStyle(product.getStyle().getName());
        return new ProductReturnDto(
                product.getId(),
                product.getName(),
                product.getSizePricesForWhite(),
                product.getSizePricesForColored(),
                brand,
                style,
                product.getAvailableSizes());
    }

    public static Collection<ProductReturnDto> convertToReturnDto(Collection<Product> products) {
        return products.stream().map(Product::convertToReturnDto).toList();
    }

    public static Product from(CreateProductDto createProductDto) {

        return new Product(
                createProductDto.name(),
                createProductDto.isProductVisibleInWebsite(),
                createProductDto.hasFiberInfo(),
//                createProductDto.fiberInfoItems(),
                createProductDto.hasFeaturesInfo(),
//                createProductDto.featuresInfoItems(),
                createProductDto.hasSizeInfo(),
                createProductDto.availableSizes(),
                createProductDto.availableClotheSizeParts(),
                createProductDto.sizePricesForWhite(),
                createProductDto.sizePricesForColored(),
                ClothePackagingType.fromString(createProductDto.clothePackagingType()));
    }

}
