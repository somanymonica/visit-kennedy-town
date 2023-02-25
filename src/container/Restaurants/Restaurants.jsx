import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { images } from "../../constants";
import "./Restaurants.css";

const Restaurants = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="restaurants flex__center" id="restaurants">
      <div className="restaurants-info">
        <h1>somewhere I think you should go</h1>
        <p>
          There are many delicious restaurants here, mostly western restaurants.
          <br />
          These are all good things for me.
        </p>
        <button>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More
          </a>
        </button>
      </div>
      <div className="restaurants-images">
        <div className="restaurants-images_container" ref={scrollRef}>
          {[images.r1, images.r2, images.r3, images.r4].map((image, index) => (
            <div
              className="restaurants-images_card flex__center"
              key={`restaurant_image-${index + 1}`}
            >
              <img src={image} alt="restaurant_image" />
              <BsInstagram className="restaurants-image_icon" />
            </div>
          ))}
        </div>
        <div className="restaurants-images_arrows">
          <BsArrowLeftShort
            className="restaurants-arrow_icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="restaurants-arrow_icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
