import React, { useState, useEffect } from "react";
import "./MainPage.css";
import MainLayout from "../../components/MainLayout/MainLayout";
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
    <MainLayout>
      <div className="landing__main_container">
        <Lottie
          options={defaultOptions}
          height={mascotSize}
          width={mascotSize}
          style={{ margin: 0 }}
        />
      </div>
    </MainLayout>
  );
};

export default MainPage;
