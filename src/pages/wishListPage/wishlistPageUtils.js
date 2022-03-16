import axios from "axios";

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
  console.log(product);

  const isProductInCart =
    cart.filter((cartProduct) => {
      return product._id === cartProduct._id;
    }).length !== 0;

  const res = {};
  res.itemDetails = { ...product };

  res.priAction = isProductInCart
    ? { name: "Go To Cart", isLink: true, action: () => {} }
    : {
        name: "Add To Cart",
        isLink: false,
        action: () => {}, //addtoCart(setCart),
      };
  res.secAction = { name: "Buy Now", isLink: true, action: () => {} };
  res.wishlistAction = {
    isProductInWishlist: true,
    action: removeFromWishlist(setWishlist),
  };

  return res;
};

export { getItemCardData };
