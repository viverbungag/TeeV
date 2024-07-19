INSERT INTO category (id, name) VALUES
(1, 'Short Sleeve'),
(2, 'Long Sleeve'),
(3, 'Polo'),
(4, 'Performance'),
(5, 'Long sleeve Polo'),
(6, 'Tote Bag'),
(7, 'Hoodie'),
(8, 'Crewneck'),
(9, 'Hats'),
(10, 'Beanies'),
(11, 'Ladies Shirts'),
(12, 'Toddler Tees'),
(13, 'Tank Tops'),
(14, 'Pajama');

INSERT INTO brand (id, name) VALUES
(1, 'AS Colour'),
(2, 'Bella + Canvas'),
(3, 'Boxercraft'),
(4, 'District'),
(5, 'Gildan'),
(6, 'Hanes'),
(7, 'Independent'),
(8, 'Jerzees'),
(9, 'La Apparel'),
(10, 'Liberty'),
(11, 'Next Level'),
(12, 'Nike'),
(13, 'Prime Line'),
(14, 'Team 365'),
(15, 'Tie-Dye'),
(16, 'UltraClub');

INSERT INTO style (id, name) VALUES
(1, '5000'),
(2, '6004'),
(3, '12600');

INSERT INTO product (id, name, brand_id, style_id, size_prices_for_white, size_prices_for_colored, available_sizes) VALUES
(1, 'Unisex Jersey Short Sleeve Tee', 1, 1,
'{"S":2.47,"M":2.47,"L":2.47,"XL":2.47,"2XL":4.36,"3XL":5.45,"4XL":5.45}',
'{"S":2.47,"M":2.47,"L":2.47,"XL":2.47,"2XL":4.36,"3XL":5.45,"4XL":5.45}',
'[{"name": "XS", "value": true}, {"name": "S", "value": true}, {"name": "M", "value": true}, {"name": "L", "value": true}, {"name": "XL", "value": true}, {"name": "2XL", "value": true}, {"name": "3XL", "value": true}, {"name": "4XL", "value": true}, {"name": "5XL", "value": false}]');


INSERT INTO product_category (product_id, category_id) VALUES
(1, 1),
(1, 11),
(1, 12),
(1, 13);

INSERT INTO price_settings (
id,
number_of_t_shirt_per_package,
number_of_hoodie_per_package,
minimum_quantity,
maximum_quantity,
setup_charge_per_number_of_colors,
admin_fees,
front_print_price,
back_print_price) VALUES (
1,
72,
24,
6,
9000,
25.00,
11.5,
'[
    {
      "from": 6,
      "to": 11,
      "pricePerColorQuantity": {"0": 0, "1": 8, "2": 9, "3": 10, "4": 11, "5": 12, "6": 13, "7": 14, "8": 15}
    },
    {
      "from": 12,
      "to": 18,
      "pricePerColorQuantity": {"0": 0, "1": 3.80, "2": 4.75, "3": 5.50, "4": 6.50, "5": 7.50, "6": 8.50, "7": 12, "8": 13}
    },
    {
      "from": 19,
      "to": 24,
      "pricePerColorQuantity": {"0": 0, "1": 3.40, "2": 4.40, "3": 5.20, "4": 6, "5": 7, "6": 8, "7": 9, "8": 10}
    },
    {
      "from": 25,
      "to": 36,
      "pricePerColorQuantity": {"0": 0, "1": 3, "2": 4.12, "3": 5, "4": 5.80, "5": 6.80, "6": 0, "7": 7.80, "8": 8.80}
    },
    {
      "from": 37,
      "to": 48,
      "pricePerColorQuantity": {"0": 0, "1": 2.80, "2": 3.80, "3": 4.70, "4": 5.70, "5": 6.50, "6": 7.50, "7": 8.37, "8": 9.27}
    },
    {
      "from": 49,
      "to": 72,
      "pricePerColorQuantity": {"0": 0, "1": 2.50, "2": 3.50, "3": 4.40, "4": 4.85, "5": 5.70, "6": 6.50, "7": 7.34, "8": 8.16}
    },
    {
      "from": 73,
      "to": 96,
      "pricePerColorQuantity": {"0": 0, "1": 1.90, "2": 2.80, "3": 3.15, "4": 3.96, "5": 5.08, "6": 5.31, "7": 6.13, "8": 6.81}
    },
    {
      "from": 97,
      "to": 120,
      "pricePerColorQuantity": {"0": 0, "1": 1.66, "2": 2.28, "3": 2.80, "4": 3.59, "5": 4.46, "6": 4.73, "7": 5.39, "8": 5.96}
    },
    {
      "from": 121,
      "to": 200,
      "pricePerColorQuantity": {"0": 0, "1": 1.53, "2": 1.96, "3": 2.64, "4": 3.06, "5": 3.66, "6": 4.17, "7": 4.73, "8": 5.28}
    },
    {
      "from": 201,
      "to": 300,
      "pricePerColorQuantity": {"0": 0, "1": 1.40, "2": 1.65, "3": 2.48, "4": 2.72, "5": 3.22, "6": 3.63, "7": 4.10, "8": 4.55}
    },
    {
      "from": 301,
      "to": 400,
      "pricePerColorQuantity": {"0": 0, "1": 1.28, "2": 1.52, "3": 2.16, "4": 2.40, "5": 2.80, "6": 3.20, "7": 3.60, "8": 4.00}
    },
    {
      "from": 401,
      "to": 500,
      "pricePerColorQuantity": {"0": 0, "1": 1.20, "2": 1.35, "3": 1.80, "4": 1.95, "5": 2.40, "6": 2.80, "7": 2.40, "8": 2.55}
    },
    {
      "from": 501,
      "to": 750,
      "pricePerColorQuantity": {"0": 0, "1": 1.09, "2": 1.23, "3": 1.52, "4": 1.60, "5": 1.74, "6": 1.81, "7": 1.93, "8": 2.04}
    },
    {
      "from": 751,
      "to": 1000,
      "pricePerColorQuantity": {"0": 0, "1": 0.98, "2": 1.19, "3": 1.47, "4": 1.54, "5": 1.68, "6": 1.75, "7": 1.87, "8": 1.97}
    },
    {
      "from": 1001,
      "to": 1500,
      "pricePerColorQuantity": {"0": 0, "1": 0.91, "2": 1.12, "3": 1.33, "4": 1.40, "5": 1.54, "6": 1.61, "7": 1.73, "8": 1.83}
    },
    {
      "from": 1501,
      "to": 2500,
      "pricePerColorQuantity": {"0": 0, "1": 0.83, "2": 1.10, "3": 1.31, "4": 1.38, "5": 1.52, "6": 1.59, "7": 1.70, "8": 1.81}
    },
    {
      "from": 2501,
      "to": 4000,
      "pricePerColorQuantity": {"0": 0, "1": 0.74, "2": 1.08, "3": 1.28, "4": 1.35, "5": 1.49, "6": 1.55, "7": 1.67, "8": 1.77}
    },
    {
      "from": 4001,
      "to": 6000,
      "pricePerColorQuantity": {"0": 0, "1": 0.67, "2": 1.06, "3": 1.26, "4": 1.33, "5": 1.46, "6": 1.53, "7": 1.64, "8": 1.74}
    },
    {
      "from": 6001,
      "to": 9000,
      "pricePerColorQuantity": {"0": 0, "1": 0.58, "2": 1.04, "3": 1.24, "4": 1.30, "5": 1.43, "6": 1.50, "7": 1.60, "8": 1.69}
    }
]',
'[
    {
      "from": 6,
      "to": 11,
      "pricePerColorQuantity": {"0": 0, "1": 2, "2": 2.3, "3": 2.5, "4": 3.25, "5": 3.75, "6": 4.25, "7": 4.88, "8": 5.45}
    },
    {
      "from": 12,
      "to": 24,
      "pricePerColorQuantity": {"0": 0, "1": 1, "2": 2.45, "3": 2.8, "4": 3.45, "5": 3.95, "6": 4.45, "7": 5.03, "8": 5.57}
    },
    {
      "from": 25,
      "to": 36,
      "pricePerColorQuantity": {"0": 0, "1": 1.5, "2": 2.25, "3": 2.75, "4": 3.4, "5": 3.9, "6": 4.4, "7": 4.98, "8": 5.52}
    },
    {
      "from": 37,
      "to": 48,
      "pricePerColorQuantity": {"0": 0, "1": 1.45, "2": 2.06, "3": 2.7, "4": 3.2, "5": 3.7, "6": 3.8, "7": 4.3, "8": 4.68}
    },
    {
      "from": 49,
      "to": 72,
      "pricePerColorQuantity": {"0": 0, "1": 1.54, "2": 2.09, "3": 2.7, "4": 3.36, "5": 3.69, "6": 3.8, "7": 3.8, "8": 4.65}
    },
    {
      "from": 73,
      "to": 96,
      "pricePerColorQuantity": {"0": 0, "1": 1.44, "2": 1.96, "3": 2.36, "4": 2.93, "5": 3.45, "6": 3.62, "7": 4.17, "8": 4.6}
    },
    {
      "from": 97,
      "to": 120,
      "pricePerColorQuantity": {"0": 0, "1": 1.21, "2": 1.78, "3": 2.01, "4": 2.53, "5": 3.24, "6": 3.39, "7": 4.01, "8": 4.49}
    },
    {
      "from": 121,
      "to": 200,
      "pricePerColorQuantity": {"0": 0, "1": 1.09, "2": 1.5, "3": 1.84, "4": 2.36, "5": 2.93, "6": 3.11, "7": 3.65, "8": 4.09}
    },
    {
      "from": 201,
      "to": 300,
      "pricePerColorQuantity": {"0": 0, "1": 1.04, "2": 1.32, "3": 1.78, "4": 2.01, "5": 2.47, "6": 2.82, "7": 3.16, "8": 3.51}
    },
    {
      "from": 301,
      "to": 400,
      "pricePerColorQuantity": {"0": 0, "1": 0.86, "2": 1.15, "3": 1.73, "4": 1.9, "5": 2.24, "6": 2.53, "7": 2.79, "8": 3.06}
    },
    {
      "from": 401,
      "to": 500,
      "pricePerColorQuantity": {"0": 0, "1": 0.81, "2": 1.09, "3": 1.55, "4": 2.16, "5": 2.3, "6": 2.53, "7": 2.53, "8": 2.78}
    },
    {
      "from": 501,
      "to": 750,
      "pricePerColorQuantity": {"0": 0, "1": 0.69, "2": 1.04, "3": 1.38, "4": 1.50, "5": 1.61, "6": 1.73, "7": 1.84, "8": 1.96}
    },
    {
      "from": 751,
      "to": 1000,
      "pricePerColorQuantity": {"0": 0, "1": 0.66, "2": 1.02, "3": 1.26, "4": 1.44, "5": 1.44, "6": 1.50, "7": 1.59, "8": 1.66}
    },
    {
      "from": 1001,
      "to": 1500,
      "pricePerColorQuantity": {"0": 0, "1": 0.63, "2": 1.06, "3": 1.31, "4": 1.38, "5": 1.5, "6": 1.56, "7": 1.66, "8": 1.74}
    },
    {
      "from": 1501,
      "to": 2500,
      "pricePerColorQuantity": {"0": 0, "1": 0.58, "2": 1.02, "3": 1.22, "4": 1.47, "5": 1.41, "6": 1.47, "7": 1.57, "8": 1.64}
    },
    {
      "from": 2501,
      "to": 4000,
      "pricePerColorQuantity": {"0": 0, "1": 0.52, "2": 0.98, "3": 1.17, "4": 1.3, "5": 1.43, "6": 1.5, "7": 1.58, "8": 1.66}
    },
    {
      "from": 4001,
      "to": 6000,
      "pricePerColorQuantity": {"0": 0, "1": 0.47, "2": 0.93, "3": 1.13, "4": 1.33, "5": 1.46, "6": 1.53, "7": 1.57, "8": 1.65}
    },
    {

      "from": 6001,
      "to": 9000,
      "pricePerColorQuantity": {"0": 0, "1": 0.44, "2": 0.86, "3": 1.06, "4": 1.33, "5": 1.46, "6": 1.53, "7": 1.56, "8": 1.63}
    }
]');


