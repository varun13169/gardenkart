import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    categoryId: "89787d42-11e3-4744-a308-934431705bd5",
    categoryName: "Exotic Indoor Plants",
    productName: "Rose",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648493127/gardenkart-products/products/helen-oreshchenko-973mk-bKc9k-unsplash_inibl5.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 4,
    originalPrice: "50",
    salePrice: "49",
    discountedPctage: "2",
  },
  {
    _id: uuid(),
    categoryId: "d3fc7d01-923c-48ef-a6fe-415cedbe70da",
    categoryName: "Garden Plants",
    productName: "Hydrangea",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648206129/gardenkart-products/products/annie-spratt-vsnISjCT2hY-unsplash_vz0tt4.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 3,
    originalPrice: "60",
    salePrice: "55",
    discountedPctage: "50",
  },
  {
    _id: uuid(),
    categoryId: "152d0358-9f82-4fbd-849e-67c457f3e00d",
    categoryName: "Table Shrubs",
    productName: "Succulent",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648206129/gardenkart-products/products/stephanie-harvey-N9lmtlOuaDM-unsplash_yyztwm.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 2,
    originalPrice: "80",
    salePrice: "75",
    discountedPctage: "50",
  },
  {
    _id: uuid(),
    categoryId: "152d0358-9f82-4fbd-849e-67c457f3e00d",
    categoryName: "Table Shrubs",
    productName: "Herb",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648204865/gardenkart-products/products/jason-leung-YteizPtp-l8-unsplash_ev3nxb.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 1,
    originalPrice: "94",
    salePrice: "90",
    discountedPctage: "50",
  },
  {
    _id: uuid(),
    categoryId: "152d0358-9f82-4fbd-849e-67c457f3e00d",
    categoryName: "Table Shrubs",
    productName: "Fragrant Plants",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648204864/gardenkart-products/products/annie-spratt-0cAlNigDa8Q-unsplash_j3hhto.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 4,
    originalPrice: "80",
    salePrice: "75",
    discountedPctage: "50",
  },
  {
    _id: uuid(),
    categoryId: "ce934218-115a-4faf-b396-14484e2c3fcd",
    categoryName: "Seasonal Flowers",
    productName: "Climbing Vine",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648204864/gardenkart-products/products/nguyen-chieu-B1VEQbo0y7o-unsplash_zbatz8.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 3,
    originalPrice: "80",
    salePrice: "75",
    discountedPctage: "50",
  },
  {
    _id: uuid(),
    categoryId: "152d0358-9f82-4fbd-849e-67c457f3e00d",
    categoryName: "Table Shrubs",
    productName: "Ornamental Tree",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648493127/gardenkart-products/products/galina-n-miziNqvJx5M-unsplash_ea0kwq.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 2,
    originalPrice: "80",
    salePrice: "75",
    discountedPctage: "50",
  },
  {
    _id: uuid(),
    categoryId: "ce934218-115a-4faf-b396-14484e2c3fcd",
    categoryName: "Seasonal Flowers",
    productName: "Climbing Vine",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648493134/gardenkart-products/products/engin-akyurt-j1BybobILmA-unsplash_aepjxj.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 1,
    originalPrice: "80",
    salePrice: "75",
    discountedPctage: "50",
  },
  {
    _id: uuid(),
    categoryId: "152d0358-9f82-4fbd-849e-67c457f3e00d",
    categoryName: "Table Shrubs",
    productName: "Flowering Shrub",
    productImg:
      "https://res.cloudinary.com/duepvqb5b/image/upload/v1648493127/gardenkart-products/products/annie-spratt-7qotv-1XF2A-unsplash_kuvveu.jpg",
    isOutOfStock: false,
    isOnSale: true,
    productRating: 4,
    originalPrice: "80",
    salePrice: "75",
    discountedPctage: "50",
  },
];
