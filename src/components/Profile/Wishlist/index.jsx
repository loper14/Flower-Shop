import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCardData, setProductData } from "../../../redux/slice";
import { Wrapper } from "./style";

const Wishlist = () => {
  let { wishlist } = useSelector((state) => state.wishlist);

  let { cardData, count } = useSelector((state) => state.data);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let addToCard = (item) => {
    let res = cardData.some((value) => value.id === item.id);
    if (!res) dispatch(addCardData({ ...item, quantity: count }));
  };

  return (
    <Wrapper>
      <Wrapper.CardContainer>
        {wishlist.map((value) => (
          <Wrapper.ProductCard key={value.id}>
            <Wrapper.CardImg src={value.img} />
            <Wrapper.CardHoverItems className="hoverItem">
              <Wrapper.HoverItem1 onClick={() => addToCard(value)} />
              <Wrapper.HoverItem2 />
              <Wrapper.HoverItem3
                onClick={() => {
                  dispatch(setProductData(value));
                  navigate("/product_view");
                }}
              />
            </Wrapper.CardHoverItems>
            <Wrapper.Space>
              <Wrapper.ProductName>{value.name}1</Wrapper.ProductName>
              <Wrapper.ProductDate>
                {value.date.toLocaleString("ru-Ru", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
              </Wrapper.ProductDate>
            </Wrapper.Space>
            <Wrapper.ProductPrice>${value.price}</Wrapper.ProductPrice>
          </Wrapper.ProductCard>
        ))}
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Wishlist;
