import { React, useState } from "react";
import { Wrapper } from "./style";
import "./style.css";
import logoImg from "../../assets/icons/logo.svg";
import img1 from "../../assets/icons/search.svg";
import img2 from "../../assets/icons/shop.svg";
import img3 from "../../assets/icons/Logout.svg";
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Nav>
          <Wrapper.Logo>
            <Wrapper.LogoImg src={logoImg} />
            <Wrapper.LogoText>GREENSHOP</Wrapper.LogoText>
          </Wrapper.Logo>
          <Wrapper.Navbar>
            <Wrapper.NavbarText>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#3d3d3d",
                  paddingBottom: "3px",
                }}
                to="/"
              >
                Home
              </NavLink>
            </Wrapper.NavbarText>
            <Wrapper.NavbarText>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#3d3d3d",
                  paddingBottom: "3px",
                }}
                to="/shop"
              >
                Shop
              </NavLink>
            </Wrapper.NavbarText>
            <Wrapper.NavbarText>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#3d3d3d",
                  paddingBottom: "3px",
                }}
                to="/plant"
              >
                Plant Care
              </NavLink>
            </Wrapper.NavbarText>
            <Wrapper.NavbarText>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#3d3d3d",
                  paddingBottom: "3px",
                }}
                to="/blogs"
              >
                Blogs
              </NavLink>
            </Wrapper.NavbarText>
          </Wrapper.Navbar>
          <Wrapper.Actions>
            <Wrapper.ActionsImg1 src={img1} />
            <Wrapper.ActionsImg1 src={img2} />
            <Wrapper.ActionsButton type="primary">
              <Wrapper.ActionsImg3 src={img3} /> Login
            </Wrapper.ActionsButton>
          </Wrapper.Actions>
        </Wrapper.Nav>
      </Wrapper.Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
