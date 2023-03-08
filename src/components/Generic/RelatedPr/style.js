import styled from "styled-components";

export let CardContainer = styled.div`
  display: flex;
  grid-gap: 30px;
  justify-content: center;
`;
CardContainer.Card = styled.div``;
CardContainer.Img = styled.img``;
CardContainer.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
CardContainer.Price = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #46a358;
  padding-top: 5px;
`;
