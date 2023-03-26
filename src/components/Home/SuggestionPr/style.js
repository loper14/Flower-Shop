import styled from "styled-components";

export let Wrapper = styled.div`
  margin-top: 50px;
`;
Wrapper.ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1150px) {
    justify-content: space-around;
  }
  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
  }
`;
Wrapper.Item = styled.div`
  display: flex;
  width: 660px;
  height: 250px;
  background: #fbfbfb;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1150px) {
    width: 500px;
    height: 240px;
  }
  @media (max-width: 1020px) {
    width: 600px;
  }
  @media (max-width: 640px) {
    width: 350px;
  }
`;
Wrapper.ItemImg = styled.img`
  @media (max-width: 1150px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 640px) {
    width: 150px;
    height: 150px;
  }
`;
Wrapper.ItemText = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 20px;
  padding-top: 20px;
  @media (max-width: 640px) {
    width: 60%;
  }
`;
Wrapper.ItemTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #3d3d3d;
  padding-left: 25px;
  width: 150px;
  float: right;
  @media (max-width: 1150px) {
    font-size: 17px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;
Wrapper.ItemDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #727272;
  float: right;
  width: 290px;
  text-align: right;
  margin: 15px 0;
  @media (max-width: 1150px) {
    font-size: 12px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
  }
  @media (max-width: 640px) {
    width: 150px;
  }
`;
Wrapper.ItemBtn = styled.button`
  float: right;
  width: 150px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: none;
  @media (max-width: 1150px) {
    width: 120px;
    height: 30px;
    font-size: 14px;
  }
  @media (max-width: 640px) {
    width: 100px;
    font-size: 12px;
  }
`;
