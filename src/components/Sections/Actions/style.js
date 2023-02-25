import styled from "styled-components";
import { Slider } from "antd";

export let Wrapper = styled.div`
  background: #fbfbfb;
  width: 310px;
  height: 1212px;
`;
Wrapper.Categories = styled.div``;
Wrapper.CategoriesTitle = styled.div`
  font-family: "Cera Pro";
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
  grid-gap: 137px;
  margin-bottom: 25px;
  cursor: pointer;
`;
Wrapper.CategoryItemTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  width: 130px;
  padding-left: 25px;
`;
Wrapper.CategoryItemCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`;
Wrapper.Range = styled.div``;
Wrapper.RangeTitle = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Prices = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
`;
Wrapper.Price = styled.div`
  font-family: "Cera Pro";
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
  font-family: "Cera Pro";
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
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 54px;
  margin-bottom: 10px;
`;
Wrapper.SizeItem = styled.div`
  display: flex;
  grid-gap: 170px;
  padding-left: 15px;
  cursor: pointer;
`;
Wrapper.SizeTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  width: 56px;
`;
Wrapper.SizeCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 40px;
  text-align: right;
  width: 30px;
`;
Wrapper.SaleImg = styled.img`
  margin-top: 10px;
`;
