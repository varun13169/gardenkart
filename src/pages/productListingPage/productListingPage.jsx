import axios from "axios";
import { useEffect } from "react";
import { FilterSVG } from "../../assets/svgReactComponents";
import { Navbar, Card, Sidebar } from "../../components";
import { useCart, useProductFilter, useWishlist } from "../../contexts";
import "./product-listing-page.css";
import { getItemCardData } from "./productListingPageUtils";

export default function ProductListingPage() {
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const { productAndFilterState, setProductAndFilterState } =
    useProductFilter();

  useEffect(() => {
    // Fetch Products
    (async function () {
      const { data } = await axios.get("/api/products");
      setProductAndFilterState({
        type: "SET_FRESH_DATA",
        data: { orgProducts: data.products },
      });
    })();
    let config = {
      headers: {
        Accept: "*/*",
        authorization: localStorage.getItem("token"),
      },
    };

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
                key={product.id}
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
