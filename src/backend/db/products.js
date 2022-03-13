import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    categoryName: "non-fiction",
    productName: "name 1",
    productImg: "someurl",
    isInStock: true,
    isOnSale: true,
    originalPrice: "123",
    discountedPrice: "234",
    discountedPctage: "50",
  },
  // {
  //   _id: uuid(),
  //   categoryName: "horror",
  //   productName: "name 1",
  //   productImg: "someurl",
  //   isInStock: true,
  //   isOnSale: true,
  //   originalPrice: "123",
  //   discountedPrice: "234",
  //   discountedPctage: "50",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "fiction",
  //   productName: "name 1",
  //   productImg: "someurl",
  //   isInStock: true,
  //   isOnSale: true,
  //   originalPrice: "123",
  //   discountedPrice: "234",
  //   discountedPctage: "50",
  // },
];
