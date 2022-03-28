import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="dui-nav-sch-act">
      <Link
        className="dui-nav-sch-act__logo dui-util-txt-decoration-none"
        to="/"
      >
        <h3 className="dui-util-fw-bld dui-primary-color">Garden Kart</h3>
      </Link>

      {/* <!-- Search --> */}
      <div className="dui-nav-sch-act__search dui-inp-txt dui-inp-txt--search">
        <i className="dui-inp-txt__icon dui-inp-txt__icon--search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dui-inp-txt__icon-content dui-inp-txt__icon-content--search icon icon-tabler icon-tabler-search"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#059669"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </i>
        <label>
          <input
            className="dui-inp-txt__input dui-inp-txt__input--search dui-util-txt-sm dui-util-bdr-radi-5px-s reset-input-inherit-parent"
            type="text"
            placeholder="Search"
          />
        </label>
      </div>

      <ul className="dui-nav-sch-act__actions dui-ul">
        <li>
          <div className="dui-nav-sch-act__auth-actions">
            {/* <!-- SignUp Button --> */}
            <Link
              className="dui-nav-sch-act__signup-btn dui-link dui-link--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-bld"
              to="/sign-up"
            >
              Sign Up
            </Link>

            {/* <!-- Login Button --> */}
            <Link
              className="dui-nav-sch-act__login-btn dui-link dui-link--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-bld"
              to="/sign-in"
            >
              Login
            </Link>
          </div>
        </li>

        <li>
          <Link
            className="dui-nav-sch-act__wish-lst-btn dui-util-disp-inline-block"
            to="/wishlist"
          >
            <div className="dui-badge dui-badge--round-ele-0_5-top-0_5-right">
              <div>0</div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-heart"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#9A9A9A"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </Link>
        </li>

        <li>
          <Link className="dui-nav-sch-act__cart_lst-btn dui-link" to="/cart">
            <div className="dui-util-clr-prim-p2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="btn__icon icon icon-tabler icon-tabler-shopping-cart"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#9A9A9A"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
              <p className="dui-util-fw-bld dui-primary-color-p2">Cart</p>
            </div>
          </Link>
        </li>

        <li>
          <button className="dui-nav-sch-act__drk-mode-btn dui-btn reset-button-inherit-parent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dui-nav-sch-act__drk-mode-lgt icon icon-tabler icon-tabler-brightness-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="3" />
              <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="dui-nav-sch-act__drk-mode-drk dui-util-disp-none icon icon-tabler icon-tabler-moon"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
