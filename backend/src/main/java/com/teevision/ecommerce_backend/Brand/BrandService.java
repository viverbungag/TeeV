package com.teevision.ecommerce_backend.Brand;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BrandService {

    private final JpaBrandRepository jpaBrandRepository;

    public List<Brand> getAllBrands() {
        return jpaBrandRepository.findAll();
    }
}
