import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./signUp";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { showModal, setActiveSection } from "../../redux/modalSlices";
import { Wrapper } from "./style";

const ModalControl = () => {
  let { visible, activeSection } = useSelector((state) => state.modalka);
  let dispatch = useDispatch();
  return (
    <Wrapper>
      <Modal
        open={visible}
        footer={null}
        onCancel={() => dispatch(showModal())}
      >
        <Wrapper.Titles>
          <Wrapper.Title
            active={activeSection === "login" ? true : false}
            onClick={() => dispatch(setActiveSection("login"))}
          >
            Login &nbsp;
          </Wrapper.Title>
          | &nbsp;
          <Wrapper.Title
            active={activeSection === "signUp" ? true : false}
            onClick={() => dispatch(setActiveSection("signUp"))}
          >
            Register
          </Wrapper.Title>
        </Wrapper.Titles>
        {activeSection === "login" ? <Login /> : <SignUp />}
      </Modal>
    </Wrapper>
  );
};

export default ModalControl;
