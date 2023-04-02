import { Button, Input, Modal, Radio } from "antd";
import React, { useState } from "react";
import { Wrapper } from "./style";
import star from "../../assets/icons/star.svg";
import { useSelector } from "react-redux";
import payImg from "../../assets/imgs/partners.png";
import Blog from "../../components/Home/Blog";
import Footer from "../../components/Home/Footer";
import modalImg from "../../assets/imgs/thanks.png";
import { useNavigate } from "react-router-dom";

const ProductCheckout = () => {
  let { cardData, total } = useSelector((state) => state.data);
  let [checked, setChecked] = useState(false);
  let navigate = useNavigate();
  let [radio, setRadio] = useState("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Wrapper>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={650}
        footer={null}
      >
        <Wrapper.ModalContainer>
          <Wrapper.ModalTop>
            <Wrapper.ModalImg src={modalImg} />
            <Wrapper.ModalText>Your order has been received</Wrapper.ModalText>
          </Wrapper.ModalTop>
          <Wrapper.ModalHead>
            <Wrapper.ModalHeadItem>
              <Wrapper.HeadTitle>Order Number</Wrapper.HeadTitle>
              <Wrapper.HeadText>19586687</Wrapper.HeadText>
            </Wrapper.ModalHeadItem>
            <Wrapper.ModalHeadItem>
              <Wrapper.HeadTitle>Date</Wrapper.HeadTitle>
              <Wrapper.HeadText>
                {new Date().toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
              </Wrapper.HeadText>
            </Wrapper.ModalHeadItem>
            <Wrapper.ModalHeadItem>
              <Wrapper.HeadTitle>Total</Wrapper.HeadTitle>
              <Wrapper.HeadText>${total + 16}</Wrapper.HeadText>
            </Wrapper.ModalHeadItem>
            <Wrapper.ModalHeadItem isEnd={true}>
              <Wrapper.HeadTitle>Payment Method</Wrapper.HeadTitle>
              <Wrapper.HeadText>
                {radio === 1 ? (
                  <Wrapper.PayImg small={true} src={payImg} />
                ) : radio === 2 ? (
                  "Dorect bank transfer"
                ) : (
                  "Cash on delivery"
                )}
              </Wrapper.HeadText>
            </Wrapper.ModalHeadItem>
          </Wrapper.ModalHead>
          <Wrapper.BottomTitle>Order Details</Wrapper.BottomTitle>
          <Wrapper.BottomTexts>
            <Wrapper.BottomText>Products</Wrapper.BottomText>
            <Wrapper.BottomText>Qty</Wrapper.BottomText>
            <Wrapper.BottomText>Subtotal</Wrapper.BottomText>
          </Wrapper.BottomTexts>
          {cardData.map((value) => (
            <Wrapper.ProductDetail>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Wrapper.ProductDetailImg src={value.img} />
                <Wrapper.ProductDetailName>
                  {value.name}
                </Wrapper.ProductDetailName>
              </div>
              <Wrapper.ProductDetailQty style={{ marginLeft: "25px" }}>
                x({value.quantity})
              </Wrapper.ProductDetailQty>
              <Wrapper.ProductDetailTotal>
                ${value.price * value.quantity}
              </Wrapper.ProductDetailTotal>
            </Wrapper.ProductDetail>
          ))}
          <Wrapper.Space>
            <Wrapper.SpaceTexts>
              <Wrapper.SpaceText1>Shipping</Wrapper.SpaceText1>
              <Wrapper.SpaceText2>$16.00</Wrapper.SpaceText2>
            </Wrapper.SpaceTexts>
            <Wrapper.SpaceTexts>
              <Wrapper.SpaceText2>Total</Wrapper.SpaceText2>
              <Wrapper.ProductDetailTotal>
                ${total + 16}
              </Wrapper.ProductDetailTotal>
            </Wrapper.SpaceTexts>
          </Wrapper.Space>
          <Wrapper.Message>
            Your order is currently being processed. Yo will receive an order
            confirmation email shortly with the expected delivery date for your
            items.
          </Wrapper.Message>
          <Wrapper.TrackOrder
            onClick={() => {
              handleCancel();
              navigate("/");
            }}
          >
            Track your order
          </Wrapper.TrackOrder>
        </Wrapper.ModalContainer>
      </Modal>
      <Wrapper.Container>
        <Wrapper.Flexer>
          <Wrapper.Form>
            <Wrapper.FormTitle>Billing Address</Wrapper.FormTitle>
            <Wrapper.FormDiv>
              <Wrapper.Div>
                <Wrapper.FormLabel>
                  First Name <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  Last Name <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  Country / Region <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  Town / City <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  Street Address <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input placeholder="House number and street name" />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input placeholder="Appartment, suite, unit, etc. (optional)" />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  State <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  Zip <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  Email address <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input />
              </Wrapper.Div>

              <Wrapper.Div>
                <Wrapper.FormLabel>
                  Phone number <Wrapper.StarImg src={star} />
                </Wrapper.FormLabel>
                <Wrapper.Input />
              </Wrapper.Div>
            </Wrapper.FormDiv>
            <Wrapper.Label2>
              <Radio
                onChange={(e) => setChecked(e.target.checked)}
                style={{ marginLeft: "10px", accentColor: "red" }}
              />
              Ship to a different address?
            </Wrapper.Label2>
            {checked ? (
              <div>
                <Wrapper.FormLabel style={{ marginTop: "30px" }}>
                  Order notes (optional)
                </Wrapper.FormLabel>
                <textarea style={{ maxWidth: "350px" }} />
              </div>
            ) : (
              ""
            )}
          </Wrapper.Form>
          <Wrapper.Order>
            <Wrapper.OrderTitle>Your Order</Wrapper.OrderTitle>
            <Wrapper.OrderHead>
              <Wrapper.OrderHeadText>Product</Wrapper.OrderHeadText>
              <Wrapper.OrderHeadText>Subtotal</Wrapper.OrderHeadText>
            </Wrapper.OrderHead>
            {cardData.map((value) => (
              <Wrapper.OrderProduct key={value.id}>
                <Wrapper.OrderProductImg src={value.img} />
                <Wrapper.OrderProductName>
                  {value.name}
                </Wrapper.OrderProductName>
                <Wrapper.OrderProductCount>
                  x({value.quantity})
                </Wrapper.OrderProductCount>
                <Wrapper.OrderProductPrice>
                  ${value.price}
                </Wrapper.OrderProductPrice>
              </Wrapper.OrderProduct>
            ))}
            <Wrapper.SuggestText1>
              Have a coupon code?
              <Wrapper.SuggestText2>Click here</Wrapper.SuggestText2>
            </Wrapper.SuggestText1>
            <Wrapper.TextFlexer>
              <Wrapper.Div>Subtotal</Wrapper.Div>
              <Wrapper.Sum>${total}</Wrapper.Sum>
            </Wrapper.TextFlexer>
            <Wrapper.TextFlexer>
              <Wrapper.Div>Coupon Discount</Wrapper.Div>
              <Wrapper.Sum>(-) 00.00</Wrapper.Sum>
            </Wrapper.TextFlexer>
            <Wrapper.TextFlexer>
              <Wrapper.Div>Shipping</Wrapper.Div>
              <Wrapper.Sum>$16.00</Wrapper.Sum>
            </Wrapper.TextFlexer>
            <Wrapper.ChargeText>View shipping charge</Wrapper.ChargeText>
            <Wrapper.TextFlexer>
              <Wrapper.Sum>Total</Wrapper.Sum>
              <Wrapper.SumTotal>${total + 16}</Wrapper.SumTotal>
            </Wrapper.TextFlexer>
            <Wrapper.PayTitle>Payment Methods</Wrapper.PayTitle>
            <Wrapper.Space2>
              <Wrapper.PayMethod>
                <Radio
                  checked={radio === 1 ? true : false}
                  onChange={() => setRadio(1)}
                />
                <Wrapper.PayImg src={payImg} />
              </Wrapper.PayMethod>
              <Wrapper.PayMethod>
                <Radio
                  checked={radio === 2 ? true : false}
                  onChange={() => setRadio(2)}
                />
                <Wrapper.PayText>Dorect bank transfer</Wrapper.PayText>
              </Wrapper.PayMethod>
              <Wrapper.PayMethod>
                <Radio
                  checked={radio === 3 ? true : false}
                  onChange={() => setRadio(3)}
                />
                <Wrapper.PayText>Cash on delivery</Wrapper.PayText>
              </Wrapper.PayMethod>
              {/* <Wrapper.OrderBtn>Place Order</Wrapper.OrderBtn> */}
              <Wrapper.Button
                onClick={() => setIsModalOpen(true)}
                type="primary"
              >
                Place Order
              </Wrapper.Button>
            </Wrapper.Space2>
          </Wrapper.Order>
        </Wrapper.Flexer>
        <Blog show={true} />
        <Footer />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default ProductCheckout;
