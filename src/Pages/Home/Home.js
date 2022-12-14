import React from "react";
import Branding from "./Branding";
import Brands from "./Brands/Brands";
import OurWorks from "./OurWorks/OurWorks";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Branding></Branding>
      <Brands></Brands>
      <Services></Services>
      <OurWorks></OurWorks>
    </div>
  );
};

export default Home;
