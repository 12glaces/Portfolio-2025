import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
const About = () => <div className="p-4 text-center text-xl">About Us</div>;
const Services = () => <div className="p-4 text-center text-xl">Our Services</div>;
const Contact = () => <div className="p-4 text-center text-xl">Contact Us</div>;

const App = () => {
  return (
    <Router>
      <div className="Font-Sans " >
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
