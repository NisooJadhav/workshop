import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";

import { BallTriangle } from "react-loader-spinner";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Workshops from "./components/Workshops";
import Register from "./components/Register";
import Contact from "./components/Contact";
import About from "./components/About";
import CreateWorkshop from "./components/CreateWorkshop";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer.js";
import RandomImage from "./components/RandomImage";
import Search from "./components/Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <RandomImage />
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="contact_us" element={<Contact />}></Route>
          <Route path="/workshops" element={<Workshops />}></Route>
          <Route path="/workshop" element={<Workshops />}></Route>
          <Route path="/create" element={<CreateWorkshop />}></Route>
          <Route path="/create/posts" element={<Workshops />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}