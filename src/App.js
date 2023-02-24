import { Header, Intro, Restaurants, Scenes } from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => (
  <div>
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Intro />
    <Restaurants />
    <Scenes />
  </div>
);

export default App;
