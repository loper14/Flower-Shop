import styled from "styled-components";
import { Slider } from "antd";

export let Wrapper = styled.div`
  background: #fbfbfb;
  width: 400px;
  height: ${({ isA }) => (isA ? "1252px" : "900px")};
  @media (max-width: 1450px) {
    width: 270px;
  }
  @media (max-width: 1150px) {
    display: ${({ isA }) => (isA ? "none" : "block")};
  }
`;
Wrapper.Categories = styled.div``;
Wrapper.CategoriesTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 20px;
  padding-top: 10px;
  padding-left: 18px;
`;
Wrapper.Category = styled.div``;
Wrapper.CategoryItem = styled.div`
  display: flex;
  grid-gap: 110px;
  margin-bottom: 25px;
  padding: 8px;
  width: 340px;
  cursor: pointer;
  @media (max-width: 1450px) {
    grid-gap: 60px;
    width: 270px;
  }
  ${(props) =>
    !props.active
      ? `:hover {
      .category_name {
        margin-left: 25px;
      }
       border-top-right-radius: 5px;
         border-bottom-right-radius: 5px;
      transition: padding-left 0.3s ease 0s;
      -moz-box-pack: justify;
      padding-right: 10px;
      background: rgba(70, 163, 88, 0.95);
      color: rgb(255, 255, 255);
    }`
      : ""}
`;
Wrapper.CategoryItemTitle = styled.div`
  transition: all 0.3s ease;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  width: 130px;
  padding-left: 25px;
  @media (max-width: 1450px) {
    font-size: 14px;
  }
`;
Wrapper.CategoryItemCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  @media (max-width: 1450px) {
    font-size: 13px;
  }
`;
Wrapper.Range = styled.div``;
Wrapper.RangeTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  padding-left: 25px;
`;
Wrapper.Prices = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
`;
Wrapper.Price = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #46a358;
  display: inline;
  padding-left: 15px;
`;
Wrapper.PriceTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Slider = styled(Slider)`
  .ant-slider-track {
    border: 3px solid #46a358;
  }
  .ant-slider-handle {
    ::after {
      box-shadow: none;
      background-color: #46a358;
      border-radius: 50%;
    }
  }
`;

Wrapper.FilterBtn = styled.button`
  width: 90px;
  height: 35px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  background: #46a358;
  border-radius: 6px;
  border: none;
  margin-top: 16px;
  margin-left: 25px;
`;
Wrapper.Size = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 34px;
  margin-bottom: 10px;
  padding-left: 25px;
`;
Wrapper.SizeItem = styled.div`
  transition: all 0.3s ease 0s;
  display: flex;
  grid-gap: 185px;
  padding-left: 15px;
  height: 35px;
  margin-bottom: 7px;
  cursor: pointer;
  @media (max-width: 1450px) {
    grid-gap: 100px;
  }
  ${(props) =>
    !props.active
      ? `:hover {
      .category_name {
        margin-left: 20px;
      }
       border-top-right-radius: 5px;
         border-bottom-right-radius: 5px;
      transition: padding-left 0.3s ease 0s;
      -moz-box-pack: justify;
      padding-right: 10px;
      background: rgba(70, 163, 88, 0.95);
      color: rgb(255, 255, 255);
    }`
      : ""}
`;
Wrapper.SizeTitle = styled.div`
  transition: all 0.3s ease;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  font-size: 15px;
  width: 56px;
  @media (max-width: 1450px) {
    font-size: 14px;
  }
`;
Wrapper.SizeCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  text-align: right;
  width: 30px;
  @media (max-width: 1450px) {
    font-size: 13px;
  }
`;
Wrapper.SaleImg = styled.img`
  transform: scaleY(0.8);
  margin-top: -40px;
  @media (max-width: 1450px) {
    width: 270px;
  }
`;
