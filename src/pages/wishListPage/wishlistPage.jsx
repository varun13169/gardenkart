import { Card, Navbar } from "../../components";
import { useCart, useWishlist } from "../../contexts";
import "./wishlist-page.css";
import { getItemCardData } from "./wishlistPageUtils";

export default function WishlistPage() {
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();

  return (
    <div className="wishlist-page-namespace page-wrap">
      <section className="wishlist-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="wishlist-page-namespace page-sidebar"></section>

      <section className="wishlist-page-namespace page-main">
        <main className="main-content dui-util-spc-pad-2_4rem-m">
          <h2 className="dui-util-fw-bld dui-util-spc-mgn-1_6rem-s">
            My Wishlist
          </h2>
          <div className="main-content_wishlist-holder">
            {wishlist.map((product) => {
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
          </div>
        </main>
      </section>

      <section className="wishlist-page-namespace page-footer">
        <footer className="footer">Some Footer Information</footer>
      </section>
    </div>
  );
}
