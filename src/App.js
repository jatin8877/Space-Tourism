import React from "react";
import Header from "./Header";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/Destination" element={<Destination />} />
        <Route exact path="/Crew" element={<Crew />} />
        <Route exact path="/Technology" element={<Technology />} />
      </Routes>
    </>
  );
};

export default App;
