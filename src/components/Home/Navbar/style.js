import styled from "styled-components";

export let Wrapper = styled.div`
  width: 100%;
  height: 70px;
  padding-top: 20px;
`;
Wrapper.Container = styled.div`
  width: 1400px;
  margin: 0 auto;
  border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;
Wrapper.Nav = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Wrapper.Logo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;
Wrapper.LogoText = styled.div`
  color: #46a358;
  font-size: 30px;
  font-weight: 600;
`;
Wrapper.LogoImg = styled.img``;
Wrapper.Navbar = styled.div`
  display: flex;
  grid-gap: 30px;
`;
Wrapper.NavbarText = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #3d3d3d;
  margin-bottom: 5px;
  cursor: pointer;
`;
Wrapper.Actions = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 25px;
`;
Wrapper.ActionsImg1 = styled.img``;
Wrapper.ActionsImg2 = styled.img``;
Wrapper.ActionsImg3 = styled.img``;
Wrapper.ActionsButton = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  justify-content: center;
  grid-gap: 10px;
  color: white;
  cursor: pointer;
`;
