import axios from "axios";
const incrementItemInCartAndSetCart = ({ itemDetails, cart, setCart }) => {
  setCart((cart) =>
    cart.map((e) =>
      e["_id"] === itemDetails["_id"] ? { ...e, qty: e.qty + 1 } : e
    )
  );

  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  let payload = {
    action: {
      type: "increment",
    },
  };
  (async () => {
    try {
      let res = await axios.post(
        "/api/user/cart/" + itemDetails._id,
        payload,
        config
      );
      setCart((cart) => res.data.cart);
    } catch (err) {
      console.log(err);
    }
  })();
};
const incrementItemInCart = ({ cart, setCart }) => {
  return (itemDetails) => {
    incrementItemInCartAndSetCart({ itemDetails, cart, setCart });
  };
};

const decrementItemInCartAndSetCart = ({ itemDetails, cart, setCart }) => {
  // setCart((cart) =>
  //   cart.map((e) => {
  //     e._id === itemDetails._id ? { ...e, qty: e.qty - 1 } : e;
  //   })
  // );

  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  let payload = {
    action: {
      type: "decrement",
    },
  };
  (async () => {
    try {
      let res = await axios.post(
        "/api/user/cart/" + itemDetails._id,
        payload,
        config
      );
      setCart((cart) => res.data.cart);
    } catch (err) {
      console.log(err);
    }
  })();
};
const decrementItemInCart = ({ cart, setCart }) => {
  return (itemDetails) => {
    decrementItemInCartAndSetCart({ itemDetails, cart, setCart });
  };
};

const removeFromCartAndSetCart = ({ itemDetails, cart, setCart }) => {
  setCart((cart) => cart.filter((e) => e._id !== itemDetails._id));

  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  (async () => {
    try {
      let res = await axios.delete("/api/user/cart/" + itemDetails._id, config);
      setCart((cart) => res.data.cart);
    } catch (err) {
      console.log(err);
    }
  })();
};
const removeFromCart = ({ cart, setCart }) => {
  return (itemDetails) => {
    removeFromCartAndSetCart({ itemDetails, cart, setCart });
  };
};

const addToWishlistAndSetWishlist = ({
  itemDetails,
  wishlist,
  setWishlist,
}) => {
  setWishlist((wishlist) => [...wishlist, { ...itemDetails }]);

  let config = {
    headers: {
      Accept: "*/*",
      authorization: localStorage.getItem("token"),
    },
  };
  let payload = { product: itemDetails };
  (async () => {
    let res = await axios.post("/api/user/wishlist", payload, config);
    setWishlist((wishlist) => res.data.wishlist);
  })();
};
const addToWishlist = ({ wishlist, setWishlist }) => {
  return (itemDetails) => {
    addToWishlistAndSetWishlist({ itemDetails, wishlist, setWishlist });
  };
};

const removeFromWishlistAndSetWishlist = ({
  itemDetails,
  wishlist,
  setWishlist,
}) => {
  setWishlist((wishlist) => wishlist.filter((e) => e._id !== itemDetails._id));

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
      setWishlist((wishlist) => res.data.wishlist);
    } catch (err) {
      console.log(err);
    }
  })();
};
const removeFromWishlist = ({ wishlist, setWishlist }) => {
  return (itemDetails) => {
    removeFromWishlistAndSetWishlist({ itemDetails, wishlist, setWishlist });
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
    cartActions: {
      increment: incrementItemInCart({ cart, setCart }),
      decrement: decrementItemInCart({ cart, setCart }),
    },
  };

  res.secAction = {
    name: "Remove",
    action: removeFromCart({ cart, setCart }),
  };

  res.wishlistAction = isProductInWishlist
    ? {
        isProductInWishlist: isProductInWishlist,
        action: removeFromWishlist({ wishlist, setWishlist }),
      }
    : {
        isProductInWishlist: isProductInWishlist,
        action: addToWishlist({ wishlist, setWishlist }),
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
