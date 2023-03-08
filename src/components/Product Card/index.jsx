import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Home/Footer";
import Related from "../Product view/Related Product";
import { Wrapper } from "./style";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteCardData,
} from "../../redux/slice";
import { Button, Input } from "antd";
import deleteImg from "../../assets/icons/delete.svg";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  let navigate = useNavigate();
  let { cardData, quantity } = useSelector((state) => state.data);
  let dispatch = useDispatch();

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.ProductsContainer>
          <Wrapper.Table>
            <Wrapper.TableHead>
              <Wrapper.TableHeadTitle>Products</Wrapper.TableHeadTitle>
              <Wrapper.TableHeadTitle>Price</Wrapper.TableHeadTitle>
              <Wrapper.TableHeadTitle>Quantity</Wrapper.TableHeadTitle>
              <Wrapper.TableHeadTitle>Total</Wrapper.TableHeadTitle>
            </Wrapper.TableHead>
            <Wrapper.TableBottom>
              {cardData.map((value) => (
                <Wrapper.TableBottomItem>
                  <Wrapper.ItemName>
                    <Wrapper.ItemImg src={value.img} />
                    <Wrapper.ItemNames>
                      <Wrapper.Name>{value.name}</Wrapper.Name>
                      <Wrapper.Sku>{value.sku}</Wrapper.Sku>
                    </Wrapper.ItemNames>
                  </Wrapper.ItemName>
                  <Wrapper.ItemPrice>${value.price}</Wrapper.ItemPrice>
                  <Wrapper.ItemQuantity>
                    <Wrapper.IncreaseBtn
                      onClick={() => dispatch(increaseQuantity())}
                    >
                      +
                    </Wrapper.IncreaseBtn>
                    <Wrapper.ItemQuantityNum>
                      {quantity}
                    </Wrapper.ItemQuantityNum>
                    <Wrapper.DecreaseBtn
                      onClick={() => dispatch(decreaseQuantity())}
                    >
                      -
                    </Wrapper.DecreaseBtn>
                  </Wrapper.ItemQuantity>
                  <Wrapper.ItemTotal>
                    ${value.price * quantity}
                  </Wrapper.ItemTotal>
                  <Wrapper.DeleteImg
                    onClick={() => dispatch(deleteCardData(value))}
                    src={deleteImg}
                  />
                </Wrapper.TableBottomItem>
              ))}
            </Wrapper.TableBottom>
          </Wrapper.Table>
          <Wrapper.CardTotals>
            <Wrapper.TotalsTitle>Cart Totals</Wrapper.TotalsTitle>
            <Wrapper.Div>Coupon Apply</Wrapper.Div>
            <Input.Group compact>
              <Input
                style={{
                  width: "82%",
                  height: "40px",
                  marginTop: "10px",
                }}
                placeholder="Enter coupon code here..."
              />
              <Button
                style={{
                  background: "#46A358",
                  fontWeight: "700",
                  border: "none",
                  height: "40px",
                  marginTop: "10px",
                }}
                type="primary"
              >
                Apply
              </Button>
            </Input.Group>
            <Wrapper.TextFlexer>
              <Wrapper.Div>Subtotal</Wrapper.Div>
              <Wrapper.Sum>$2,683.00</Wrapper.Sum>
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
              <Wrapper.SumTotal>$2,699.00</Wrapper.SumTotal>
            </Wrapper.TextFlexer>
            <Wrapper.CheckoutBtn onClick={() => navigate("/shop/checkout")}>
              Proceed To Checkout
            </Wrapper.CheckoutBtn>
            <Wrapper.ShoppingBtn>Continue shopping</Wrapper.ShoppingBtn>
          </Wrapper.CardTotals>
        </Wrapper.ProductsContainer>
        <Related />
        <Footer />
      </Wrapper.Container>
    </Wrapper>
  );
};

export default ProductCard;
