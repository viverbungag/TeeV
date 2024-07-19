package com.teevision.ecommerce_backend.product.dto;

import java.util.ArrayList;
import java.util.Collection;

public record ProductReturnDto(long id,
                               String name,
                               String sizePricesForWhite,
                               String sizePricesForColored,
                               TempBrand brand,
                               TempStyle size,
                               String availableSizes) {}
