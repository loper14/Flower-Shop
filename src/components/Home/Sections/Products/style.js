import styled from "styled-components";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export let Wrapper = styled.div``;
Wrapper.ProductSections = styled.div`
  display: flex;
  grid-gap: 295px;
`;
Wrapper.ProductSection = styled.div`
  display: flex;
  grid-gap: 37px;
`;
Wrapper.ProductSectionTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  cursor: pointer;
  margin-bottom: 5px;
`;
Wrapper.ProductSort = styled.div`
  display: flex;
  grid-gap: 8px;
`;
Wrapper.DropDown = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  cursor: pointer;
  width: 120px;
`;
Wrapper.DropDownItem = styled.div``;
Wrapper.ProductSortTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.CardContainer = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 50px;
  margin-top: 30px;
`;
Wrapper.ProductCard = styled.div`
  width: 220px;
  height: 350px;

  :hover {
    .hoverItem {
      display: flex;
    }
  }
`;

Wrapper.CardImg = styled.img`
  width: 230px;
  height: 230px;
`;
Wrapper.Sale = styled.div`
  font-family: "Cera Pro";
  background: rgb(70, 163, 89);
  width: 50px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-right: 5px;
  float: right;
  text-align: right;
  color: rgb(255, 255, 255);
`;
Wrapper.ProductName = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: rgb(61, 61, 61);
`;
Wrapper.Space = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
`;
Wrapper.ProductDate = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: rgb(61, 61, 61);
`;
Wrapper.ProductPrice = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #46a358;
  padding-top: 6px;
`;
Wrapper.CardHoverItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  position: absolute;
  margin-top: -50px;
  margin-left: 50px;
  display: none;
`;
Wrapper.HoverItem1 = styled(ShoppingCartOutlined)`
  width: 35px;
  height: 35px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 1px 1px 5px black;
  padding-top: 10px;
  cursor: pointer;

  :hover {
    color: #46a358;
  }
`;
Wrapper.HoverItem2 = styled(HeartOutlined)`
  width: 35px;
  height: 35px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 1px 1px 5px black;
  padding-top: 10px;
  cursor: pointer;

  :hover {
    color: #46a358;
  }
`;
Wrapper.HoverItem3 = styled(SearchOutlined)`
  width: 35px;
  height: 35px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 1px 1px 5px black;
  padding-top: 10px;
  cursor: pointer;

  :hover {
    color: #46a358;
  }
`;
