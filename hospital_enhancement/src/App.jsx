import React from "react";
import {Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./views/home";
import About from "./views/about";
import Profile from "./views/profile";
import Doctors from "./views/doctors";
import Login from "./authentication/login";
import Signup from "./authentication/signup";

// const Home = lazy(() => import("./views/home"));

export default function App() {
  console.log("its in app")
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
    </Suspense>
  );
}
