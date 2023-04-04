import { Button, Input } from "antd";
import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Form = styled.div``;
Wrapper.FormTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 8px;
`;
Wrapper.FormTitle2 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 15px;
  color: #727272;
  padding-bottom: 20px;
`;
Wrapper.FormDiv = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-gap: 0;
  grid-row-gap: 36px;
  grid-column-gap: 20px;
  @media (max-width: 1150px) {
    grid-template-columns: 400px;
    height: fit-content;
  }
`;
Wrapper.Div = styled.div``;
Wrapper.FormLabel = styled.div`
  margin-bottom: 10px;
`;
Wrapper.Label2 = styled.div`
  margin-top: 20px;
`;
Wrapper.StarImg = styled.img``;
Wrapper.Input = styled(Input)`
  width: 350px;
  @media (max-width: 450px) {
    width: 300px;
  }
`;
Wrapper.Btn = styled(Button)`
  background-color: #46a358;
  color: white;
  margin-top: 25px;
  @media (max-width: 1150px) {
    margin-bottom: 40px;
  }
`;
