package com.teevision.ecommerce_backend.priceSettings;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaPriceSettingsRepository extends JpaRepository<PriceSettings, Long> {


    @Transactional
    @Modifying
    @Query(value = "UPDATE price_settings " +
            "SET front_print_price = CAST(:frontPrintPrice AS jsonb), " +
            "back_print_price = CAST(:backPrintPrice AS jsonb), " +
            "number_of_hoodie_per_package = :numberOfHoodiePerPackage, " +
            "number_of_t_shirt_per_package = :numberOfTShirtPerPackage, " +
            "minimum_quantity = :minimumQuantity, " +
            "maximum_quantity = :maximumQuantity, " +
            "setup_charge_per_number_of_colors = :setupChargePerNumberOfColors, " +
            "admin_fees = :adminFees " +
            "WHERE id = :id", nativeQuery = true)
    void updatePriceSettings(
            @Param("id") Long id,
            @Param("frontPrintPrice") String frontPrintPrice,
            @Param("backPrintPrice") String backPrintPrice,
            @Param("numberOfHoodiePerPackage") Integer numberOfHoodiePerPackage,
            @Param("numberOfTShirtPerPackage") Integer numberOfTShirtPerPackage,
            @Param("minimumQuantity") Integer minimumQuantity,
            @Param("maximumQuantity") Integer maximumQuantity,
            @Param("setupChargePerNumberOfColors") Float setupChargePerNumberOfColors,
            @Param("adminFees") Float adminFees
    );
}


