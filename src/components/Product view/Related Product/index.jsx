import RelatedPrCard from "../../Generic/RelatedPr";
import { Wrapper } from "./style";
import blog1 from "../../../assets/imgs/blog1.jpg";
import blog2 from "../../../assets/imgs/blog2.jpg";
import blog3 from "../../../assets/imgs/blog3.jpg";
import { Button, Input } from "antd";

const Related = () => {
  return (
    <Wrapper>
      <Wrapper.Head>
        <Wrapper.Title>You may be interested in</Wrapper.Title>
      </Wrapper.Head>
      <div style={{ marginBottom: "50px" }}>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol
            className="carousel-indicators"
            style={{
              display: "flex",
              gridGap: "4px",
              justifyContent: "center",
              position: "relative",
              top: "350px",
            }}
          >
            <li
              style={{ backgroundColor: "green", border: "none" }}
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li
              style={{ backgroundColor: "green", border: "none" }}
              data-target="#myCarousel"
              data-slide-to="1"
            ></li>
            <li
              style={{ backgroundColor: "green", border: "none" }}
              data-target="#myCarousel"
              data-slide-to="2"
            ></li>
          </ol>

          <div className="carousel-inner">
            <div className="item active">
              <RelatedPrCard />
            </div>

            <div className="item">
              <RelatedPrCard />
            </div>

            <div className="item">
              <RelatedPrCard />
            </div>
          </div>
        </div>
      </div>
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

export default Related;
