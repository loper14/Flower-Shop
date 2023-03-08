import styled from "styled-components";

export let Wrapper = styled.div`
  padding-top: 127px;
`;
Wrapper.Head = styled.div`
  width: 100%;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
  padding-bottom: 12px;
  margin-bottom: 50px;
`;
Wrapper.Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #46a358;
`;
Wrapper.Bottom = styled.div`
  background: #fbfbfb;
  padding: 25px 0;
  margin-top: 100px;
`;
Wrapper.BottomContainer = styled.div`
  display: flex;
  grid-gap: 30px;
`;
Wrapper.BottomItem = styled.div`
  width: 300px;
  background: #fbfbfb;
  padding-left: 25px;
  padding-right: 5px;
  border-right: ${({ isEnd }) =>
    !isEnd ? "1px solid rgba(70, 163, 88, 0.1)" : ""};
`;
Wrapper.BottomItemImg = styled.img`
  width: 130px;
  height: 130px;
`;
Wrapper.BottomItemTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.BottomItemDesc = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #727272;
  padding-top: 10px;
`;
Wrapper.BottomForm = styled.div`
  padding-left: 40px;
  padding-top: 30px;
`;
Wrapper.FormTitle = styled.div`
  margin-bottom: 15px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.FormDesc = styled.div`
  width: 354px;
  height: 89px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #727272;
  padding-top: 25px;
`;
