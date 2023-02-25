import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import NotFound from "../components/404";
import Home from "../pages/Home";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<h1>Welcome To shop</h1>}></Route>
        <Route path="/plant" element={<h1>Welcome To Plant care</h1>}></Route>
        <Route path="/blogs" element={<h1>Welcome To Blogs</h1>}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Root;
