import React from "react";
import Actions from "./Actions";
import { Wrapper } from "./style";
import Products from "./Products";

const Sections = () => {
  return (
    <Wrapper>
      <Actions />
      <Products />
    </Wrapper>
  );
};

export default Sections;
