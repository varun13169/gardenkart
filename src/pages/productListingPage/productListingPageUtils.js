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

const addToWishlistAndSetWishlist = (itemDetails, setWishlist) => {
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
    console.log(res.data.wishlist);
    setWishlist(res.data.wishlist);
  })();
};
const addToWishlist = (setWishlist) => {
  return (itemDetails) => {
    addToWishlistAndSetWishlist(itemDetails, setWishlist);
  };
};

const removeFromWishlistAndSetWishlist = (itemDetails, setWishlist) => {
  console.log(itemDetails);
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
      console.log(res);
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

const getItemCardData = ({ product, cart, wishlist, setWishlist }) => {
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

export { addtoCart, addToWishlist, getItemCardData };
