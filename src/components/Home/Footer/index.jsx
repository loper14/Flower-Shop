import React from "react";
import { Wrapper } from "./style";
import location from "../../../assets/icons/location.svg";
import message from "../../../assets/icons/message.svg";
import call from "../../../assets/icons/call.svg";
import logo from "../../../assets/icons/logo.svg";
import facebook from "../../../assets/icons/facebook.svg";
import insta from "../../../assets/icons/insta.svg";
import twitter from "../../../assets/icons/twitter.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import union from "../../../assets/icons/union.svg";
import partners from "../../../assets/imgs/partners.png";

const Footer = () => {
  return (
    <Wrapper>
      <Wrapper.Head>
        <Wrapper.HeadLogo>
          <Wrapper.HeadLogoImg src={logo} />
          <Wrapper.HeadLogoText>GREENSHOP12</Wrapper.HeadLogoText>
        </Wrapper.HeadLogo>
        <Wrapper.HeadItem>
          <Wrapper.HeadItemImg src={location} />
          <Wrapper.HeadItemText>
            70 West Buckingham Ave. Farmingdale, NY 11735
          </Wrapper.HeadItemText>
        </Wrapper.HeadItem>
        <Wrapper.HeadItem>
          <Wrapper.HeadItemImg src={message} />
          <Wrapper.HeadItemText>contact@greenshop.com</Wrapper.HeadItemText>
        </Wrapper.HeadItem>
        <Wrapper.HeadItem>
          <Wrapper.HeadItemImg src={call} />
          <Wrapper.HeadItemText>+88 01911 717 490</Wrapper.HeadItemText>
        </Wrapper.HeadItem>
      </Wrapper.Head>
      <Wrapper.Body>
        <Wrapper.BodyItem>
          <Wrapper.BodyItemTitle>My Account</Wrapper.BodyItemTitle>
          <Wrapper.BodyItemText>My Account</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Our stores</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Contact us</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Career</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Specials</Wrapper.BodyItemText>
        </Wrapper.BodyItem>
        <Wrapper.BodyItem>
          <Wrapper.BodyItemTitle>Help & Guide</Wrapper.BodyItemTitle>
          <Wrapper.BodyItemText>Help Center</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>How to Buy</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Shipping & Delivery</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Product Policy</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>How to Return</Wrapper.BodyItemText>
        </Wrapper.BodyItem>
        <Wrapper.BodyItem>
          <Wrapper.BodyItemTitle>Categories</Wrapper.BodyItemTitle>
          <Wrapper.BodyItemText>House Plants</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Potter Plants</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Seeds</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Small Plants</Wrapper.BodyItemText>
          <Wrapper.BodyItemText>Accessories</Wrapper.BodyItemText>
        </Wrapper.BodyItem>
        <Wrapper.BodyItem>
          <Wrapper.BodyItemTitle>Social Media</Wrapper.BodyItemTitle>
          <Wrapper.BodyMedia>
            <Wrapper.BodyMediaImg src={facebook} />
            <Wrapper.BodyMediaImg src={insta} />
            <Wrapper.BodyMediaImg src={twitter} />
            <Wrapper.BodyMediaImg src={linkedin} />
            <Wrapper.BodyMediaImg src={union} />
          </Wrapper.BodyMedia>
          <Wrapper.WeAccept>We Accept</Wrapper.WeAccept>
          <Wrapper.BodyPartners src={partners} />
        </Wrapper.BodyItem>
      </Wrapper.Body>
      <Wrapper.End>© 2023 GreenShop. All Rights Reserved.</Wrapper.End>
    </Wrapper>
  );
};

export default Footer;
