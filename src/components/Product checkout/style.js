import { Button, Input } from "antd";
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
  @media (max-width: 700px) {
    width: 350px;
  }
`;
Wrapper.Flexer = styled.div`
  display: flex;
  grid-gap: 60px;
  justify-content: center;
  @media (max-width: 1450px) {
    grid-gap: 20px;
  }
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`;
Wrapper.Form = styled.div``;
Wrapper.FormTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;
Wrapper.FormDiv = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-gap: 0;
  grid-row-gap: 36px;
  grid-column-gap: 20px;
  @media (max-width: 1450px) {
    grid-template-columns: 300px 300px;
  }
  @media (max-width: 700px) {
    grid-template-columns: 300px;
  }
`;
Wrapper.Div = styled.div``;
Wrapper.FormLabel = styled.div`
  margin-bottom: 10px;
`;
Wrapper.Input = styled(Input)`
  width: 350px;
  @media (max-width: 1450px) {
    width: 290px;
  }
`;
Wrapper.Label2 = styled.div`
  margin-top: 20px;
`;
Wrapper.StarImg = styled.img``;
Wrapper.Order = styled.div`
  width: 405px;
  margin-top: 50px;
  @media (max-width: 1150px) {
    width: 650px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;
Wrapper.Space2 = styled.div`
  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
Wrapper.OrderTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.OrderHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 21px;
`;
Wrapper.OrderHeadText = styled.div``;
Wrapper.OrderProduct = styled.div`
  display: flex;
  grid-gap: 55px;
  align-items: center;
  width: 405px;
  height: 70px;
  background: #fbfbfb;
  @media (max-width: 1150px) {
    width: 650px;
    grid-gap: 70px;
  }
  @media (max-width: 700px) {
    width: 350px;
    grid-gap: 0px;
  }
`;
Wrapper.OrderProductImg = styled.img`
  width: 70px;
  height: 70px;
  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
`;
Wrapper.OrderProductName = styled.div`
  margin-left: -30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  @media (max-width: 700px) {
    padding-left: 40px;
  }
`;
Wrapper.OrderProductCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
  @media (max-width: 700px) {
    padding-left: 40px;
  }
`;
Wrapper.OrderProductPrice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #46a358;
  @media (max-width: 1150px) {
    padding-left: 180px;
  }
  @media (max-width: 700px) {
    padding-left: 40px;
  }
`;
Wrapper.SuggestText1 = styled.div`
  text-align: right;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #3d3d3d;
  margin-top: 17px;
`;
Wrapper.SuggestText2 = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #46a358;
  cursor: pointer;
  padding-left: 5px;
`;
Wrapper.Div2 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.TextFlexer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
Wrapper.Sum = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #3d3d3d;
`;
Wrapper.SumTotal = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  text-align: right;
  color: #46a358;
`;
Wrapper.ChargeText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #46a358;
  text-align: right;
  padding-top: 8px;
`;
Wrapper.PayTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
  padding-top: 47px;
`;
Wrapper.PayMethod = styled.div`
  width: 405px;
  height: 45px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding-left: 11px;
  margin-top: 18px;
  float: right;
  @media (max-width: 1150px) {
    width: 650px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;
Wrapper.PayImg = styled.img`
  width: ${({ small }) => (small ? "170px" : "224px")};
  height: 26px;
  @media (max-width: 400px) {
    width: ${({ small }) => (small ? "130px" : "224px")};
  }
`;
Wrapper.PayText = styled.div``;
Wrapper.Button = styled(Button)`
  width: 405px;
  height: 40px;
  background-color: #46a358;
  border-radius: 0;
  margin-top: 40px;
  font-weight: 700;
  font-size: 15px;
  @media (max-width: 1150px) {
    width: 650px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;
Wrapper.OrderBtn = styled.div`
  background-color: red;
`;
Wrapper.ModalContainer = styled.div`
  width: 550px;
  margin: 0 auto;
  @media (max-width: 650px) {
    width: 380px;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
  @media (max-width: 380px) {
    width: 260px;
    position: relative;
    right: 20px;
  }
`;
Wrapper.ModalTop = styled.div`
  text-align: center;
  @media (max-width: 380px) {
    width: 260px;
    position: relative;
    left: 20px;
  }
`;
Wrapper.ModalImg = styled.img`
  margin-top: 25px;
`;
Wrapper.ModalText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: #727272;
  padding-top: 16px;
`;
Wrapper.ModalHead = styled.div`
  display: flex;
  margin-top: 15px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.2);
  padding-bottom: 18px;
  @media (max-width: 650px) {
    width: 400px;
    margin: 15px auto;
  }
  @media (max-width: 480px) {
    width: 300px;
    display: grid;
    grid-template-columns: 150px 150px;
    border: none;
  }
`;
Wrapper.ModalHeadItem = styled.div`
  width: 200px;
  border-right: ${({ isEnd }) =>
    !isEnd ? " 1px solid rgba(70, 163, 88, 0.2)" : ""};
  padding-left: 15px;
  @media (max-width: 480px) {
    border: none;
    padding-left: 5px;
  }
`;
Wrapper.HeadTitle = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
  white-space: nowrap;
  @media (max-width: 650px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    width: 300px;
    border: none;
    width: 100px;
  }
`;
Wrapper.HeadText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #727272;
  white-space: nowrap;
  padding-top: 3px;
  @media (max-width: 650px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    width: 300px;
    border: none;
    width: 100px;
  }
`;
Wrapper.BottomTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  padding-top: 18px;
  @media (max-width: 650px) {
    font-size: 14px;
    padding-left: 10px;
  }
`;
Wrapper.BottomTexts = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-bottom: 11px;
  @media (max-width: 650px) {
    width: 350px;
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    width: 300px;
    grid-gap: 10px;
    border: none;
  }
`;
Wrapper.BottomText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  @media (max-width: 650px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
Wrapper.ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
  background: #fbfbfb;
  @media (max-width: 650px) {
    width: 380px;
    margin: 11px auto;
    justify-content: center;
  }
  @media (max-width: 480px) {
    width: 300px;
    justify-content: space-between;
  }
`;
Wrapper.ProductDetailImg = styled.img`
  width: 70px;
  height: 70px;
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
Wrapper.ProductDetailName = styled.div`
  padding-left: 11px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  width: 165px;
  @media (max-width: 650px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    width: 90px;
  }
`;
Wrapper.ProductDetailQty = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
  position: relative;
  right: 100px;
  @media (max-width: 480px) {
    right: 60px;
  }
`;
Wrapper.ProductDetailTotal = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #46a358;
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;
Wrapper.Space = styled.div`
  text-align: right;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-bottom: 10px;
  padding-top: 20px;
  @media (max-width: 650px) {
    width: 350px;
    margin: 0 auto;
  }
  @media (max-width: 480px) {
    width: 300px;
  }
`;
Wrapper.SpaceTexts = styled.div`
  display: flex;
  grid-gap: 214px;
  justify-content: end;
  margin-bottom: 25px;
  @media (max-width: 480px) {
    grid-gap: 30px;
    justify-content: center;
  }
`;
Wrapper.SpaceText1 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.SpaceText2 = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Message = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #727272;
  padding-top: 18px;
  margin-bottom: 40px;
  @media (max-width: 650px) {
    width: 350px;
    padding-top: 0;
    margin: 40px auto;
  }
  @media (max-width: 480px) {
    width: 280px;
  }
  @media (max-width: 380px) {
    width: 260px;
    position: relative;
    left: 20px;
  }
`;
Wrapper.TrackOrder = styled.div`
  width: 162px;
  height: 45px;
  background-color: #46a358;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto;
  cursor: pointer;
  @media (max-width: 380px) {
    width: 260px;
    position: relative;
    left: 20px;
  }
`;
