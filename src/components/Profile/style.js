import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  grid-gap: 90px;
`;
Wrapper.Left = styled.div``;
Wrapper.LeftTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-top: 78px;
  padding-top: 18px;
`;
Wrapper.LeftSections = styled.div`
  width: 310px;
  height: 360px;
  background: #fbfbfb;
  padding-left: 18px;
`;
Wrapper.LeftSection = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 15px;
  color: #3d3d3d;
  display: flex;
  grid-gap: 14px;
  margin-top: 30px;
  cursor: pointer;
`;
Wrapper.LeftImg = styled.img`
  width: 20px;
  height: 20px;
`;
Wrapper.Logout = styled.div`
  margin-top: 54px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 15px;
  color: #727272;
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
  align-items: center;
`;
