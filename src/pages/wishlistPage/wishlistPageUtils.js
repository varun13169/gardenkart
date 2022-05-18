import axios from "axios";

const incrementItemInCartAndSetCart = ({ itemDetails, cart, setCart }) => {
  // setCart((cart) =>
  //   cart.map((e) => {
  //     e["id"] === itemDetails["id"] ? { ...e, qty: e.qty + 1 } : e;
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

/**
 * Add To Cart And Set Cart Context
 * @param {Object} Object
 */
const addtoCartAndSetCartContext = ({ itemDetails, cart, setCart }) => {
  setCart((cart) => [...cart, { ...itemDetails }]);

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
      setCart((cart) => res.data.cart);
    } catch (err) {
      console.log(err);
    }
  })();
};

/**
 * Add To Cart
 * @param {Object} Object
 * @return {addtoCartAndSetCartContext} addtoCartAndSetCartContext
 */
const addtoCart = ({ cart, setCart }) => {
  console.log(cart);
  return (itemDetails) => {
    addtoCartAndSetCartContext({ itemDetails, cart, setCart });
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
  console.log(product);

  const isProductInCart =
    cart.filter((cartProduct) => {
      return product._id === cartProduct._id;
    }).length !== 0;

  const res = {};
  res.itemDetails = { ...product };

  res.priAction = isProductInCart
    ? {
        name: "Increment Decrement",
        action: () => {},
        cartActions: {
          increment: incrementItemInCart({ cart, setCart }),
          decrement: decrementItemInCart({ cart, setCart }),
        },
      }
    : {
        name: "Add To Cart",
        action: addtoCart({ cart, setCart }),
      };
  res.secAction = { name: "Buy Now", action: () => {} };
  res.wishlistAction = {
    isProductInWishlist: true,
    action: removeFromWishlist({ wishlist, setWishlist }),
  };

  return res;
};

export { getItemCardData };
