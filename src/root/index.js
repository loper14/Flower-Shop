import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import NotFound from "../components/404";
import Home from "../pages/Home";
import ProductView from "../components/Product view";
import ProductCard from "../components/Product Card";
import ProductCheckout from "../components/Product checkout";
import Profile from "../components/Profile";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product_view" element={<ProductView />}></Route>
        <Route path="/shop" element={<h1>Welcome To shop</h1>}></Route>
        <Route path="/plant" element={<h1>Welcome To Plant care</h1>}></Route>
        <Route path="/blogs" element={<h1>Welcome To Blogs</h1>}></Route>
        <Route path="/shop/card" element={<ProductCard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/shop/checkout" element={<ProductCheckout />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Root;
