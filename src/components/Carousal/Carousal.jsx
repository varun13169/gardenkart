import "./carousal.css";
import { useState } from "react";
import { newSlidePositionByOffset } from "./carousal.js";

function Carousal() {
  const [slidePosition, setSlidePosition] = useState(1);

  return (
    <div className="slideshow-container">
      {/* <!-- Full-width images with number and caption text --> */}
      <div
        className={`slideshow-container__slide fade ${
          slidePosition === 1 ? "" : "dui-util-disp-none"
        }`}
      >
        <div className="slideshow-container__slide-number">1 / 3</div>
        <img src="https://res.cloudinary.com/duepvqb5b/image/upload/v1648195641/gardenkart-products/carousal/carousal_1_c90lt2.jpg" />
        <div className="slideshow-container__slide-caption dui-util-disp-none">
          Caption Text
        </div>
      </div>

      <div
        className={`slideshow-container__slide fade ${
          slidePosition === 2 ? "" : "dui-util-disp-none"
        }`}
      >
        <div className="slideshow-container__slide-number">2 / 3</div>
        <img src="https://res.cloudinary.com/duepvqb5b/image/upload/v1648195579/gardenkart-products/carousal/carousal_2_lpqpzm.jpg" />
        <div className="slideshow-container__slide-caption dui-util-disp-none">
          Caption Two
        </div>
      </div>

      <div
        className={`slideshow-container__slide fade ${
          slidePosition === 3 ? "" : "dui-util-disp-none"
        }`}
      >
        <div className="slideshow-container__slide-number">3 / 3</div>
        <img src="https://res.cloudinary.com/duepvqb5b/image/upload/v1648195579/gardenkart-products/carousal/carousal_3_g7kn1q.jpg" />
        <div className="slideshow-container__slide-caption dui-util-disp-none">
          Caption Three
        </div>
      </div>

      {/* <!-- Next and previous buttons --> */}
      <button
        className="slideshow-container__action-prev dui-util-txt-sn dui-util-fw-bld reset-button-inherit-parent"
        onClick={() =>
          setSlidePosition(newSlidePositionByOffset(slidePosition, -1))
        }
      >
        &#10094;
      </button>
      <button
        className="slideshow-container__action-next dui-util-txt-sn dui-util-fw-bld reset-button-inherit-parent"
        onClick={() =>
          setSlidePosition(newSlidePositionByOffset(slidePosition, +1))
        }
      >
        &#10095;
      </button>

      <br />
      {/* <!-- The dots/circles --> */}
      <div className="slideshow-container__navigator-container dui-util-txt-align-cent">
        <span
          className="slideshow-container__navigator"
          onClick={() => {
            setSlidePosition((slidePosition) => (slidePosition = 1));
          }}
        ></span>
        <span
          className="slideshow-container__navigator"
          onClick={() => {
            setSlidePosition((slidePosition) => (slidePosition = 2));
          }}
        ></span>
        <span
          className="slideshow-container__navigator"
          onClick={() => {
            setSlidePosition((slidePosition) => (slidePosition = 3));
          }}
        ></span>
      </div>
    </div>
  );
}

export default Carousal;
