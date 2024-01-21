import React from "react";

import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homescreen from "./components/screens/Homescreen";
import Loginscreen from "./components/screens/Loginscreen";
import Signupscree from "./components/screens/Signupscree";
import Cartscreen from "./components/screens/Cartscreen";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Homescreen />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Loginscreen/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/signup" element={<Signupscree/>}></Route>
        </Routes>
        <Routes>
          <Route exact path="/cart" element={<Cartscreen/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
