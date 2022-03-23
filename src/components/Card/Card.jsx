import axios from "axios";
import imgg from "./dummy-pot-plant.png";
import "./card.css";
import { BinSVG, WishlistHeartSVG } from "../../assets/svgReactComponents";
import { Link, useLocation } from "react-router-dom";
import { useCart, useWishlist } from "../../contexts";

export default function Card({ itemCardData }) {
  const { itemDetails, priAction, secAction, wishlistAction } = itemCardData;

  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  const {
    _id,
    productName,
    productImg,
    isOutOfStock,
    isOnSale,
    originalPrice,
    salePrice,
    discountedPctage,
    qty,
  } = itemDetails;

  const isProductInCart =
    cart.filter((cartProduct) => {
      return itemDetails._id === cartProduct._id;
    }).length !== 0;

  const isProductInWishlist =
    wishlist.filter((wishlistProduct) => {
      return itemDetails._id === wishlistProduct._id;
    }).length !== 0;

  const { pathname } = useLocation();

  return (
    <div className="dui-card-prod-hzntl dui-util-bdr-radi-5px-s dui-util-gry-shdw dui-util-pos-rel">
      {/* <!-- Badge Component Starts -- with Text --> */}
      {isOnSale && (
        <div className="dui-badge">
          <div className="dui-util-txt-sm dui-util-fw-reg">SALE</div>
        </div>
      )}
      {/* <!-- Badge Component Ends -- with Text --> */}

      <div className="dui-card-prod-hzntl__img-container">
        <img className="dui-card-prod-hzntl__img" src={imgg} alt="" />
        {isOutOfStock && (
          <div className="dui-card-prod-hzntl__img-prod-status">
            <p className="dui-light-theme-txt">OUT OF STOCK</p>
          </div>
        )}
      </div>

      <div className="dui-card-prod-hzntl__info dui-util-spc-pad-0_8rem-xs">
        <p className="dui-card-prod-hzntl__secondary-text">{productName}</p>
        <h3 className="dui-card-prod-hzntl__primary-text dui-util-fw-blk">
          ${salePrice}{" "}
          <s className="dui-card-prod-hzntl__secondary-text dui-util-txt-sm">
            ${originalPrice}
          </s>
        </h3>
        <p className="dui-card-prod-hzntl__secondary-text dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-sbld">
          {discountedPctage}% OFF
        </p>
      </div>

      <div className="dui-card-prod-hzntl__actions dui-util-spc-pad-1_6rem-s">
        <div className="dui-card-prod-hzntl__buttons">
          {((pathname === "/products" && !isProductInCart) ||
            (pathname === "/wishlist" && !isProductInCart)) && (
            <button
              className="product-card-btn dui-btn dui-btn--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-button-inherit-parent"
              onClick={() => priAction.action(itemDetails)}
            >
              {priAction.name}
            </button>
          )}
          {pathname === "/products" && isProductInCart && (
            <Link
              to={priAction.toPath}
              className="product-card-link dui-link dui-link--primary dui-util-txt-sm dui-util-spc-pad-xs dui-util-txt-align-cent"
            >
              {priAction.name}
            </Link>
          )}
          {(pathname === "/cart" ||
            (pathname === "/wishlist" && isProductInCart)) && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                className="product-card-btn dui-btn dui-btn--primary dui-util-txt-md dui-util-spc-pad reset-button-inherit-parent"
                style={{ flexGrow: "1" }}
                onClick={() => priAction.cartActions.decrement(itemDetails)}
                disabled={
                  (qty ?? cart.filter((cp) => cp._id === _id)[0].qty) === 1
                }
              >
                -
              </button>
              <p className="dui-util-txt-align-cent" style={{ flexGrow: "1" }}>
                {qty ?? cart.filter((cp) => cp._id === _id)[0].qty}
              </p>
              <button
                className="product-card-btn dui-btn dui-btn--primary dui-util-txt-md dui-util-spc-pad-0_8re-xs reset-button-inherit-parent"
                style={{ flexGrow: "1" }}
                onClick={() => priAction.cartActions.increment(itemDetails)}
              >
                +
              </button>
            </div>
          )}
          <button
            className="product-card-btn dui-btn dui-btn--secondary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-button-inherit-parent"
            onClick={() => secAction.action(itemDetails)}
          >
            {secAction.name}
          </button>
        </div>
      </div>

      {/* <!-- Button Component Starts -- Icon --> */}
      <button
        className="dui-card-prod-hzntl__wishlist-btn dui-btn dui-util-bdr-radi-999px-mx reset-button-inherit-parent"
        onClick={() => wishlistAction.action(itemDetails)}
      >
        {wishlistAction.isProductInWishlist && (
          <WishlistHeartSVG
            className="dui-card-prod-hzntl__wishlist-btn_svg dui-util-spc-pad-0_8rem-xs"
            height="1rem"
            width="1rem"
            strokeWidth="1.5"
            fill="#F34E4E"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></WishlistHeartSVG>
        )}
        {!wishlistAction.isProductInWishlist && (
          <WishlistHeartSVG
            className="dui-card-prod-hzntl__wishlist-btn_svg dui-util-spc-pad-0_8rem-xs"
            height="1rem"
            width="1rem"
            strokeWidth="1.5"
            fill="none"
            stroke="#F34E4E"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></WishlistHeartSVG>
        )}
      </button>
      {/* <!-- Button Component Ends -- Icon --> */}
    </div>
  );
}
