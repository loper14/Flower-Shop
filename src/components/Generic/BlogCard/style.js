import styled from "styled-components";

export let Wrapper = styled.div`
  width: 335px;
  background: #fbfbfb;
`;
Wrapper.CardImg = styled.img`
  width: 100%;
`;
Wrapper.PostTime = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #46a358;
  padding: 5px 0;
  padding-left: 10px;
`;
Wrapper.CardTitle = styled.div`
  font-family: "Poppins", sans-serif;
  padding: 4px 0;
  padding-left: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #3d3d3d;
  width: 250px;
`;
Wrapper.CardDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #727272;
  padding: 5px 0;
  padding-left: 10px;
`;
Wrapper.CardBtn = styled.div`
  width: 130px;
  height: 20px;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding-left: 10px;
  grid-gap: 4px;
  cursor: pointer;
  margin: 8px 0;
  transition: all 0.3s ease;
  :hover {
    color: #46a358;
  }
`;
