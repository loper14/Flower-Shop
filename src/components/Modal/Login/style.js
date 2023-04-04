import { Input } from "antd";
import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #3d3d3d;
  text-align: center;
  padding-top: 50px;
`;
Wrapper.Flexer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  padding-top: 14px;
`;
Wrapper.ForgotText = styled.div`
  padding-left: 200px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #46a358;
  cursor: pointer;
  @media (max-width: 410px) {
    padding-left: 130px;
  }
`;
Wrapper.Input = styled(Input)`
  width: 350px;
  height: 40px;
  @media (max-width: 410px) {
    width: 300px;
  }
`;
Wrapper.InputPass = styled(Input.Password)`
  width: 350px;
  height: 40px;
  @media (max-width: 410px) {
    width: 300px;
  }
`;
Wrapper.Btn = styled.div`
  cursor: pointer;
  width: 350px;
  height: 45px;
  color: white;
  background: #46a358;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  @media (max-width: 410px) {
    width: 300px;
  }
`;

Wrapper.Or = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
Wrapper.OrText = styled.div`
  padding-top: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.OrImg = styled.img`
  margin-right: 10px;
`;
Wrapper.GoogleBtn = styled.div`
  width: 350px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #727272;
  padding-top: 10px;
  margin-top: 27px;
  cursor: pointer;
  @media (max-width: 410px) {
    width: 300px;
  }
`;
Wrapper.FacebookBtn = styled.div`
  width: 350px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #727272;
  padding-top: 10px;
  margin-top: 15px;
  margin-bottom: 40px;
  cursor: pointer;
  @media (max-width: 410px) {
    width: 300px;
  }
`;
