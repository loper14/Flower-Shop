import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import NotFound from "../components/404";
import Home from "../pages/Home";
import ProductView from "../components/Product view";
import ProductCard from "../components/Product Card";
import ProductCheckout from "../components/Product checkout";
import Profile from "../components/Profile";
import { Empty } from "antd";
import Search from "../components/Search";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product_view" element={<ProductView />}></Route>
        <Route
          path="/shop"
          element={
            <Empty
              style={{ marginTop: "200px" }}
              description="'Shop' is coming soon"
            />
          }
        ></Route>
        <Route
          path="/plant"
          element={
            <Empty
              style={{ marginTop: "200px" }}
              description="'Plant care' is coming soon"
            />
          }
        ></Route>
        <Route
          path="/blogs"
          element={
            <Empty
              style={{ marginTop: "200px" }}
              description="'Blogs' is coming soon"
            />
          }
        ></Route>
        <Route path="/shop/card" element={<ProductCard />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/shop/checkout" element={<ProductCheckout />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Root;
