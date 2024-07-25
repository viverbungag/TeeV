package com.teevision.ecommerce_backend.priceSettings;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PriceSettingsService {

    private final JpaPriceSettingsRepository jpaPriceSettingsRepository;

    public PriceSettings getAllPriceSettings() {
        return jpaPriceSettingsRepository.findById(1L)
                .orElse(new PriceSettings());
    }

    public void updatePriceSettings(PriceSettings priceSettings) {
        jpaPriceSettingsRepository.updatePriceSettings(1L,
                priceSettings.getFrontPrintPrice(),
                priceSettings.getBackPrintPrice(),
                priceSettings.getNumberOfHoodiePerPackage(),
                priceSettings.getNumberOfTShirtPerPackage(),
                priceSettings.getMinimumQuantity(),
                priceSettings.getMaximumQuantity(),
                priceSettings.getSetupChargePerNumberOfColors(),
                priceSettings.getAdminFees());

    }

}
