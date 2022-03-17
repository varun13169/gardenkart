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
      setWishlist(res.data.wishlist);
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
    ? { name: "", action: () => {} }
    : {
        name: "Add To Cart",
        action: () => {},
      };
  res.secAction = { name: "Buy Now", action: () => {} };
  res.wishlistAction = {
    isProductInWishlist: true,
    action: removeFromWishlist({ wishlist, setWishlist }),
  };

  return res;
};

export { getItemCardData };
