import { Card, Navbar } from "../../components";
import "./wishlist-page.css";

export default function WishlistPage() {
  return (
    <div className="page-wrap">
      <section className="page-nav">
      <Navbar></Navbar>
      </section>

      <section className="page-sidebar"></section>

      <section className="page-main">
        <main className="main-content dui-util-spc-pad-2_4rem-m">
          <h2 className="dui-util-fw-bld dui-util-spc-mgn-1_6rem-s">
            My Wishlist
          </h2>
          <div className="main-content_wishlist-holder">
            {[1,2,3,4,5,6,7,8,9].map((itemDetails) => {
              return <Card key={itemDetails} />;
            })}
          </div>
        </main>
      </section>

      <section className="page-footer">
        <footer className="footer">Some Footer Information</footer>
      </section>
    </div>
  );
}
