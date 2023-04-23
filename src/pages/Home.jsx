import React, { lazy } from "react";
const IntroSection = lazy(() =>
  import("../components/IntroSection/IntroSection")
);
const BasicPageStructure = lazy(() =>
  import("../components/BasicPageStructure/BasicPageStructure")
);

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
