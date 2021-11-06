import React from "react";
import Offering from "../../Offering/Offering";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <Offering></Offering>
      <Choose></Choose>
    </div>
  );
};

export default Home;
