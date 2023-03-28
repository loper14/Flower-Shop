import styled from "styled-components";
import {
  ShoppingCartOutlined,
  HeartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export let Wrapper = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Wrapper.ProductSections = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1450px) {
    justify-content: start;
    align-items: center;
    grid-gap: 270px;
  }
  @media (max-width: 1150px) {
    grid-gap: 380px;
  }
  @media (max-width: 740px) {
    grid-gap: 170px;
    margin-bottom: 50px;
    justify-content: center;
  }
  @media (max-width: 570px) {
    grid-gap: 70px;
  }
`;
Wrapper.ProductSection = styled.div`
  display: flex;
  grid-gap: 37px;
  @media (max-width: 740px) {
    grid-gap: 15px;
    white-space: nowrap;
  }
`;
Wrapper.ProductSectionTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  cursor: pointer;
  margin-bottom: 5px;
  @media (max-width: 740px) {
    font-size: 13px;
  }
  @media (max-width: 700px) {
    font-size: 11px;
  }
`;
Wrapper.ProductSort2 = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
Wrapper.ProductSort = styled.div`
  display: flex;
  grid-gap: 8px;
  align-items: center;
  @media (max-width: 1150px) {
    display: none;
  }
`;
Wrapper.DropDown = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
  cursor: pointer;
  width: 150px;
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
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 150px;
  grid-row-gap: 50px;
  margin-top: 30px;
  @media (max-width: 1450px) {
    width: 1000px;
    grid-column-gap: 70px;
    grid-row-gap: 25px;
  }
  @media (max-width: 1150px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 120px;
    justify-content: center;
    height: auto;
  }
  @media (max-width: 740px) {
    grid-template-columns: auto;
    width: 400px;
  }
`;
Wrapper.ProductCard = styled.div`
  width: 220px;
  height: 350px;
  @media (max-width: 570px) {
    width: 200px;
    height: 330px;
  }
  :hover {
    .hoverItem {
      display: flex;
    }
  }
`;

Wrapper.CardImg = styled.img`
  width: 230px;
  height: 230px;
  @media (max-width: 570px) {
    width: 200px;
    height: 200px;
  }
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
  @media (max-width: 570px) {
    font-size: 13px;
  }
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
  @media (max-width: 570px) {
    font-size: 10px;
  }
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
  background-color: #fff;
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
Wrapper.SetImg = styled.img`
  display: none;
  cursor: pointer;
  @media (max-width: 1150px) {
    display: flex;
  }
`;
