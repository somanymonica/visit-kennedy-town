import { Header, Restaurants, Scenes, Footer } from "../container";
import { Navbar } from "../components";

const Home = () => (
  <div className="gradient__bg">
    <Navbar />
    <Header />
    <Restaurants />
    <Scenes />
    <Footer />
  </div>
);

export default Home;
