import React from "react";
import IntroSection from "../components/IntroSection/IntroSection";
import BasicPageStructure from "../components/BasicPageStructure/BasicPageStructure";

const Home = () => {
  return (
    <React.Fragment>
      <BasicPageStructure>
        <IntroSection />
      </BasicPageStructure>
    </React.Fragment>
  );
};

export default Home;
