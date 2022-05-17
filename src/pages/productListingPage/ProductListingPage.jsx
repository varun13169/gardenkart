import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { FilterSVG } from "../../assets/svgReactComponents";
import { Navbar, Card, Sidebar } from "../../components";
import {
  useAuth,
  useCart,
  useProductFilter,
  useWishlist,
} from "../../contexts";
import "./product-listing-page.css";
import { getItemCardData } from "./productListingPageUtils";

export default function ProductListingPage() {
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const { productAndFilterState, setProductAndFilterState } =
    useProductFilter();
  const [categoryArr, setCategoryArr] = useState([]);
  const { auth, checkValidTokenAndSetAuth } = useAuth();
  const { isSignnedIn, token } = auth;

  let { search: initCategory } = useLocation();
  // remove "?" from search
  initCategory = initCategory.substring(1);
  console.log(initCategory);

  useEffect(() => {
    let config = {
      headers: {
        Accept: "*/*",
        authorization: localStorage.getItem("token"),
      },
    };

    // Fetch Categories
    (async function () {
      const { data } = await axios.get("/api/categories");
      setCategoryArr((categoryArr) => data.categories);

      setProductAndFilterState({
        type: "INIT_CATEGORY_FILTER",
        data: { categoryArr: data.categories, initCategory },
      });
    })();

    // Fetch Products
    (async function () {
      const { data } = await axios.get("/api/products");
      setProductAndFilterState({
        type: "SET_FRESH_DATA",
        data: { orgProducts: data.products },
      });
    })();

    if (isSignnedIn === true) {
      // Fetch Cart
      (async () => {
        let res = await axios.get("/api/user/cart", config);
        setCart(res.data.cart);
      })();

      // Fetch Wishlist
      (async () => {
        let res = await axios.get("/api/user/wishlist", config);
        setWishlist(res.data.wishlist);
      })();
    }
  }, []);

  return (
    <div className="product-page-namespace page-wrap">
      <section className="product-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="product-page-namespace page-sidebar">
        <Sidebar></Sidebar>
      </section>

      <section className="product-page-namespace page-main">
        <main className="product-page-namespace main-content dui-util-spc-pad-2_4rem-m">
          {productAndFilterState.productsToShow.map((product) => {
            return (
              <Card
                key={product._id}
                itemCardData={getItemCardData({
                  product,
                  cart,
                  setCart,
                  wishlist,
                  setWishlist,
                })}
              />
            );
          })}
          <div className="mobl-fltr-btn-helper"></div>
          <button
            className="mobl-fltr-btn reset-button-inherit-parent"
            href="/pages/cartPage/cartPage.html"
          >
            <div>
              <FilterSVG />
              <p className="dui-util-fw-bld dui-util-clr-prim-p2">Filter</p>
            </div>
          </button>
        </main>
      </section>

      <section className="product-page-namespace page-footer"></section>
    </div>
  );
}
