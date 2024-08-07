package com.teevision.ecommerce_backend.category;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final JpaCategoryRepository jpaCategoryRepository;

    public List<Category> getAllCategories() {
        return jpaCategoryRepository.findAll();
    }
}
