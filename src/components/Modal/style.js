import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Titles = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
`;
Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  color: ${({ active }) => (active ? "#46A358" : "#3d3d3d")};
  cursor: pointer;
`;
