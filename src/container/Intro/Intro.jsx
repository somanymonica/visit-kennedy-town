import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { coastal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="video">
      <video
        ref={vidRef}
        src={coastal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div
        className="video-overlay flex__center"
        onMouseOver={(e) => {
          let target = e.target;
          target.style.opacity = 1;
        }}
        onMouseOut={(e) => {
          if (playVideo) {
            let target = e.target;
            target.style.opacity = 0;
          }
        }}
      >
        <div
          className="video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
          onMouseOver={(e) => {
            let target = e.target;
            target.style.opacity = 1;
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
