import { useSelector } from "react-redux";
import Footer from "../Home/Footer";
import Description from "./Description";
import Left from "./Left";
import Related from "./Related Product";
import Right from "./Right";
import { Wrapper } from "./style";

const ProductView = () => {
  let { productData } = useSelector((state) => state.data);
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Wrap>
          <Left img={productData.img} />
          <Right data={productData} />
        </Wrapper.Wrap>
        <Description />
        <Related />
        <Footer />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default ProductView;
