package com.teevision.ecommerce_backend.Brand;

import com.teevision.ecommerce_backend.Brand.dto.BrandReturnDto;
import com.teevision.ecommerce_backend.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Collection;

@Entity(name = "brand")
@ToString
@NoArgsConstructor
@Getter
public class Brand {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "brand", fetch = FetchType.LAZY)
    private Collection<Product> products;

    public BrandReturnDto convertToReturnDto() {
        return new BrandReturnDto(id, name);
    }

    public static Collection<BrandReturnDto> convertToReturnDto(Collection<Brand> brands) {
        return brands.stream().map(Brand::convertToReturnDto).toList();
    }
}
