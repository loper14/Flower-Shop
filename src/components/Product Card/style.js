import styled from "styled-components";

export let Wrapper = styled.div``;
Wrapper.Container = styled.div`
  width: 1400px;
  margin: 0 auto;
`;
Wrapper.ProductsContainer = styled.div`
  display: flex;
  grid-gap: 86px;
`;

Wrapper.Table = styled.div`
  padding-top: 50px;
`;
Wrapper.TableHead = styled.div`
  display: flex;
  grid-gap: 108px;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-bottom: 11px;
  width: 780px;
`;
Wrapper.TableHeadTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.TableBottom = styled.div``;
Wrapper.TableBottomItem = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  margin-top: 11px;
  background: #fbfbfb;
  width: 780px;
  height: 70px;
`;
Wrapper.ItemImg = styled.img`
  width: 70px;
  height: 70px;
`;
Wrapper.ItemName = styled.div`
  align-items: center;
  display: flex;
  width: 270px;
  grid-gap: 10px;
`;
Wrapper.ItemNames = styled.div`
  display: flex;
  flex-direction: column;
`;
Wrapper.Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Sku = styled.div``;
Wrapper.ItemPrice = styled.div`
  width: 140px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #727272;
`;
Wrapper.ItemQuantity = styled.div`
  display: flex;
  grid-gap: 20px;
  width: 195px;
  align-items: center;
`;
Wrapper.ItemQuantityNum = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 10px;
  color: #3d3d3d;
`;
Wrapper.IncreaseBtn = styled.div`
  width: 21.71px;
  height: 25px;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  border-radius: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
`;
Wrapper.DecreaseBtn = styled.div`
  width: 21.71px;
  height: 25px;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  border-radius: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 16px;
  color: #ffffff;
  cursor: pointer;
`;
Wrapper.ItemTotal = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: #46a358;
  width: 100px;
`;
Wrapper.DeleteImg = styled.img`
  cursor: pointer;
`;
Wrapper.CardTotals = styled.div`
  width: 400px;
  padding-top: 50px;
`;
Wrapper.TotalsTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-bottom: 11px;
  margin-bottom: 11px;
`;
Wrapper.Div = styled.div`
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
Wrapper.ChargeText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #46a358;
  text-align: right;
  padding-top: 8px;
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
Wrapper.CheckoutBtn = styled.button`
  width: 100%;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 16px;
  color: #ffffff;
  background: #46a358;
  border-radius: 3px;
  border: none;
  margin-top: 29px;
`;
Wrapper.ShoppingBtn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #46a358;
  text-align: center;
  padding-top: 14px;
  cursor: pointer;
`;
