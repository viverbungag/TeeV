package com.teevision.ecommerce_backend.category;

import com.teevision.ecommerce_backend.category.dto.CategoryReturnDto;
import com.teevision.ecommerce_backend.product.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<CategoryReturnDto> getAllCategories() {
        return Category.convertToReturnDto(categoryService.getAllCategories());
    }
}
