package com.teevision.ecommerce_backend.product;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.teevision.ecommerce_backend.product.dto.CalculateFinalPriceBody;
import com.teevision.ecommerce_backend.product.dto.ProductReturnDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService productService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<ProductReturnDto> getAllProducts() {
        return Product.convertToReturnDto(productService.getAllProducts());
    }

    @GetMapping("/calculate-final-price")
    @ResponseStatus(HttpStatus.OK)
    public Integer calculateFinalPrice(@RequestBody CalculateFinalPriceBody calculateFinalPriceBody) {
        return productService.calculateFinalPrice(calculateFinalPriceBody);
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
