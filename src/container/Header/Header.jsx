import images from "../../constants/images";
import "./Header.css";

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-img">
      <img src={images.kd} alt="header" />
    </div>
    <div className="header-info">
      <h1>Welcome to Kennedy Town</h1>
      <p>
        Kennedy Town is at the western end of Sai Wan on Hong Kong Island in
        Hong Kong.
        <br />I love Kennedy Town and hope you do too.
      </p>
      <button>Explore More</button>
    </div>
  </div>
);

export default Header;
