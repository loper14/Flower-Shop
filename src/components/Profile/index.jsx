import { Wrapper } from "./style";
import user from "../../assets/icons/user.svg";
import logoutbl from "../../assets/icons/logout-bl.png";
import loca from "../../assets/icons/loca.svg";
import bag from "../../assets/icons/bag.svg";
import heart from "../../assets/imgs/heart.svg";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { setSigned } from "../../redux/modalSlices";
import { setAccSection } from "../../redux/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import Account from "./Account";
import MyProducts from "./myProducts";
import Address from "./Address";
import Wishlist from "./Wishlist";

const Profile = () => {
  const { confirm } = Modal;
  let dispatch = useDispatch();
  let { accSection } = useSelector((state) => state.profileSlice);

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure to logout?",
      icon: <ExclamationCircleFilled />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        localStorage.clear();
        navigate("/");
        dispatch(setSigned());
      },
      onCancel() {},
    });
  };
  let navigate = useNavigate();
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Sider>
          <Wrapper.LeftTitle>My Account</Wrapper.LeftTitle>
          <Wrapper.SiderMenu>
            <Wrapper.SiderItem
              onClick={() => dispatch(setAccSection("account"))}
            >
              <Wrapper.LeftImg src={user} />
              Account details
            </Wrapper.SiderItem>
            <Wrapper.SiderItem
              onClick={() => dispatch(setAccSection("myProducts"))}
            >
              <Wrapper.LeftImg src={bag} />
              My products
            </Wrapper.SiderItem>
            <Wrapper.SiderItem
              onClick={() => dispatch(setAccSection("address"))}
            >
              <Wrapper.LeftImg src={loca} />
              Address
            </Wrapper.SiderItem>
            <Wrapper.SiderItem
              onClick={() => dispatch(setAccSection("wishlist"))}
            >
              <Wrapper.LeftImg src={heart} />
              Wishlist
            </Wrapper.SiderItem>
            <Wrapper.SiderLogout
              onClick={() => {
                showDeleteConfirm();
              }}
            >
              <Wrapper.LeftImg src={logoutbl} />
              Logout
            </Wrapper.SiderLogout>
          </Wrapper.SiderMenu>
        </Wrapper.Sider>
        <Wrapper.Left>
          <Wrapper.LeftSections>
            <Wrapper.LeftTitle>My Account</Wrapper.LeftTitle>
            <Wrapper.LeftSection
              onClick={() => dispatch(setAccSection("account"))}
            >
              <Wrapper.LeftImg src={user} />
              Account details
            </Wrapper.LeftSection>
            <Wrapper.LeftSection
              onClick={() => dispatch(setAccSection("myProducts"))}
            >
              <Wrapper.LeftImg src={bag} />
              My products
            </Wrapper.LeftSection>
            <Wrapper.LeftSection
              onClick={() => dispatch(setAccSection("address"))}
            >
              <Wrapper.LeftImg src={loca} />
              Address
            </Wrapper.LeftSection>
            <Wrapper.LeftSection
              onClick={() => dispatch(setAccSection("wishlist"))}
            >
              <Wrapper.LeftImg src={heart} />
              Wishlist
            </Wrapper.LeftSection>
            <Wrapper.Logout
              onClick={() => {
                showDeleteConfirm();
              }}
            >
              <Wrapper.LeftImg src={logoutbl} />
              Logout
            </Wrapper.Logout>
          </Wrapper.LeftSections>
        </Wrapper.Left>
        {accSection === "account" ? (
          <Account />
        ) : accSection === "myProducts" ? (
          <MyProducts />
        ) : accSection === "address" ? (
          <Address />
        ) : (
          <Wishlist />
        )}
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Profile;
