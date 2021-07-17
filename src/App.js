import "./styles.css";
import { Video, CloudinaryContext } from "cloudinary-react";
import { useRef, useEffect, useState } from "react";

import Card from "./Card";

export default function App() {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;

    video.onplay = () => {
      setVideoEnded(false);
    };

    video.onended = () => {
      setVideoEnded(true);
    };
  }, []);
  return (
    <div className="App">
      <h1>Building YouTube-style post-video overlay CTA</h1>
      <h3>
        This is a demo of how to build a simple clone of the YouTube post video
        overlay
      </h3>
      {videoEnded && <Card />}
      <div className="video-area">
        <CloudinaryContext cloudName="chukwutosin">
          <Video
            publicId="samples/elephants"
            controls
            muted
            width="500px"
            innerRef={videoRef}
          />
        </CloudinaryContext>
      </div>
    </div>
  );
}
