import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Head = styled.div`
  display: flex;
  grid-gap: 95px;
  padding-left: 20px;
  background: rgba(70, 163, 88, 0.1);
  height: 88px;
  @media (max-width: 1450px) {
    grid-gap: 65px;
  }
  @media (max-width: 1150px) {
    grid-gap: 5px;
    font-size: 11px;
  }
  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;
  }
`;
Wrapper.HeadLogo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
Wrapper.HeadLogoImg = styled.img`
  @media (max-width: 700px) {
    width: 25px;
    height: 25px;
  }
`;
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
Wrapper.HeadItemText = styled.div`
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;
Wrapper.Body = styled.div`
  background: #fbfbfb;
  height: 236px;
  display: flex;
  padding-left: 23px;
  justify-content: center;
  grid-gap: 250px;
  @media (max-width: 1450px) {
    grid-gap: 150px;
  }
  @media (max-width: 1150px) {
    grid-gap: 40px;
  }
  @media (max-width: 700px) {
    height: 476px;
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto;
  }
`;

Wrapper.BodyItem = styled.div`
  @media (max-width: 700px) {
    height: 30px;
  }
`;
Wrapper.BodyItemTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 8px;
  margin-top: 32px;
  @media (max-width: 1150px) {
    font-size: 14px;
  }
`;
Wrapper.BodyItemText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  color: #727272;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  @media (max-width: 1150px) {
    font-size: 12px;
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
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.BodyPartners = styled.img`
  margin-top: 13px;
  @media (max-width: 700px) {
    width: 200px;
  }
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
