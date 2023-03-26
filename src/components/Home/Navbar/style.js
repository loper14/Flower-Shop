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
  @media (max-width: 1450px) {
    width: 1100px;
  }
  @media (max-width: 1150px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 360px;
  }
`;
Wrapper.Nav = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1150px) {
    justify-content: center;
    grid-gap: 270px;
  }
  @media (max-width: 700px) {
    grid-gap: 70px;
  }
`;
Wrapper.Logo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  cursor: pointer;
`;
Wrapper.LogoText = styled.div`
  color: #46a358;
  font-size: 30px;
  font-weight: 600;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
Wrapper.LogoImg = styled.img`
  @media (max-width: 700px) {
    width: 25px;
    height: 25px;
  }
`;
Wrapper.Navbar = styled.div`
  display: flex;
  grid-gap: 30px;
  @media (max-width: 1150px) {
    display: none;
  }
`;
Wrapper.HumburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  @media (max-width: 400px) {
    width: 300px;
    margin-left: 30px;
    /* background-color: red; */
  }
`;
Wrapper.NavbarText = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: #3d3d3d;
  padding-bottom: 10px;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "3px solid #46a358" : "")};
`;
Wrapper.Actions = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  @media (max-width: 1150px) {
    grid-gap: 0;
  }
`;
Wrapper.ActionsImg1 = styled.img`
  cursor: pointer;
  margin-right: 20px;
  @media (max-width: 1150px) {
    margin-right: 20px;
  }
`;
Wrapper.Count = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
  background: #46a358;
  border: 2px solid #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  line-height: 13px;
  color: #ffffff;
  border-radius: 50%;
  padding-top: 2px;
  left: 50px;
  bottom: 6px;
`;
Wrapper.ActionsImg2 = styled.img`
  margin-right: 40px;
  @media (max-width: 1150px) {
    margin-right: 20px;
  }
  cursor: pointer;
`;
Wrapper.ActionsImg3 = styled.img``;
Wrapper.ActionsButton = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  justify-content: center;
  cursor: pointer;
  grid-gap: 10px;
  color: white;
  cursor: pointer;
  @media (max-width: 1150px) {
    display: none;
  }
`;
Wrapper.Humburger = styled.img`
  cursor: pointer;
  display: none;
  @media (max-width: 1150px) {
    display: flex;
  }
`;
