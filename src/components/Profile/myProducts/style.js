import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Title = styled.div`
  margin-top: 65px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 20px;
`;
Wrapper.Top = styled.div`
  display: flex;
  grid-gap: 250px;
  margin-top: 25px;
  @media (max-width: 1150px) {
    grid-gap: 85px;
  }
`;
Wrapper.TopText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 20px;
`;
Wrapper.Bottom = styled.div`
  display: flex;
  background: #fbfbfb;
  align-items: center;
`;
Wrapper.BottomImg = styled.img`
  width: 80px;
  height: 80px;
  @media (max-width: 1150px) {
    width: 60px;
    height: 60px;
  }
`;
Wrapper.BottomName = styled.div`
  padding-left: 15px;
  width: 150px;
  @media (max-width: 1150px) {
    width: 90px;
    padding-left: 5px;
    font-size: 12px;
  }
`;
Wrapper.BottomDate = styled.div`
  padding-left: 90px;
  @media (max-width: 1150px) {
    padding-left: 5px;
    font-size: 10px;
  }
`;
Wrapper.DeleteImg = styled.img`
  margin-left: 230px;
  @media (max-width: 1150px) {
    margin-left: 85px;
  }
`;
