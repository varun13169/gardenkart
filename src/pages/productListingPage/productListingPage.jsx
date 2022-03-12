import { Navbar, Card, Sidebar } from "../../components";
import "./product-listing-page.css";

export default function ProductListingPage() {
  return (
    <div className="page-wrap">
      <section className="page-nav">
        <Navbar></Navbar>
      </section>

      <section className="page-sidebar">
        <Sidebar></Sidebar>
      </section>

      <section className="page-main">
        <main className="main-content dui-util-spc-pad-2_4rem-m">
          {[1,2,3,4,5,6,7,8].map((itemDetails) => {
            // console.log(a);
            return (
              <Card
              />
            );
          })}
          {/* <div className="mobl-fltr-btn-helper"></div>
            <button className="mobl-fltr-btn reset-button-inherit-parent" href="/pages/cartPage/cartPage.html">
                <div className="dui-util-clr-prim-p2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter" width="56"
                        height="56" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9A9A9A" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
                    </svg>
                    <p className="dui-util-fw-bld">Filter</p>
                </div>
            </button> */}
        </main>
      </section>

      <section className="page-footer"></section>
    </div>
  );
}