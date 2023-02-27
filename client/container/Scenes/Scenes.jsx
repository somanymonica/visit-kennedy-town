import styles from "./Scenes.module.css";
import Image from "next/image";

import { data, images } from "../../constants";

const RecommandCard = ({ imgUrl, title, desc }) => (
  <div className={styles.recommand_card}>
    <Image src={imgUrl} alt="recommand-card" />
    <div className={styles.recommand_card_info}>
      <h3 className="info_h3">{title}</h3>
      <p className="info_p">{desc}</p>
    </div>
  </div>
);

const Scenes = () => (
  <div className="section__container" id="scenes">
    <div className={styles.scenes_info}>
      <h1 className="header_h1">Recommand Places</h1>
      <div className={styles.scenes_info_container}>
        {data.places.map((place, index) => (
          <RecommandCard
            key={place.title + index}
            imgUrl={place.imgUrl}
            title={place.title}
            desc={place.desc}
          ></RecommandCard>
        ))}
      </div>
    </div>
    <div className={styles.scenes_cover}>
      <Image src={images.s} alt="scenes-cover" />
    </div>
  </div>
);

export default Scenes;
