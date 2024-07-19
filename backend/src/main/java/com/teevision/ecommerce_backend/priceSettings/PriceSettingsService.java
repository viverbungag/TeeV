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
//        PriceSettings priceSettingsTemp = jpaPriceSettingsRepository
//                .findById(1L).
//                orElse(new PriceSettings());

//        priceSettingsTemp.setFrontPrintPrice((String) priceSettings.getFrontPrintPrice());
//        priceSettingsTemp.setBackPrintPrice((String) priceSettings.getBackPrintPrice());
//        priceSettingsTemp.setNumberOfHoodiePerPackage(priceSettings.getNumberOfHoodiePerPackage());
//        priceSettingsTemp.setNumberOfTShirtPerPackage(priceSettings.getNumberOfTShirtPerPackage());
//        priceSettingsTemp.setMinimumQuantity(priceSettings.getMinimumQuantity());
//        priceSettingsTemp.setMaximumQuantity(priceSettings.getMaximumQuantity());
//        priceSettingsTemp.setSetupChargePerNumberOfColors(priceSettings.getSetupChargePerNumberOfColors());
//        priceSettingsTemp.setAdminFees(priceSettings.getAdminFees());

//        jpaPriceSettingsRepository.save(priceSettingsTemp);

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
