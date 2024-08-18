import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import connectDB from "@/cofig/database";

const HomePage = () => {
  connectDB();

  return (
    <>
      <InfoBoxes />
      <HomeProperties />
      <Hero />
    </>
  );
};

export default HomePage;
