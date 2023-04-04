import { Wrapper } from "./style";
import star from "../../../assets/icons/star.svg";
import { Input } from "antd";

const Account = () => {
  return (
    <Wrapper>
      <Wrapper.Right>
        <Wrapper.RightTitle>Personal Information</Wrapper.RightTitle>
        <Wrapper.RightForm>
          <Wrapper.RightFormItem>
            <Wrapper.RightLabel>First Name</Wrapper.RightLabel>
            <Wrapper.RightImg src={star} />
            <Wrapper.AccountInput value={localStorage.getItem("firstName")} />
          </Wrapper.RightFormItem>
          <Wrapper.RightFormItem>
            <Wrapper.RightLabel>Last Name</Wrapper.RightLabel>
            <Wrapper.RightImg src={star} />
            <Wrapper.AccountInput value={localStorage.getItem("lastName")} />
          </Wrapper.RightFormItem>
          <Wrapper.RightFormItem>
            <Wrapper.RightLabel>Email address</Wrapper.RightLabel>
            <Wrapper.RightImg src={star} />
            <Wrapper.AccountInput value={localStorage.getItem("email")} />
          </Wrapper.RightFormItem>

          <Wrapper.RightFormItem>
            <Wrapper.RightLabel>Username</Wrapper.RightLabel>
            <Wrapper.RightImg src={star} />
            <Wrapper.AccountInput value={localStorage.getItem("username")} />
          </Wrapper.RightFormItem>
          <Wrapper.RightFormItem>
            <Wrapper.RightLabel>Phone number</Wrapper.RightLabel>
            <Wrapper.RightImg src={star} />
            <Wrapper.AccountInput value={localStorage.getItem("phoneNumber")} />
          </Wrapper.RightFormItem>
          <Wrapper.RightFormItem>
            <Wrapper.RightLabel>Password</Wrapper.RightLabel>
            <Wrapper.RightImg src={star} />
            <Wrapper.AccountInput value={localStorage.getItem("password")} />
          </Wrapper.RightFormItem>
        </Wrapper.RightForm>
      </Wrapper.Right>
    </Wrapper>
  );
};

export default Account;
