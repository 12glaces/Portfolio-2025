import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
//Message to developers: I was heavily inspired by https://olaolu.dev/ so big thanks to him for the inspiration.
const App = () => {
  return (
    <Router>
      <div className="Font-Sans " >
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
