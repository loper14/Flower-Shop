import Blog from "../../components/Home/Blog";
import Footer from "../../components/Home/Footer";
import Sections from "../../components/Home/Sections";
import Carousel from "../../components/Generic/Carusel";
import { Wrapper } from "../../components/Home/Sections/style";
import SuggestionPr from "../../components/Home/SuggestionPr";

const Home = () => {
  return (
    <Wrapper.Container>
      <Carousel />
      <Sections />
      <SuggestionPr />
      <Blog />
      <Footer />
    </Wrapper.Container>
  );
};

export default Home;
