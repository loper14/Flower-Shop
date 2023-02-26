import styled from "styled-components";

export let Wrapper = styled.div`
  margin-top: 50px;
`;
Wrapper.ItemContainer = styled.div`
  display: flex;
`;
Wrapper.Item = styled.div`
  display: flex;
  width: 586px;
  height: 250px;
  background: #fbfbfb;
  justify-content: space-between;
`;
Wrapper.ItemImg = styled.img``;
Wrapper.ItemText = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 20px;
  padding-top: 20px;
`;
Wrapper.ItemTitle = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #3d3d3d;
  padding-left: 25px;
  width: 150px;
  float: right;
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
`;
Wrapper.ItemBtn = styled.button`
  float: right;
  width: 150px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: none;
`;
