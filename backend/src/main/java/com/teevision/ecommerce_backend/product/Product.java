package com.teevision.ecommerce_backend.product;

import com.teevision.ecommerce_backend.Brand.Brand;
import com.teevision.ecommerce_backend.Style.Style;
import com.teevision.ecommerce_backend.category.Category;
import com.teevision.ecommerce_backend.product.dto.ProductReturnDto;
import com.teevision.ecommerce_backend.product.dto.TempBrand;
import com.teevision.ecommerce_backend.product.dto.TempStyle;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Collection;

@Entity(name = "product")
@ToString
@NoArgsConstructor
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    private Boolean isProductVisibleInWebsite;

    private Boolean hasFiberInfo;
    private Collection<String> fiberInfoItems;

    private Boolean hasFeaturesInfo;
    private Collection<String> featuresInfoItems;

    private Boolean hasSizeInfo;

    @Column(name="available_sizes", columnDefinition = "jsonb")
    private String availableSizes;

    @Column(name="available_clothe_size_parts" ,columnDefinition = "jsonb")
    private String availableClotheSizeParts;

    @Column(name="size_prices_for_white", columnDefinition = "jsonb")
    private String sizePricesForWhite;

    @Column(name="size_prices_for_colored", columnDefinition = "jsonb")
    private String sizePricesForColored;


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


}
