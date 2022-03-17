import axios from "axios";

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

/**
 * Add To Wishlist And Set Wishlist
 * @param {Object} Object
 */
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

/**
 * Add To Wishlist
 * @param {Object} Object
 * @return {addToWishlistAndSetWishlist} addToWishlistAndSetWishlist
 */
const addToWishlist = ({ wishlist, setWishlist }) => {
  return (itemDetails) => {
    addToWishlistAndSetWishlist({ itemDetails, wishlist, setWishlist });
  };
};

/**
 * Remove From Wishlist And Set Wishlist
 * @param {Object} Object
 */
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

/**
 * Remove From Wishlist
 * @param {Object} Object
 * @return {removeFromWishlistAndSetWishlist} removeFromWishlistAndSetWishlist
 */
const removeFromWishlist = ({ wishlist, setWishlist }) => {
  return (itemDetails) => {
    removeFromWishlistAndSetWishlist({ itemDetails, wishlist, setWishlist });
  };
};

/**
 * Get Item Card Data
 * @param {Object} Object
 * @return {res} res
 */
const getItemCardData = ({ product, cart, setCart, wishlist, setWishlist }) => {
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
    ? { name: "Go To Cart", toPath: "/cart" }
    : {
        name: "Add To Cart",
        action: addtoCart({ cart, setCart }),
      };
  res.secAction = { name: "Buy Now", action: () => {} };
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

export { getItemCardData };
