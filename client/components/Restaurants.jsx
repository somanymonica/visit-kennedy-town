import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Image from "next/image";

import { images } from "../constants";
import styles from "./Restaurants.module.scss";

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
    <div className={styles.restaurants} id="restaurants">
      <div className={styles.restaurants_info}>
        <h1>Restaurant Recommendation</h1>
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
            Show All Restaurants
          </a>
        </button>
      </div>
      <div className={styles.restaurants_images}>
        <div className={styles.restaurants_images_container} ref={scrollRef}>
          {[images.r1, images.r2, images.r3, images.r4].map((image, index) => (
            <div
              className={styles.restaurants_images_card}
              key={`restaurant_image-${index + 1}`}
            >
              <Image src={image} alt="restaurant_image" />
              <div className={styles.card_info}>
                <h3>Name</h3>
                <p>delicious</p>
                <small>(Back card feature is coming.)</small>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.restaurants_images_arrows}>
          <BsArrowLeftShort
            className={styles.restaurants_arrow_icon}
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className={styles.restaurants_arrow_icon}
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
