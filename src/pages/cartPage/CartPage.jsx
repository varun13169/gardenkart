import { Navbar, Card, Sidebar } from "../../components";
import "./cart-page.css";

export default function CartPage() {
    return (
        
    <section className="page-wrap">
    <section className="page-nav">
        <Navbar></Navbar>
    </section>

    <section className="page-sidebar">

    </section>

    <section className="page-main">
        <main className="main-content">
            <h3 className="dui-util-spc-mgn-2_4rem-m dui-util-fw-bld">My Cart (2)</h3>

            <div className="cart-container">
                <div className="cart-container__cart-items ">
                {[1, 2].map((itemDetails) => {
                    return (
                    <Card/>
                    );
                })}
                </div>

                <div className="cart-container__price-details">

                    <div className="dui-cart-details-card">
                        <h3 className="dui-util-fw-bld">PRICE DETAILS</h3>
                        <hr/>
                        <div className="dui-util-disp-flex-row">
                            <p>Price (2 items)</p>
                            <p className="mgn-left-auto">$4999</p>
                        </div>
                        <div className="dui-util-disp-flex-row">
                            <p>Discount</p>
                            <p className="mgn-left-auto">-$1999</p>
                        </div>
                        <div className="dui-util-disp-flex-row">
                            <p>Delivery Charges</p>
                            <p className="mgn-left-auto">$499</p>
                        </div>
                        <hr/>
                        <div className="dui-util-disp-flex-row dui-util-fw-bld">
                            <p>TOTAL AMOUNT</p>
                            <p className="mgn-left-auto">$3499</p>
                        </div>
                        <hr/>
                        <p>You will save $1999 on this order</p>

                        <a className="dui-link dui-link--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-sbld dui-util-txt-align-cent"
                            href="#">
                            PLACE ORDER
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </section>

    <section className="page-footer">
        <footer className="footer">
            Some Footer Information
        </footer>
    </section>
</section>
    );
}