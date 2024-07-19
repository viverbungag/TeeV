package com.teevision.ecommerce_backend.Style;

import com.teevision.ecommerce_backend.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Collection;

@Entity(name = "style")
@ToString
@NoArgsConstructor
@Getter
public class Style {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "style", fetch = FetchType.LAZY)
    private Collection<Product> products;
}
