import "./carousal.css";
import { useState } from "react";

import carousal_1 from "./carousal_1.jpg";
// import carousal_2 from "./src/assets/imgaes/carousal_2";
// import carousal_3 from "./src/assets/imgaes/carousal_3";

function Carousal() {
  const [slidePosition, setSlidePosition] = useState(1);

  function changeSlidePositionByOffset(offset) {
    let newSlidePosition = slidePosition + offset;
    if (newSlidePosition > 3) {
      newSlidePosition = 1;
    }
    if (newSlidePosition < 1) {
      newSlidePosition = 3;
    }
    console.log(newSlidePosition);
    setSlidePosition((slidePosition) => newSlidePosition);
  }

  return (
    <div className="slideshow-container">
      {/* <!-- Full-width images with number and caption text --> */}
      <div className="slideshow-container__slide fade dui-util-disp-noe">
        <div className="slideshow-container__slide-number">1 / 3</div>
        <img src={carousal_1} />
        <div className="slideshow-container__slide-caption dui-util-disp-none">
          Caption Text
        </div>
      </div>

      <div className="slideshow-container__slide fade dui-util-disp-none">
        <div className="slideshow-container__slide-number">2 / 3</div>
        <img src={carousal_1} />
        <div className="slideshow-container__slide-caption dui-util-disp-none">
          Caption Two
        </div>
      </div>

      <div className="slideshow-container__slide fade dui-util-disp-none">
        <div className="slideshow-container__slide-number">3 / 3</div>
        <img src={carousal_1} />
        <div className="slideshow-container__slide-caption dui-util-disp-none">
          Caption Three
        </div>
      </div>

      {/* <!-- Next and previous buttons --> */}
      <button
        className="slideshow-container__action-prev dui-util-txt-sn dui-util-fw-bld reset-button-inherit-parent"
        onClick={() => changeSlidePositionByOffset(-1)}
      >
        &#10094;
      </button>
      <button
        className="slideshow-container__action-next dui-util-txt-sn dui-util-fw-bld reset-button-inherit-parent"
        onClick={() => changeSlidePositionByOffset(+1)}
      >
        &#10095;
      </button>

      <br />
      {/* <!-- The dots/circles --> */}
      <div className="slideshow-container__navigator-container dui-util-txt-align-cent">
        <span className="slideshow-container__navigator"></span>
        <span className="slideshow-container__navigator"></span>
        <span className="slideshow-container__navigator"></span>
      </div>
    </div>
  );
}

export default Carousal;
