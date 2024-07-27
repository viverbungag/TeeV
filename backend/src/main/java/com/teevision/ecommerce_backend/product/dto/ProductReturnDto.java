package com.teevision.ecommerce_backend.product.dto;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public record ProductReturnDto(long id,
                               String name,
                               TempBrand brand,
                               TempStyle style,
                               Boolean isProductVisibleInWebsite) {}
