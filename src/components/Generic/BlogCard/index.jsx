import { Wrapper } from "./style";
import { ArrowRightOutlined } from "@ant-design/icons";

const BlogCard = ({ img, postTime, title, description }) => {
  return (
    <Wrapper>
      <Wrapper.CardImg src={img} />
      <Wrapper.PostTime>{postTime}</Wrapper.PostTime>
      <Wrapper.CardTitle>{title}</Wrapper.CardTitle>
      <Wrapper.CardDescription>{description}</Wrapper.CardDescription>
      <Wrapper.CardBtn>
        Read more <ArrowRightOutlined />
      </Wrapper.CardBtn>
    </Wrapper>
  );
};

export default BlogCard;
