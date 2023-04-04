import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  grid-gap: 90px;
  @media (max-width: 1450px) {
    width: 1100px;
    grid-gap: 40px;
  }
  @media (max-width: 1150px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 360px;
    flex-direction: column;
    grid-gap: 0;
  }
  @media (max-width: 400px) {
    width: 340px;
  }
`;
Wrapper.Left = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;
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
Wrapper.Sider = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;
Wrapper.SiderText = styled.div``;
Wrapper.SiderMenu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  @media (max-width: 400px) {
    grid-gap: 0px;
  }
`;
Wrapper.SiderItem = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  color: #3d3d3d;
  display: flex;
  grid-gap: 2px;
  margin-top: 30px;
  cursor: pointer;
  border: 1px solid green;
  padding: 6px 6px;
  border-radius: 10px;
  width: fit-content;
  @media (max-width: 1150px) {
    padding: 6px 5px;
  }
  @media (max-width: 400px) {
    font-size: 11px;
  }
`;
Wrapper.SiderLogout = styled.div`
  margin-top: 30px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
  color: #727272;
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
  align-items: center;
  color: brown;
`;
