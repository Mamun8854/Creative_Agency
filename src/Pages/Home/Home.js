import React from "react";
import Branding from "./Branding";
import Brands from "./Brands/Brands";
import Faq from "./Faq/Faq";
import OurWorks from "./OurWorks/OurWorks";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Branding></Branding>
      <Brands></Brands>
      <Services></Services>
      <OurWorks></OurWorks>
      <Faq></Faq>
    </div>
  );
};

export default Home;
