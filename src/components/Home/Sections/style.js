import styled from "styled-components";

export let Wrapper = styled.div`
  display: flex;
  grid-gap: 50px;
  height: 1300px;
  @media (max-width: 1450px) {
    grid-gap: 20px;
  }
  @media (max-width: 1150px) {
    height: fit-content;
  }
`;
Wrapper.Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  @media (max-width: 1450px) {
    width: 1100px;
  }
  @media (max-width: 1150px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 360px;
  }
`;
