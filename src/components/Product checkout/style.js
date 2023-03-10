import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Container = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
Wrapper.Flexer = styled.div`
  display: flex;
  grid-gap: 60px;
  justify-content: center;
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
`;
Wrapper.Div = styled.div``;
Wrapper.FormLabel = styled.div`
  margin-bottom: 10px;
`;
Wrapper.Label2 = styled.div`
  margin-top: 20px;
`;
Wrapper.StarImg = styled.img``;
Wrapper.Order = styled.div`
  width: 405px;
  margin-top: 50px;
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
`;
Wrapper.OrderProductImg = styled.img`
  width: 70px;
  height: 70px;
`;
Wrapper.OrderProductName = styled.div`
  margin-left: -30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.OrderProductCount = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
`;
Wrapper.OrderProductPrice = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #46a358;
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
`;
Wrapper.PayImg = styled.img`
  width: 224px;
  height: 26px;
`;
Wrapper.PayText = styled.div``;
Wrapper.OrderBtn = styled.div`
  background-color: red;
`;
Wrapper.ModalContainer = styled.div`
  width: 550px;
  margin: 0 auto;
`;
Wrapper.ModalTop = styled.div`
  text-align: center;
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
`;
Wrapper.ModalHeadItem = styled.div`
  width: 200px;
  border-right: ${({ isEnd }) =>
    !isEnd ? " 1px solid rgba(70, 163, 88, 0.2)" : ""};
  padding-left: 15px;
`;
Wrapper.HeadTitle = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
  white-space: nowrap;
`;
Wrapper.HeadText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #727272;
  white-space: nowrap;
  padding-top: 3px;
`;
Wrapper.BottomTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  padding-top: 18px;
`;
Wrapper.BottomTexts = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-bottom: 11px;
`;
Wrapper.BottomText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
  background: #fbfbfb;
`;
Wrapper.ProductDetailImg = styled.img`
  width: 70px;
  height: 70px;
`;
Wrapper.ProductDetailName = styled.div`
  padding-left: 11px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.ProductDetailQty = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #727272;
`;
Wrapper.ProductDetailTotal = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #46a358;
`;
Wrapper.Space = styled.div`
  text-align: right;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-bottom: 10px;
  padding-top: 20px;
`;
Wrapper.SpaceTexts = styled.div`
  display: flex;
  grid-gap: 214px;
  justify-content: end;
  margin-bottom: 25px;
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
`;
