import styled from "styled-components";

export let Wrapper = styled.div`
  padding-top: 100px;
`;
Wrapper.Container = styled.div`
  display: flex;
  grid-gap: 60px;
  justify-content: center;
  padding-left: 30px;
`;
Wrapper.Title = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 16px;
  color: #3d3d3d;
`;
Wrapper.Text = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #727272;
  margin-bottom: 35px;
  padding-top: 15px;
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
