package com.teevision.ecommerce_backend.Brand;

import com.teevision.ecommerce_backend.Brand.dto.BrandReturnDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/v1/brands")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class BrandController {

    private final BrandService brandService;

     @GetMapping
     @ResponseStatus(HttpStatus.OK)
     public Collection<BrandReturnDto> getAllBrands() {
         return Brand.convertToReturnDto(brandService.getAllBrands());
     }
}
