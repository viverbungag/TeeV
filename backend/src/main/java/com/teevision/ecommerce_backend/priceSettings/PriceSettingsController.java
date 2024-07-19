package com.teevision.ecommerce_backend.priceSettings;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/price-settings")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PriceSettingsController {

    private final PriceSettingsService priceSettingsService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public PriceSettings getAllPriceSettings() {
        return priceSettingsService.getAllPriceSettings();
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public void updatePriceSettings(@RequestBody PriceSettings priceSettings) {
        priceSettingsService.updatePriceSettings(priceSettings);
    }
}
