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
`;

Wrapper.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 170px;
`;
Wrapper.HeaderText = styled.div`
  width: 600px;
  padding-left: 40px;
`;
Wrapper.HeaderTextSmall = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3d3d3d;
`;
Wrapper.HeaderTitle = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 900;
  font-size: 65px;
  line-height: 70px;
  text-transform: uppercase;
  color: #3d3d3d;
`;
Wrapper.SeparateWord = styled.div`
  color: #46a358;
  display: inline;
`;
Wrapper.HeaderDescription = styled.div`
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
`;
Wrapper.HeaderButton = styled.button`
  width: 140px;
  height: 40px;
  background: #46a358;
  border-radius: 6px;
  font-family: "Cera Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  margin-top: 44px;
`;
Wrapper.HeaderImg = styled.div``;
Wrapper.HeaderImg1 = styled.img`
  width: 500px;
  height: 400px;
`;
