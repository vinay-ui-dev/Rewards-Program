import React from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Footer from "./components/Footer";
import "./styles/style.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <LeftPanel />
        <RightPanel />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
