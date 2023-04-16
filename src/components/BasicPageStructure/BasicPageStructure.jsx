import React from "react";
import ThemeButton from "../Common/ThemeButtom";
import Header from "../HeaderAndFooter/Header";
import NavigationIsland from "../Common/NavigationIslad";
import Footer from "../HeaderAndFooter/Footer";
import Gradient from "../Common/Gradient";

const BasicPageStructure = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <ThemeButton />
      <Gradient />
      {children}
      <NavigationIsland />
      <Footer />
    </React.Fragment>
  );
};

export default BasicPageStructure;
