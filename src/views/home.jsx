import React from "react";
import DriveWithFts from "../components/home/driveWithFts";
import HomeCardSection from "../components/home/homeCardSection";
import HomeHero from "../components/home/homeHero";
import ImageBreak from "../components/home/imageBreak";
import RequestARideForm from "../components/home/requestARideForm";

import "../css/home.css";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeCardSection />
      <ImageBreak />
      <RequestARideForm />
      <DriveWithFts />
    </div>
  );
};

export default Home;
