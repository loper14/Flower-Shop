import React from "react";
import { Wrapper } from "./style";
import flower from "../../../assets/imgs/flower.jpg";

const Header = () => {
  return (
    <Wrapper>
      <Wrapper.Header>
        <Wrapper.HeaderText>
          <Wrapper.HeaderTextSmall>
            Welcome to GreenShop
          </Wrapper.HeaderTextSmall>
          <Wrapper.HeaderTitle>
            Let’s Make a Better{" "}
            <Wrapper.SeparateWord>Planet</Wrapper.SeparateWord>
          </Wrapper.HeaderTitle>
          <Wrapper.HeaderDescription>
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </Wrapper.HeaderDescription>
          <Wrapper.HeaderButton>SHOP NOW</Wrapper.HeaderButton>
        </Wrapper.HeaderText>
        <Wrapper.HeaderImg>
          <Wrapper.HeaderImg1 src={flower} />
        </Wrapper.HeaderImg>
      </Wrapper.Header>
    </Wrapper>
  );
};

export default Header;
