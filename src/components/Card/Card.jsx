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

  const itemDetails = props.itemDetails ?? {
    id: uuidv4(),
    productName: "name 1",
    productImg: "someurl",
    isInStock: true,
    isOnSale: true,
    originalPrice: "123",
    discountedPrice: "234",
    discountedPctage: "50",
  };

  const {
    id,
    productName,
    productImg,
    isInStock,
    isOnSale,
    originalPrice,
    discountedPrice,
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
        {isInStock && (
          <div className="dui-card-prod-hzntl__img-prod-status">
            <p className="dui-light-theme-txt">OUT OF STOCK</p>
          </div>
        )}
      </div>

      <div className="dui-card-prod-hzntl__info dui-util-spc-pad-0_8rem-xs">
        <p className="dui-card-prod-hzntl__secondary-text">{productName}</p>
        <h3 className="dui-card-prod-hzntl__primary-text dui-util-fw-blk">
          ${originalPrice}{" "}
          <s className="dui-card-prod-hzntl__secondary-text dui-util-txt-sm">
            ${discountedPrice}
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
            onClick={() => priAction(itemDetails)}
          >
            Go to Cart
          </button>
          <button
            className="product-card-btn dui-btn dui-btn--secondary dui-util-txt-sm dui-util-spc-pad-0_8rem-xs reset-button-inherit-parent"
            onClick={() => secAction()}
          >
            Remove from Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
