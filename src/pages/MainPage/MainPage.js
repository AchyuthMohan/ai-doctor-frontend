import React, { useState, useEffect } from "react";
import "./MainPage.css";
import mascot from "../../assets/lottie/mascot.json";
import Lottie from "react-lottie";
import { useScreenWidth } from "../../hooks/useScreenWidth";
const MainPage = () => {
  const [mascotSize, setMascotSize] = useState();
  const size = useScreenWidth();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mascot,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    if (size > 600) {
      setMascotSize(450);
    } else if (size > 500) {
      setMascotSize(450);
    } else if (size > 400) {
      setMascotSize(400);
    } else {
      setMascotSize(300);
    }
  }, [size]);
  return (
      <div className="landing__main_container">
        <Lottie
          options={defaultOptions}
          height={mascotSize}
          width={mascotSize}
          style={{ margin: 0,zIndex:3 }}
        />
        <div className="landing__desc_part">
          <h1>AI Doctor</h1>
          <p>Welcome to our AI-powered symptom identification website! Our cutting-edge technology uses the latest advancements in artificial intelligence to help you identify potential diseases based on your reported symptoms.</p>
        </div>
      </div>
  );
};

export default MainPage;
