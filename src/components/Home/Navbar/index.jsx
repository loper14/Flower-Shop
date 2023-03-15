import { React, useState } from "react";
import { Wrapper } from "./style";
import logoImg from "../../../assets/icons/logo.svg";
import img1 from "../../../assets/icons/search.svg";
import img2 from "../../../assets/icons/shop.svg";
import img3 from "../../../assets/icons/Logout.svg";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../redux/modalSlices";
const Navbar = () => {
  let navigate = useNavigate();
  let { cardData } = useSelector((state) => state.data);
  let { signed } = useSelector((state) => state.modalka);
  let dispatch = useDispatch();
  let [active, setActive] = useState("home");
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Nav>
          <Wrapper.Logo onClick={() => navigate("/")}>
            <Wrapper.LogoImg src={logoImg} />
            <Wrapper.LogoText>GREENSHOP</Wrapper.LogoText>
          </Wrapper.Logo>
          <Wrapper.Navbar>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#3d3d3d",
                paddingBottom: "3px",
              }}
              to="/"
            >
              <Wrapper.NavbarText
                onClick={() => setActive("home")}
                active={active === "home" ? true : false}
              >
                Home
              </Wrapper.NavbarText>
            </NavLink>

            <NavLink
              style={{
                textDecoration: "none",
                color: "#3d3d3d",
                paddingBottom: "3px",
              }}
              to="/shop"
            >
              <Wrapper.NavbarText
                onClick={() => setActive("shop")}
                active={active === "shop" ? true : false}
              >
                Shop
              </Wrapper.NavbarText>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#3d3d3d",
                paddingBottom: "3px",
              }}
              to="/plant"
            >
              <Wrapper.NavbarText
                onClick={() => setActive("plant")}
                active={active === "plant" ? true : false}
              >
                Plant Care
              </Wrapper.NavbarText>
            </NavLink>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#3d3d3d",
                paddingBottom: "3px",
              }}
              to="/blogs"
            >
              <Wrapper.NavbarText
                onClick={() => setActive("blogs")}
                active={active === "blogs" ? true : false}
              >
                Blogs
              </Wrapper.NavbarText>
            </NavLink>
          </Wrapper.Navbar>
          <Wrapper.Actions>
            <Wrapper.ActionsImg1 src={img1} />
            {cardData.length > 0 ? (
              <Wrapper.Count>{cardData.length}</Wrapper.Count>
            ) : (
              ""
            )}
            <Wrapper.ActionsImg2
              onClick={() => navigate("/shop/card")}
              src={img2}
            />
            <Wrapper.ActionsButton
              onClick={() => {
                if (!signed) {
                  dispatch(showModal());
                } else {
                  navigate("/profile");
                }
              }}
              type="primary"
            >
              <Wrapper.ActionsImg3 src={img3} />{" "}
              {signed ? localStorage.getItem("username") : "Login"}
            </Wrapper.ActionsButton>
          </Wrapper.Actions>
        </Wrapper.Nav>
      </Wrapper.Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
