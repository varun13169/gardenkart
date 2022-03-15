import axios from "axios";
import imgg from "./dummy-pot-plant.png";
import "./card.css";
import WishlistHeart from "../../assets/WishlistHeart";

export default function Card({ itemCardData }) {
  const { itemDetails, priAction, secAction, wishlistAction } = itemCardData;

  const {
    id,
    productName,
    productImg,
    isOutOfStock,
    isOnSale,
    originalPrice,
    salePrice,
    discountedPctage,
  } = itemDetails;

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
          <button
            className="product-card-btn dui-btn dui-btn--primary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-button-inherit-parent"
            onClick={() => priAction.action(itemDetails)}
          >
            {priAction.name}
          </button>
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
          <WishlistHeart
            className="dui-card-prod-hzntl__wishlist-btn_svg dui-util-spc-pad-0_8rem-xs"
            height="1rem"
            width="1rem"
            strokeWidth="1.5"
            fill="#F34E4E"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></WishlistHeart>
        )}
        {!wishlistAction.isProductInWishlist && (
          <WishlistHeart
            className="dui-card-prod-hzntl__wishlist-btn_svg dui-util-spc-pad-0_8rem-xs"
            height="1rem"
            width="1rem"
            strokeWidth="1.5"
            fill="none"
            stroke="#F34E4E"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></WishlistHeart>
        )}
      </button>
      {/* <!-- Button Component Ends -- Icon --> */}
    </div>
  );
}
