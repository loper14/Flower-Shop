import styled from "styled-components";

export let Wrapper = styled.div``;

Wrapper.TextContainer = styled.div`
  display: flex;
  grid-gap: 30px;
  margin-top: 110px;
  width: 100%;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-bottom: 2px;
`;
Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: ${({ active }) => (active ? 700 : 300)};
  font-size: 17px;
  line-height: 16px;
  color: ${({ active }) => (active ? "#46A358" : "black")};
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "3px solid #46a358" : "none")};
  padding-bottom: 12px;
`;
Wrapper.Text1 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  padding-top: 18px;
`;
Wrapper.Text2 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  padding-top: 30px;
`;
Wrapper.Bold = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #3d3d3d;
  padding-top: 18px;
`;
