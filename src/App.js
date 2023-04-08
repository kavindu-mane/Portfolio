import React, { Component } from "react";
import ThemeButton from "./components/Common/ThemeButtom";
import Header from "./components/HeaderAndFooter/Header";
import Sections from "./components/Sections/Sections";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ThemeButton />
        <Sections />
      </React.Fragment>
    );
  }
}

export default App;
