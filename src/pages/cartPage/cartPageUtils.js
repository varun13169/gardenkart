import axios from "axios";

const removeFromCartAndSetCart = (itemDetails, setCart) => {
  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  (async () => {
    try {
      let res = await axios.delete("/api/user/cart/" + itemDetails._id, config);
      setCart(res.data.cart);
    } catch (err) {
      console.log(err);
    }
  })();
};
const removeFromCart = (setCart) => {
  return (itemDetails) => {
    removeFromCartAndSetCart(itemDetails, setCart);
  };
};

const addtoCartAndSetCartContext = (itemDetails, setCart) => {
  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  let payload = { product: itemDetails };
  (async () => {
    try {
      let res = await axios.post("/api/user/cart", payload, config);
      setCart(res.data.cart);
    } catch (err) {
      console.log(err);
    }
  })();
};
const addtoCart = (setCart) => {
  return (itemDetails) => {
    addtoCartAndSetCartContext(itemDetails, setCart);
  };
};

const addToWishlistAndSetWishlist = (itemDetails, setWishlist) => {
  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  let payload = { product: itemDetails };
  (async () => {
    let res = await axios.post("/api/user/wishlist", payload, config);
    setWishlist(res.data.wishlist);
  })();
};
const addToWishlist = (setWishlist) => {
  return (itemDetails) => {
    addToWishlistAndSetWishlist(itemDetails, setWishlist);
  };
};

const removeFromWishlistAndSetWishlist = (itemDetails, setWishlist) => {
  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  (async () => {
    try {
      let res = await axios.delete(
        "/api/user/wishlist/" + itemDetails._id,
        config
      );
      setWishlist(res.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  })();
};
const removeFromWishlist = (setWishlist) => {
  return (itemDetails) => {
    removeFromWishlistAndSetWishlist(itemDetails, setWishlist);
  };
};

const getItemCardData = ({ product, cart, setCart, wishlist, setWishlist }) => {
  const isProductInWishlist =
    wishlist.filter((wishlistProduct) => {
      return product._id === wishlistProduct._id;
    }).length !== 0;

  const res = {};
  res.itemDetails = { ...product };

  res.priAction = {
    name: "Increment Decrement",
    action: () => {},
  };

  res.secAction = {
    name: "Remove",
    action: removeFromCart(setCart),
  };

  res.wishlistAction = isProductInWishlist
    ? {
        isProductInWishlist: isProductInWishlist,
        action: removeFromWishlist(setWishlist),
      }
    : {
        isProductInWishlist: isProductInWishlist,
        action: addToWishlist(setWishlist),
      };

  return res;
};

const getCartItemCount = (cart) => cart.length;

const getTotalOriginalPriceOfCart = (cart) =>
  cart.reduce((total, product) => {
    return total + Number(product.originalPrice);
  }, 0);

const getTotalSalePriceOfCart = (cart) =>
  cart.reduce((total, product) => {
    return total + Number(product.salePrice);
  }, 0);

const getTotalDiscountOnCart = (cart) =>
  getTotalOriginalPriceOfCart(cart) - getTotalSalePriceOfCart(cart);

const getDeliveryCharges = (cart) =>
  getTotalSalePriceOfCart(cart) > 0 ? "499" : "0";

export {
  getItemCardData,
  getTotalOriginalPriceOfCart,
  getTotalSalePriceOfCart,
  getTotalDiscountOnCart,
  getCartItemCount,
  getDeliveryCharges,
};
