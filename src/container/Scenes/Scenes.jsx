import "./Scenes.css";

import { data, images } from "../../constants";

const RecommandCard = ({ imgUrl, title, desc }) => (
  <div className="recommand-card">
    <img src={imgUrl} alt="recommand-card" />
    <div className="recommand-card-info">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const Scenes = () => (
  <div className="scenes section__padding" id="scenes">
    <div className="scenes-info">
      <h1>Recommand Places</h1>
      <div className="scenes-info-container">
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
    <div className="scenes-cover">
      <img src={images.s} alt="scenes-cover" />
    </div>
  </div>
);

export default Scenes;
