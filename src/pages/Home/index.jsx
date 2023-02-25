import React from "react";
import Carousel from "../../components/Generic/Carusel";
import Sections from "../../components/Sections";
import Actions from "../../components/Sections/Actions";
import Products from "../../components/Sections/Products";
import { Wrapper } from "../../components/Sections/style";

const Home = () => {
  return (
    <Wrapper.Container>
      <Carousel />
      <Sections />
    </Wrapper.Container>
  );
};

export default Home;
