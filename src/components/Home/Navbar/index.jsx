import { React, useState } from "react";
import { Wrapper } from "./style";
import logoImg from "../../../assets/icons/logo.svg";
import img1 from "../../../assets/icons/search.svg";
import img2 from "../../../assets/icons/shop.svg";
import img3 from "../../../assets/icons/Logout.svg";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../redux/modalSlices";
import { Drawer, Input } from "antd";
import { setSearchedData } from "../../../redux/slice";
import humburger from "../../../assets/icons/humburger.svg";
const Navbar = () => {
  let navigate = useNavigate();
  let { cardData } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  let signed = localStorage.getItem("signed");
  let [active, setActive] = useState("home");
  let [isSearch, setIsSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <Wrapper.HumburgerMenu flexD={true}>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#3d3d3d",
              paddingBottom: "3px",
            }}
            to="/"
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
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
            onClick={onClose}
          >
            <Wrapper.NavbarText
              onClick={() => setActive("blogs")}
              active={active === "blogs" ? true : false}
            >
              Blogs
            </Wrapper.NavbarText>
          </NavLink>
        </Wrapper.HumburgerMenu>
      </Drawer>
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
            {isSearch ? (
              <Input
                onKeyDown={(e) => e.key === "Enter" && navigate("search")}
                placeholder="search..."
                style={{ width: "150px" }}
                onChange={(e) =>
                  dispatch(setSearchedData(e.target.value.toLowerCase()))
                }
              />
            ) : (
              <Wrapper.ActionsImg1
                onClick={() => setIsSearch(true)}
                src={img1}
              />
            )}
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
            <Wrapper.Humburger onClick={showDrawer} src={humburger} />
          </Wrapper.Actions>
        </Wrapper.Nav>
      </Wrapper.Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
