import { Component } from "react";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import WelcomeBlock from "./components/WelcomeBlock";

class App extends Component {
  render() { 
    return (
      <div>
        <Navbar/>
        <WelcomeBlock/>
        <Sections/>
      </div>
    );
  }
}
 
export default App;