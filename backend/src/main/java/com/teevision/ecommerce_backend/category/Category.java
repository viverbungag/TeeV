package com.teevision.ecommerce_backend.category;


import com.teevision.ecommerce_backend.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Collection;

@Entity(name = "category")
@ToString
@NoArgsConstructor
@Getter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "categories")
    private Collection<Product> products;
}
