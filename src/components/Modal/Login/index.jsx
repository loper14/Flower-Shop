import { Input, notification } from "antd";
import { Wrapper } from "./style";
import google from "../../../assets/icons/google.svg";
import face from "../../../assets/icons/face2.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSigned, showModal } from "../../../redux/modalSlices";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  let dispatch = useDispatch();
  let [loader, setLoader] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (type) => {
    notification[type]({
      message: "Error",
      description: "Password or email is incorrect",
    });
  };
  let [loginData, setLoginData] = useState({});
  let navigate = useNavigate();

  let checkingUser = () => {
    setLoader(true);
    setTimeout(() => {
      if (
        loginData.email === localStorage.getItem("email") &&
        loginData.password === localStorage.getItem("password")
      ) {
        dispatch(showModal());
        navigate("/profile");
        dispatch(setSigned());
        setLoader(false);
      } else {
        openNotification("error");
        setLoader(false);
      }
    }, 2000);
  };
  return (
    <Wrapper>
      {contextHolder}
      <Wrapper.Text>Enter your username and password to login.</Wrapper.Text>
      <Wrapper.Flexer>
        <Wrapper.Input
          placeholder="almamun_uxui@outlook.com"
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />
        <Wrapper.InputPass
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
          onKeyDown={(e) => e.key === "Enter" && checkingUser()}
        />
        <Wrapper.ForgotText>Forgot Password?</Wrapper.ForgotText>
        <Wrapper.Btn onClick={checkingUser}>
          {loader ? <LoadingOutlined /> : "Login"}
        </Wrapper.Btn>
      </Wrapper.Flexer>
      <Wrapper.Or>
        <Wrapper.OrText>Or login with</Wrapper.OrText>
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

export default Login;
