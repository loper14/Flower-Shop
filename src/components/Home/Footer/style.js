import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Head = styled.div`
  display: flex;
  grid-gap: 75px;
  padding-left: 20px;
  background: rgba(70, 163, 88, 0.1);
  height: 88px;
`;
Wrapper.HeadLogo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
Wrapper.HeadLogoImg = styled.img``;
Wrapper.HeadLogoText = styled.div``;
Wrapper.HeadItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 12px;
`;
Wrapper.HeadItemImg = styled.img`
  width: 20px;
  height: 20px;
`;
Wrapper.HeadItemText = styled.div``;
Wrapper.Body = styled.div`
  background: #fbfbfb;
  height: 236px;
  display: flex;
  grid-gap: 175px;
  padding-left: 23px;
`;
Wrapper.BodyItem = styled.div``;
Wrapper.BodyItemTitle = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 8px;
  margin-top: 32px;
`;
Wrapper.BodyItemText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 30px;
  color: #727272;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
Wrapper.BodyMedia = styled.div`
  display: flex;
  grid-gap: 10px;
  padding-top: 15px;
`;
Wrapper.BodyMediaImg = styled.img`
  border: 1px solid rgba(70, 163, 88, 0.2);
  border-radius: 4px;
  padding: 7px;
  width: 30px;
  height: 30px;
`;
Wrapper.WeAccept = styled.div`
  padding-top: 37px;
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.BodyPartners = styled.img`
  margin-top: 13px;
`;
Wrapper.End = styled.div`
  font-family: "serif";
  font-style: italic;
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
  color: #3d3d3d;
  text-align: center;
`;
