import styled from "styled-components";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
export let Wrapper = styled.div``;
Wrapper.WishTitle = styled.div``;
Wrapper.CardContainer = styled.div`
  display: flex;
  grid-gap: 70px;
  width: 950px;
  flex-wrap: wrap;
`;
Wrapper.ProductCard = styled.div`
  width: 260px;
  height: 350px;

  :hover {
    .hoverItem {
      display: flex;
    }
  }
`;

Wrapper.CardImg = styled.img`
  width: 250px;
  height: 250px;
`;
Wrapper.Sale = styled.div`
  font-family: "Poppins", sans-serif;
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
  font-size: 15px;
  line-height: 16px;
  color: rgb(61, 61, 61);
  white-space: nowrap;
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
  font-family: "Poppins", sans-serif;
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
`;
Wrapper.HoverItem1 = styled(ShoppingCartOutlined)`
  width: 35px;
  height: 35px;
  border-radius: 4px;
  padding-top: 10px;
  cursor: pointer;

  margin-top: 35px;
  :hover {
    color: #46a358;
  }
`;
Wrapper.HoverItem2 = styled(HeartOutlined)`
  width: 35px;
  height: 35px;
  border-radius: 4px;
  padding-top: 10px;
  cursor: pointer;
  background-color: red;
  color: white;
  margin-top: 35px;
`;
Wrapper.HoverItem3 = styled(SearchOutlined)`
  width: 35px;
  height: 35px;

  border-radius: 4px;
  padding-top: 10px;
  cursor: pointer;
  margin-top: 35px;

  :hover {
    color: #46a358;
  }
`;
