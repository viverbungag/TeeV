package com.teevision.ecommerce_backend.priceSettings;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity(name = "price_settings")
@ToString
@NoArgsConstructor
@Getter
@Setter
public class PriceSettings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "front_print_price", columnDefinition = "jsonb")
    private String frontPrintPrice;

    @Column(name = "back_print_price", columnDefinition = "jsonb")
    private String backPrintPrice;

    @Column(name = "number_of_hoodie_per_package")
    private Integer numberOfHoodiePerPackage;

    @Column(name = "number_of_t_shirt_per_package")
    private Integer numberOfTShirtPerPackage;

    @Column(name = "minimum_quantity")
    private Integer minimumQuantity;

    @Column(name = "maximum_quantity")
    private Integer maximumQuantity;

    @Column(name = "setup_charge_per_number_of_colors")
    private Float setupChargePerNumberOfColors;

    @Column(name = "admin_fees")
    private Float adminFees;

}
