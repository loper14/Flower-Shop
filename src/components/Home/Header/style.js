import styled from "styled-components";

export let Wrapper = styled.div`
  width: 100%;
  height: 520px;
  margin: 0 auto;
  margin-top: 15px;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5) -23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
  @media (max-width: 1450px) {
    width: 1100px;
  }
  @media (max-width: 1150px) {
    width: 700px;
  }
`;

Wrapper.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 300px;
  @media (max-width: 1150px) {
    grid-gap: 10px;
    width: 700px;
  }
  @media (max-width: 700px) {
    grid-gap: 10px;
    width: 350px;
  }
`;
Wrapper.HeaderText = styled.div`
  width: 600px;
  padding-left: 40px;
  @media (max-width: 1150px) {
    width: 400px;
  }
`;
Wrapper.HeaderTextSmall = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3d3d3d;
  @media (max-width: 1150px) {
    font-size: 12px;
  }
`;
Wrapper.HeaderTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 65px;
  line-height: 70px;
  text-transform: uppercase;
  color: #3d3d3d;
  @media (max-width: 1150px) {
    font-size: 35px;
    line-height: 50px;
  }
  @media (max-width: 1450px) {
    font-size: 45px;
    width: 300px;
    line-height: 55px;
  }
  @media (max-width: 700px) {
    font-size: 25px;
    width: 150px;
    line-height: 35px;
  }
`;
Wrapper.SeparateWord = styled.div`
  color: #46a358;
  display: inline;
`;
Wrapper.HeaderDescription = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  @media (max-width: 1150px) {
    font-size: 12px;
  }
  @media (max-width: 700px) {
    font-size: 10px;
    line-height: 20px;
  }
`;
Wrapper.HeaderButton = styled.button`
  width: 140px;
  height: 40px;
  background: #46a358;
  border-radius: 6px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  margin-top: 44px;
  @media (max-width: 1150px) {
    font-size: 14px;
    width: 110px;
    height: 35px;
    margin-top: 25px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
    width: 90px;
    height: 30px;
  }
`;
Wrapper.HeaderImg = styled.div`
  @media (max-width: 1150px) {
    width: 350px;
    height: 350px;
  }
`;
Wrapper.HeaderImg1 = styled.img`
  width: 500px;
  height: 400px;
  @media (max-width: 1150px) {
    width: 230px;
    height: 230px;
  }
  @media (max-width: 1450px) {
    width: 400px;
    height: 300px;
  }
  @media (max-width: 700px) {
    width: 200px;
    height: 200px;
  }
`;
