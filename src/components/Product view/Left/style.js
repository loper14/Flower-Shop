import styled from "styled-components";

export let Wrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 30px;
  margin-top: 60px;
  @media (max-width: 1150px) {
    grid-gap: 80px;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    flex-flow: column-reverse;
    grid-gap: 15px;
  }
`;

Wrapper.RelatedImgs = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  @media (max-width: 700px) {
    flex-direction: row;
  }
`;
Wrapper.RelatedImg = styled.img`
  width: 120px;
  height: 120px;
  padding: 10px;
  background-color: #fbfbfb;
  cursor: pointer;
  border: ${({ active }) => (active ? "1px solid green" : "")};
  transition: all 0.8s ease;
  :hover {
    transform: ${({ active }) => (!active ? "scale(1.3)" : "")};
  }
  @media (max-width: 1450px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 700px) {
    width: 60px;
    height: 60px;
  }
`;
Wrapper.ActiveImg = styled.img`
  width: 450px;
  height: 450px;
  border: 1px solid silver;
  padding: 5px;
  @media (max-width: 1450px) {
    width: 300px;
    height: 300px;
  }
`;
