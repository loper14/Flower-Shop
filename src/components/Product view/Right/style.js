import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";

export let Wrapper = styled.div`
  padding-top: 70px;
`;
Wrapper.Head = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #e5e5e5;
  padding-bottom: 13px;
  @media (max-width: 1450px) {
    justify-content: start;
    grid-gap: 80px;
    width: 620px;
  }
  @media (max-width: 700px) {
    width: 350px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    grid-gap: 10px;
  }
`;
Wrapper.HeadLeft = styled.div``;
Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 16px;
  color: #3d3d3d;
  @media (max-width: 1450px) {
    font-size: 22px;
  }
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
Wrapper.Price = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 16px;
  color: #46a358;
  padding-top: 20px;
  @media (max-width: 700px) {
    font-size: 14px;
    padding-top: 5px;
  }
`;
Wrapper.HeadRight = styled.div`
  padding-top: 30px;
`;
Wrapper.Stars = styled.div`
  display: flex;
  grid-gap: 6px;
  align-items: center;
  @media (max-width: 700px) {
    .rate {
      font-size: 10px;
      white-space: nowrap;
    }
    flex-direction: column;
  }
`;
Wrapper.Span = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Bottom = styled.div`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
Wrapper.ShortDesc = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  padding-top: 23px;
`;
Wrapper.Text = styled.div`
  font-weight: 300;
  font-size: 15px;
  line-height: 24px;
  color: #727272;
  padding-top: 10px;
  @media (max-width: 1450px) {
    width: 550px;
  }
  @media (max-width: 700px) {
    width: 350px;
    text-align: center;
  }
`;
Wrapper.Label = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #3d3d3d;
  padding-top: 24px;
`;
Wrapper.SizeContainer = styled.div`
  display: flex;
  grid-gap: 10px;
  padding-top: 11px;
`;
Wrapper.SizeItem = styled.div`
  width: 30px;
  height: 30px;
  border: ${({ active }) =>
    active ? "1px solid #46A358" : "1px solid #eaeaea"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  color: #727272;
`;
Wrapper.Actions = styled.div`
  display: flex;
  grid-gap: 34px;
  padding-top: 30px;
  @media (max-width: 700px) {
    grid-gap: 10px;
  }
`;
Wrapper.Count = styled.div`
  display: flex;
  grid-gap: 23px;
  align-items: center;
  @media (max-width: 700px) {
    grid-gap: 10px;
  }
`;
Wrapper.CountBtn = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 16px;
  color: #ffffff;
  width: 33px;
  height: 38px;
  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);
  border-radius: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  @media (max-width: 700px) {
    width: 28px;
    height: 33px;
  }
`;
Wrapper.CountText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 10px;
  color: #3d3d3d;
  width: 20px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
Wrapper.CardAction = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
`;
Wrapper.BuyBtn = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  width: 130px;
  height: 40px;
  background: #46a358;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 90px;
    height: 30px;
    font-size: 11px;
    font-weight: 400;
  }
`;
Wrapper.AddBtn = styled.div`
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #46a358;
  width: 130px;
  height: 40px;
  border: 1px solid #46a358;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 90px;
    height: 30px;
    font-size: 11px;
    font-weight: 400;
  }
`;
Wrapper.Heart = styled(HeartOutlined)`
  width: 40px;
  height: 40px;
  border: 1px solid #46a358;
  cursor: pointer;
  border-radius: 6px;
  color: #46a358;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    height: 33px;
  }
`;
Wrapper.ExtraInfo = styled.div`
  display: flex;
  grid-gap: 8px;
  margin-top: 15px;
`;
Wrapper.ExtraInfoTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: #a5a5a5;
`;
Wrapper.ExtraInfoText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  color: grey;
`;
Wrapper.Share = styled.div`
  display: flex;
  grid-gap: 16px;
  padding-top: 18px;
  @media (max-width: 700px) {
    grid-gap: 10px;
    width: 350px;
    justify-content: center;
  }
`;
Wrapper.ShareText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.ShareImg = styled.img``;
