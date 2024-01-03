import React, { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Team from "./components/Team";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import Events from "./components/Events";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
