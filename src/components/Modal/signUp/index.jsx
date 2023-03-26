import { Input, notification } from "antd";
import google from "../../../assets/icons/google.svg";
import face from "../../../assets/icons/face2.svg";
import { Wrapper } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSigned, showModal } from "../../../redux/modalSlices";
import { LoadingOutlined } from "@ant-design/icons";
const SignUp = () => {
  const [api, contextHolder] = notification.useNotification();
  let [loader, setLoader] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const openNotification = (type) => {
    notification[type]({
      message: "Warning",
      description: "Please fill all the fields",
    });
  };
  const openNotificationSuccess = (type) => {
    notification[type]({
      message: "Success",
      description: "You have successfully signed up!!!",
    });
  };

  let register = () => {
    setLoader(true);
    setTimeout(() => {
      if (
        userInfo.firstName &&
        userInfo.lastName &&
        userInfo.username &&
        userInfo.phoneNumber &&
        userInfo.email &&
        userInfo.password.length > 0
      ) {
        localStorage.setItem("firstName", userInfo.firstName);
        localStorage.setItem("lastName", userInfo.lastName);
        localStorage.setItem("username", userInfo.username);
        localStorage.setItem("email", userInfo.email);
        localStorage.setItem("password", userInfo.password);
        localStorage.setItem("phoneNumber", userInfo.phoneNumber);
        localStorage.setItem("signed", true);
        openNotificationSuccess("success");
        dispatch(showModal());
        navigate("/profile");
        setLoader(false);
      } else {
        openNotification("warning");
        setLoader(false);
      }
    }, 2000);
  };
  let [userInfo, setUserInfo] = useState({});

  return (
    <Wrapper>
      {contextHolder}

      <Wrapper.Flexer>
        <Input
          style={{ width: "350px", height: "40px", marginTop: "40px" }}
          placeholder="First name"
          onChange={(e) =>
            setUserInfo({ ...userInfo, firstName: e.target.value })
          }
        />
        <Input
          style={{ width: "350px", height: "40px" }}
          placeholder="Last name"
          onChange={(e) =>
            setUserInfo({ ...userInfo, lastName: e.target.value })
          }
        />
        <Input
          style={{ width: "350px", height: "40px" }}
          placeholder="Username"
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
        <Input
          style={{ width: "350px", height: "40px" }}
          placeholder="Phone number"
          onChange={(e) =>
            setUserInfo({ ...userInfo, phoneNumber: e.target.value })
          }
        />
        <Input
          placeholder="Enter your email address"
          type="email"
          style={{ width: "350px", height: "40px" }}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <Input.Password
          placeholder="Password"
          style={{ width: "350px", height: "40px" }}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
          onKeyDown={(e) => e.key === "Enter" && register()}
        />

        <Wrapper.Btn onClick={register}>
          {loader ? <LoadingOutlined /> : "Register"}
        </Wrapper.Btn>
      </Wrapper.Flexer>
      <Wrapper.Or>
        <Wrapper.OrText>Or login withh</Wrapper.OrText>
        <Wrapper.GoogleBtn>
          <Wrapper.OrImg src={google} />
          Login with Google
        </Wrapper.GoogleBtn>
        <Wrapper.FacebookBtn>
          <Wrapper.OrImg src={face} />
          Login with Google Facebook
        </Wrapper.FacebookBtn>
      </Wrapper.Or>
    </Wrapper>
  );
};

export default SignUp;
