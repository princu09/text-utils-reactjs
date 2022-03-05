import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeIcon, setmodeIcon] = useState(<i className="fas fa-moon" />);
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      setMode("dark");
      setmodeIcon(<i className="fas fa-sun" />);
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "black";
      setMode("light");
      setmodeIcon(<i className="fas fa-moon" />);
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          modeIcon={modeIcon}
        />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze below :" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;