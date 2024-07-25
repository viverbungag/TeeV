package com.teevision.ecommerce_backend.product;

import com.teevision.ecommerce_backend.product.dto.CalculateFinalPriceBody;
import com.teevision.ecommerce_backend.product.dto.CreateProductDto;
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

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductReturnDto getProductById(@PathVariable long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/calculate-final-price")
    @ResponseStatus(HttpStatus.OK)
    public Float calculateFinalPrice(@RequestBody CalculateFinalPriceBody calculateFinalPriceBody) {
        return productService.calculateFinalPrice(calculateFinalPriceBody);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createProduct(@RequestBody CreateProductDto createProductDto) {
        productService.createProduct(createProductDto);
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
