import { Navbar, Card, Sidebar } from "../../components";
import "./cart-page.css";

export default function CartPage() {
    return (
        
    <section class="page-wrap">
    <section class="page-nav">
        <Navbar></Navbar>
    </section>

    <section class="page-sidebar">

    </section>

    <section class="page-main">
        <main class="main-content">
            <h3 class="dui-util-spc-mgn-2_4rem-m dui-util-fw-bld">My Cart (2)</h3>

            <div class="cart-container">
                <div class="cart-container__cart-items ">
                {[1, 2].map((itemDetails) => {
                    return (
                    <Card/>
                    );
                })}
                </div>

                <div class="cart-container__price-details">

                    <div class="dui-cart-details-card">
                        <h3 class="dui-util-fw-bld">PRICE DETAILS</h3>
                        <hr/>
                        <div class="dui-util-disp-flex-row">
                            <p>Price (2 items)</p>
                            <p class="mgn-left-auto">$4999</p>
                        </div>
                        <div class="dui-util-disp-flex-row">
                            <p>Discount</p>
                            <p class="mgn-left-auto">-$1999</p>
                        </div>
                        <div class="dui-util-disp-flex-row">
                            <p>Delivery Charges</p>
                            <p class="mgn-left-auto">$499</p>
                        </div>
                        <hr/>
                        <div class="dui-util-disp-flex-row dui-util-fw-bld">
                            <p>TOTAL AMOUNT</p>
                            <p class="mgn-left-auto">$3499</p>
                        </div>
                        <hr/>
                        <p>You will save $1999 on this order</p>

                        <a class="dui-link dui-link--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-sbld dui-util-txt-align-cent"
                            href="#">
                            PLACE ORDER
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </section>

    <section class="page-footer">
        <footer class="footer">
            Some Footer Information
        </footer>
    </section>
</section>
    );
}