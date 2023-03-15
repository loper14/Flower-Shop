import { notification, Rate } from "antd";
import React, { useState } from "react";
import { Wrapper } from "./style";
import facebook2 from "../../../assets/icons/facebook2.svg";
import twitter2 from "../../../assets/icons/twitter2.svg";
import linkedin2 from "../../../assets/icons/linkedin2.svg";
import message2 from "../../../assets/icons/message2.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSize,
  increase,
  decrease,
  addCardData,
} from "../../../redux/slice";
import { useNavigate } from "react-router-dom";

const Right = ({ data }) => {
  const [value, setValue] = useState(4);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { activeSize, count, cardData } = useSelector((state) => state.data);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      placement: "topRight",
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    });
  };

  return (
    <Wrapper>
      <Wrapper.Head>
        <Wrapper.HeadLeft>
          <Wrapper.Title onClick={() => openNotificationWithIcon("success")}>
            {data.name}
          </Wrapper.Title>
          <Wrapper.Price>${data.price}</Wrapper.Price>
        </Wrapper.HeadLeft>
        <Wrapper.HeadRight>
          <Wrapper.Stars>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            <Wrapper.Span>19 Customer Review</Wrapper.Span>
          </Wrapper.Stars>
        </Wrapper.HeadRight>
      </Wrapper.Head>
      <Wrapper.Bottom>
        <Wrapper.ShortDesc>Short Description:</Wrapper.ShortDesc>
        <Wrapper.Text>
          The ceramic cylinder planters come with a wooden stand to help elevate
          your plants off the ground. The ceramic cylinder planters come with a
          wooden stand to help elevate your plants off the ground.
        </Wrapper.Text>
        <Wrapper.Label>Size:</Wrapper.Label>
        <Wrapper.SizeContainer>
          <Wrapper.SizeItem
            active={activeSize === "s" ? true : false}
            onClick={() => dispatch(setActiveSize("s"))}
          >
            S
          </Wrapper.SizeItem>
          <Wrapper.SizeItem
            active={activeSize === "x" ? true : false}
            onClick={() => dispatch(setActiveSize("x"))}
          >
            X
          </Wrapper.SizeItem>
          <Wrapper.SizeItem
            active={activeSize === "m" ? true : false}
            onClick={() => dispatch(setActiveSize("m"))}
          >
            M
          </Wrapper.SizeItem>
          <Wrapper.SizeItem
            active={activeSize === "xl" ? true : false}
            onClick={() => dispatch(setActiveSize("xl"))}
          >
            XL
          </Wrapper.SizeItem>
        </Wrapper.SizeContainer>
        <Wrapper.Actions>
          <Wrapper.Count>
            <Wrapper.CountBtn onClick={() => dispatch(increase())}>
              +
            </Wrapper.CountBtn>
            <Wrapper.CountText>{count}</Wrapper.CountText>
            <Wrapper.CountBtn onClick={() => dispatch(decrease())}>
              -
            </Wrapper.CountBtn>
          </Wrapper.Count>
          <Wrapper.CardAction>
            <Wrapper.BuyBtn>Buy now</Wrapper.BuyBtn>
            {contextHolder}
            <Wrapper.AddBtn
              onClick={() => {
                openNotificationWithIcon("success", "topLeft");
                dispatch(addCardData({ ...data, quantity: count }));
                navigate("/");
              }}
            >
              Add to card
            </Wrapper.AddBtn>
            <Wrapper.Heart></Wrapper.Heart>
          </Wrapper.CardAction>
        </Wrapper.Actions>
        <Wrapper.ExtraInfo>
          <Wrapper.ExtraInfoTitle>SKU:</Wrapper.ExtraInfoTitle>
          <Wrapper.ExtraInfoText>1995751877966</Wrapper.ExtraInfoText>
        </Wrapper.ExtraInfo>
        <Wrapper.ExtraInfo>
          <Wrapper.ExtraInfoTitle>Categories:</Wrapper.ExtraInfoTitle>
          <Wrapper.ExtraInfoText> Potter Plants</Wrapper.ExtraInfoText>
        </Wrapper.ExtraInfo>
        <Wrapper.ExtraInfo>
          <Wrapper.ExtraInfoTitle>Tags:</Wrapper.ExtraInfoTitle>
          <Wrapper.ExtraInfoText>Home, Garden, Plants</Wrapper.ExtraInfoText>
        </Wrapper.ExtraInfo>
        <Wrapper.Share>
          <Wrapper.ShareText>Share this products:</Wrapper.ShareText>
          <Wrapper.ShareImg src={facebook2} />
          <Wrapper.ShareImg src={twitter2} />
          <Wrapper.ShareImg src={linkedin2} />
          <Wrapper.ShareImg src={message2} />
        </Wrapper.Share>
      </Wrapper.Bottom>
    </Wrapper>
  );
};

export default Right;
