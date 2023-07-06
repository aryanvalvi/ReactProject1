import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";
import Recepie from "./Recepie";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cuisine/:type" element={<Cuisine></Cuisine>}></Route>
      <Route path="/searched/:search" element={<Searched></Searched>}></Route>
      <Route path="/recipe/:name" element={<Recepie></Recepie>}></Route>
    </Routes>
  );
};

export default Pages;
