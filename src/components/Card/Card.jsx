import imgg from "./dummy-pot-plant.png";
import "./card.css";

export default function Card(props) {
  const priAction =
    props.priAction ??
    (() => {
      console.log("No Primary Action Defined");
    });
  const secAction =
    props.secAction ??
    (() => {
      console.log("No Seconday Action Defined");
    });
  const wishlistAction =
    props.wishlistAction ??
    (() => {
      console.log("No Seconday Action Defined");
    });

  const itemDetails = props.itemDetails ?? {
    id: uuidv4(),
    productName: "name 1",
    productImg: "someurl",
    isOutOfStock: false,
    isOnSale: true,
    originalPrice: "123",
    salePrice: "234",
    discountedPctage: "50",
  };

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="dui-card-prod-hzntl__wishlist-btn_svg dui-util-spc-pad-0_8rem-xs icon icon-tabler icon-tabler-heart"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          fill="#F34E4E"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </button>
      {/* <!-- Button Component Ends -- Icon --> */}
    </div>
  );
}
