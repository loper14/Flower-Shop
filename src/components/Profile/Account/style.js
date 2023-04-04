import { Input } from "antd";
import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Right = styled.div``;
Wrapper.RightTitle = styled.div`
  margin-top: 95px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  margin-bottom: 20px;
`;
Wrapper.RightForm = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 50px;
  height: 400px;
  @media (max-width: 1150px) {
    grid-template-columns: auto;
    grid-gap: 0px;
    height: 800px;
  }
`;
Wrapper.RightFormItem = styled.div`
  height: 100px;
`;
Wrapper.RightLabel = styled.span``;
Wrapper.RightImg = styled.img`
  margin-left: 2px;
`;
Wrapper.AccountInput = styled(Input)`
  width: 417px;
  display: flex;
  margin-top: 10px;
  @media (max-width: 1450px) {
    width: 300px;
  }
`;
