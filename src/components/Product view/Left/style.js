import styled from "styled-components";

export let Wrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 30px;
  margin-top: 60px;
`;

Wrapper.RelatedImgs = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
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
`;
Wrapper.ActiveImg = styled.img`
  width: 450px;
  height: 450px;
  border: 1px solid silver;
  padding: 5px;
`;
