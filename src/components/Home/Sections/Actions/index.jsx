import React, { useState } from "react";
import { Wrapper } from "./style";
import { data, sizes } from "../../../../mock/Categories";
import saleImg from "../../../../assets/imgs/sale.png";
import { useDispatch } from "react-redux";
import { setCategory, setMinMax } from "../../../../redux/slice";

const Actions = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(4050);
  let [active, setActive] = useState(data[0].name);
  let [active2, setActive2] = useState(sizes[0].name);
  let dispatch = useDispatch();
  const changedValue = (e) => {
    setMin(e[0]);
    setMax(e[1]);
  };

  return (
    <Wrapper>
      <Wrapper.Categories>
        <Wrapper.CategoriesTitle>Categories</Wrapper.CategoriesTitle>
        <Wrapper.Category>
          {data.map((value) => {
            return (
              <Wrapper.CategoryItem
                className={active === value.name ? "activeCategory" : ""}
                key={value.id}
                onClick={() => {
                  setActive(value.name);
                  dispatch(setCategory(value.name));
                }}
                active={active === value.name ? true : false}
              >
                <Wrapper.CategoryItemTitle className="category_name">
                  {value.name}
                </Wrapper.CategoryItemTitle>
                <Wrapper.CategoryItemCount>
                  ( {value.much})
                </Wrapper.CategoryItemCount>
              </Wrapper.CategoryItem>
            );
          })}
        </Wrapper.Category>
      </Wrapper.Categories>
      <Wrapper.Range>
        <Wrapper.RangeTitle>Price Range</Wrapper.RangeTitle>
        <Wrapper.Slider
          onChange={changedValue}
          max={4050}
          range
          color="#46A358"
          defaultValue={[0, 4050]}
          style={{ color: "#46A358", width: "209px", marginLeft: "25px" }}
        />
        <Wrapper.Prices>
          <Wrapper.PriceTitle>Price:</Wrapper.PriceTitle>
          <Wrapper.Price>
            ${min} - ${max}
          </Wrapper.Price>
        </Wrapper.Prices>
        <Wrapper.FilterBtn
          onClick={() => {
            dispatch(setMinMax({ min, max }));
          }}
        >
          Filter
        </Wrapper.FilterBtn>
      </Wrapper.Range>
      <Wrapper.Size>Size</Wrapper.Size>
      {sizes.map((value) => (
        <Wrapper.SizeItem
          className={active2 === value.name ? "activeCategory" : ""}
          key={value.id}
          onClick={() => setActive2(value.name)}
          active={active === value.name ? true : false}
        >
          <Wrapper.SizeTitle className="category_name">
            {value.name}
          </Wrapper.SizeTitle>
          <Wrapper.SizeCount>({value.count})</Wrapper.SizeCount>
        </Wrapper.SizeItem>
      ))}
      <Wrapper.SaleImg src={saleImg} />
    </Wrapper>
  );
};

export default Actions;
