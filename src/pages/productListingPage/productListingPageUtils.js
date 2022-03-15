import axios from "axios";

const addtoCart = (itemDetails) => {
  console.log(itemDetails);
  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  let payload = { product: itemDetails };
  (async () => {
    let res = await axios.post("/api/user/cart", payload, config);
    console.log(res);
  })();
};

const addToWishlist = (itemDetails) => {
  console.log(itemDetails);
  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  let payload = { product: itemDetails };
  (async () => {
    let res = await axios.post("/api/user/wishlist", payload, config);
    console.log(res);
  })();
};

const removeFromWishlist = (itemDetails) => {
  console.log(itemDetails);
  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  let payload = { product: itemDetails };
  (async () => {
    let res = await axios.post("/api/user/wishlist", payload, config);
    console.log(res);
  })();
};

const getItemCardData = (product, cart, wishlist) => {
  const isProductInCart =
    cart.filter((cartProduct) => {
      return product._id === cartProduct._id;
    }).length !== 0;

  const isProductInWishlist =
    wishlist.filter((wishlistProduct) => {
      return product._id === wishlistProduct._id;
    }).length !== 0;

  const res = {};
  res.itemDetails = { ...product };

  res.priAction = isProductInCart
    ? { name: "Go To Cart", isLink: true, action: addtoCart }
    : {
        name: "Add To Cart",
        isLink: false,
        action: addtoCart,
      };
  res.secAction = isProductInCart
    ? { name: "Go To Cart", isLink: true, action: addtoCart }
    : {
        name: "Add To Cart",
        isLink: false,
        action: addtoCart,
      };
  res.wishlistAction = isProductInWishlist
    ? { isProductInWishlist: isProductInWishlist, action: removeFromWishlist }
    : {
        isProductInWishlist: isProductInWishlist,
        action: addToWishlist,
      };
  return res;
};

export { addtoCart, addToWishlist, getItemCardData };
