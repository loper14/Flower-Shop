import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  @media (max-width: 1450px) {
    width: 1100px;
  }
  @media (max-width: 1150px) {
    width: 700px;
  }
`;
Wrapper.Wrap = styled.div`
  display: flex;
  grid-gap: 75px;
  @media (max-width: 1150px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
  }
`;
