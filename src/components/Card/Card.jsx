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
  const itemDetails = props.itemDetails ?? {name: "Amazing Pot"};
  const itemName = itemDetails.name;
  console.log("Inside card: ");
  console.log(props);

  return (
    <div className="dui-card-prod-hzntl dui-util-bdr-radi-5px-s dui-util-gry-shdw dui-util-pos-rel">
      {/* <!-- Badge Component Starts -- with Text --> */}
      <div className="dui-badge">
        <div className="dui-util-txt-sm dui-util-fw-reg">SALE</div>
      </div>
      {/* <!-- Badge Component Ends -- with Text --> */}

      <div className="dui-card-prod-hzntl__img-container">
        <img className="dui-card-prod-hzntl__img" src={imgg} alt="" />
        <div className="dui-card-prod-hzntl__img-prod-status">
          <p className="dui-light-theme-txt">OUT OF STOCK</p>
        </div>
      </div>

      <div className="dui-card-prod-hzntl__info dui-util-spc-pad-0_8rem-xs">
        <p className="dui-card-prod-hzntl__secondary-text">{itemName}</p>
        <h3 className="dui-card-prod-hzntl__primary-text dui-util-fw-blk">
          $2000{" "}
          <s className="dui-card-prod-hzntl__secondary-text dui-util-txt-sm">
            $3999
          </s>
        </h3>
        <p className="dui-card-prod-hzntl__secondary-text dui-util-txt-sm dui-util-spc-pad-0_8rem-xs dui-util-fw-sbld">
          50% OFF
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
