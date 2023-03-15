import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./style";
import delImg from "../../../assets/icons/delete.svg";
import { deleteCardData } from "../../../redux/slice";

const MyProducts = () => {
  let dispatch = useDispatch();
  let { cardData } = useSelector((state) => state.data);
  return (
    <Wrapper>
      <Wrapper.Title>My Products</Wrapper.Title>
      <Wrapper.Top>
        <Wrapper.TopText>Products</Wrapper.TopText>
        <Wrapper.TopText>Date</Wrapper.TopText>
        <Wrapper.TopText>Actionn</Wrapper.TopText>
      </Wrapper.Top>
      {cardData.map((value) => (
        <Wrapper.Bottom key={value.id}>
          <Wrapper.BottomImg src={value.img} />
          <Wrapper.BottomName>{value.name}</Wrapper.BottomName>
          <Wrapper.BottomDate>
            {value.date.toLocaleString("ru-Ru", {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </Wrapper.BottomDate>
          <Wrapper.DeleteImg
            src={delImg}
            onClick={() => dispatch(deleteCardData(value))}
          />
        </Wrapper.Bottom>
      ))}
    </Wrapper>
  );
};

export default MyProducts;
