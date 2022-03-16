import "./cart-page.css";
import { Navbar, Card, Sidebar } from "../../components";
import { useCart, useWishlist } from "../../contexts";
import {
  getItemCardData,
  getTotalDiscountOnCart,
  getTotalOriginalPriceOfCart,
  getTotalSalePriceOfCart,
  getCartItemCount,
  getDeliveryCharges,
} from "./cartPageUtils";

export default function CartPage() {
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  return (
    <section className="cart-page-namespace page-wrap">
      <section className="cart-page-namespace page-nav">
        <Navbar></Navbar>
      </section>

      <section className="cart-page-namespace page-sidebar"></section>

      <section className="cart-page-namespace page-main">
        <main className="cart-page-namespace main-content">
          <h3 className="dui-util-spc-mgn-2_4rem-m dui-util-fw-bld">
            My Cart ({getCartItemCount(cart)})
          </h3>

          <div className="cart-container">
            <div className="cart-container__cart-items ">
              {cart.map((product) => {
                return (
                  <div className="cart-prod-hzntl-card">
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
                  </div>
                );
              })}
            </div>

            <div className="cart-container__price-details">
              <div className="dui-cart-details-card">
                <h3 className="dui-util-fw-bld">PRICE DETAILS</h3>
                <hr />
                <div className="dui-util-disp-flex-row">
                  <p>Price ({getCartItemCount(cart)} items)</p>
                  <p className="mgn-left-auto">
                    ${getTotalOriginalPriceOfCart(cart)}
                  </p>
                </div>
                <div className="dui-util-disp-flex-row">
                  <p>Discount</p>
                  <p className="mgn-left-auto">
                    -${getTotalDiscountOnCart(cart)}
                  </p>
                </div>
                <div className="dui-util-disp-flex-row">
                  <p>Delivery Charges</p>
                  <p className="mgn-left-auto">${getDeliveryCharges(cart)}</p>
                </div>
                <hr />
                <div className="dui-util-disp-flex-row dui-util-fw-bld">
                  <p>TOTAL AMOUNT</p>
                  <p className="mgn-left-auto">
                    $
                    {Number(getTotalSalePriceOfCart(cart)) +
                      Number(getDeliveryCharges(cart))}
                  </p>
                </div>
                <hr />
                <p>
                  You will save ${getTotalDiscountOnCart(cart)} on this order
                </p>

                <a
                  className="dui-link dui-link--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-sbld dui-util-txt-align-cent"
                  href="#"
                >
                  CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section className="cart-page-namespace page-footer">
        <footer className="footer">Some Footer Information</footer>
      </section>
    </section>
  );
}
