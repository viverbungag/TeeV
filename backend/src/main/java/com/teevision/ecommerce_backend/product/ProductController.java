package com.teevision.ecommerce_backend.product;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

        @RequestMapping("/all")
        public String getAllProducts() {
            return "All products";
        }

        @RequestMapping("/add")
        public String addProduct() {
            return "Product added";
        }

        @RequestMapping("/delete")
        public String deleteProduct() {
            return "Product deleted";
        }

        @RequestMapping("/update")
        public String updateProduct() {
            return "Product updated";
        }

        @RequestMapping("/find")
        public String findProduct() {
            return "Product found";
        }

        @RequestMapping("/find/{id}")
        public String findProductById() {
            return "Product found by id";
        }
}
