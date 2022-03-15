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

export { addtoCart, addToWishlist };
