import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Properties from "./properties/page";

const HomePage = () => {
  return (
    <>
      <InfoBoxes />
      <Properties />
      <Hero />
    </>
  );
};

export default HomePage;
