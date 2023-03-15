import { Wrapper } from "./style";
import flower5 from "../../../assets/imgs/flower5.png";
import flower3 from "../../../assets/imgs/flower3.png";
import { ArrowRightOutlined } from "@ant-design/icons";

const SuggestionPr = () => {
  return (
    <Wrapper>
      <Wrapper.ItemContainer>
        <Wrapper.Item>
          <Wrapper.ItemImg src={flower5} />
          <Wrapper.ItemText>
            <Wrapper.ItemTitle>Summer cactus & succulents</Wrapper.ItemTitle>
            <Wrapper.ItemDescription>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </Wrapper.ItemDescription>
            <Wrapper.ItemBtn>
              Find more <ArrowRightOutlined />
            </Wrapper.ItemBtn>
          </Wrapper.ItemText>
        </Wrapper.Item>
        <Wrapper.Item>
          <Wrapper.ItemImg src={flower3} />
          <Wrapper.ItemText>
            <Wrapper.ItemTitle>Styling trends & much more</Wrapper.ItemTitle>
            <Wrapper.ItemDescription>
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </Wrapper.ItemDescription>
            <Wrapper.ItemBtn>
              Find more <ArrowRightOutlined />
            </Wrapper.ItemBtn>
          </Wrapper.ItemText>
        </Wrapper.Item>
      </Wrapper.ItemContainer>
    </Wrapper>
  );
};

export default SuggestionPr;
