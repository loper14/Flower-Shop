import React from "react";
import BlogCard from "../../Generic/BlogCard";
import { Wrapper } from "./style";
import postImg1 from "../../../assets/imgs/post-img1.png";
import postImg2 from "../../../assets/imgs/post-img2.png";
import postImg3 from "../../../assets/imgs/post-img3.png";
import postImg4 from "../../../assets/imgs/post-img4.png";
import blog1 from "../../../assets/imgs/blog1.jpg";
import blog2 from "../../../assets/imgs/blog2.jpg";
import blog3 from "../../../assets/imgs/blog3.jpg";
import { Button, Input } from "antd";

const Blog = () => {
  return (
    <Wrapper>
      <Wrapper.Title>Our Blog Posts</Wrapper.Title>
      <Wrapper.Text>
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </Wrapper.Text>
      <Wrapper.Container>
        <BlogCard
          img={postImg1}
          postTime="September 12  I Read in 6 minutes"
          title="Cactus & Succulent Care Tips"
          description="Cacti are succulents are easy care plants for any home or patio. "
        />
        <BlogCard
          img={postImg2}
          postTime="September 13  I Read in 2 minutes"
          title="Top 10 Succulents forYour Home"
          description="Best in hanging baskets. Prefers medium to high light."
        />
        <BlogCard
          img={postImg3}
          postTime="September 15  I Read in 3 minutes"
          title="Cacti & Succulent Care Tips"
          description="Cacti and succulents thrive in containers and because most are.."
        />
        <BlogCard
          img={postImg4}
          postTime="September 15  I Read in 2 minutes"
          title="Best Houseplants Room by Room"
          description="The benefits of houseplants are endless. In addition to.."
        />
      </Wrapper.Container>
      <Wrapper.Bottom>
        <Wrapper.BottomContainer>
          <Wrapper.BottomItem>
            <Wrapper.BottomItemImg src={blog3} />
            <Wrapper.BottomItemTitle>Garden Care</Wrapper.BottomItemTitle>
            <Wrapper.BottomItemDesc>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </Wrapper.BottomItemDesc>
          </Wrapper.BottomItem>
          <Wrapper.BottomItem>
            <Wrapper.BottomItemImg src={blog2} />
            <Wrapper.BottomItemTitle>Plant Renovation</Wrapper.BottomItemTitle>
            <Wrapper.BottomItemDesc>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </Wrapper.BottomItemDesc>
          </Wrapper.BottomItem>
          <Wrapper.BottomItem isEnd={true}>
            <Wrapper.BottomItemImg src={blog1} />
            <Wrapper.BottomItemTitle>Watering Graden</Wrapper.BottomItemTitle>
            <Wrapper.BottomItemDesc>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </Wrapper.BottomItemDesc>
          </Wrapper.BottomItem>
          <Wrapper.BottomForm>
            <Wrapper.FormTitle>
              Would you like to join newsletters?
            </Wrapper.FormTitle>
            <Input.Group compact>
              <Input
                style={{
                  width: "270px",
                  color: "#ACACAC",
                }}
                defaultValue="enter your email address..."
              />
              <Button
                style={{
                  background: "#46A358",
                  fontWeight: "700",
                  border: "none",
                }}
                type="primary"
              >
                Join
              </Button>
            </Input.Group>
            <Wrapper.FormDesc>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </Wrapper.FormDesc>
          </Wrapper.BottomForm>
        </Wrapper.BottomContainer>
      </Wrapper.Bottom>
    </Wrapper>
  );
};

export default Blog;
