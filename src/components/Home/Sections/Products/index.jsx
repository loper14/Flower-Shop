import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { DownOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Pagination, Select, Space } from "antd";
import "../style.css";
import { data } from "../../../../mock/Categories/data";
import { useSelector, useDispatch } from "react-redux";
import setImg from "../../../../assets/icons/set.svg";
import {
  sortDataBySale,
  sortDataByNews,
  sortDataByAll,
  mostExpensive,
  theCheapest,
  defaultSorting,
  setProductData,
  addCardData,
} from "../../../../redux/slice";
import { useNavigate } from "react-router-dom";
import { setWishlist } from "../../../../redux/wishlist";
import { Actions2 } from "../Actions";

const Products = () => {
  let { Option } = Select;
  let { mapData, category, count, cardData } = useSelector(
    (state) => state.data
  );
  let { wishlist } = useSelector((state) => state.wishlist);
  let [showCard, setShowCard] = useState([0, 8]);

  let [page, setPage] = useState();
  let dispatch = useDispatch();

  useEffect(() => {
    switch (page) {
      case "1":
        return setShowCard([0, 8]);
      case "2":
        return setShowCard([9, 17]);
      case "3":
        return setShowCard([18, 26]);
      default:
        return;
    }
  }, [page]);
  let addToCard = (item) => {
    let res = cardData.some((value) => value.id === item.id);
    if (!res) dispatch(addCardData({ ...item, quantity: count }));
  };
  let addToWish = (item) => {
    let res = wishlist.some((value) => value.id === item.id);
    if (!res) dispatch(setWishlist(item));
  };

  let [active, setActive] = useState("all");
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <Wrapper.ProductSort2>
          <Wrapper.ProductSortTitle>Sort by:</Wrapper.ProductSortTitle>

          <Select
            style={{ width: "200px", border: "none", marginBottom: "40px" }}
            defaultValue={"default"}
            onChange={(e) => {
              e === "cheapest"
                ? dispatch(theCheapest())
                : e === "most-expensive"
                ? dispatch(mostExpensive())
                : dispatch(defaultSorting());
            }}
          >
            <Option value="default">Default</Option>
            <Option value="cheapest">Cheapest</Option>
            <Option value="most-expensive">Most expensive</Option>
          </Select>
        </Wrapper.ProductSort2>
        <Actions2 />
      </Drawer>

      <Wrapper.ProductSections>
        <Wrapper.ProductSection>
          <Wrapper.ProductSectionTitle
            className={active === "all" ? "activePr" : ""}
            onClick={() => {
              setActive("all");
              dispatch(sortDataByAll());
            }}
          >
            All Plants
          </Wrapper.ProductSectionTitle>
          <Wrapper.ProductSectionTitle
            className={active === "new" ? "activePr" : ""}
            onClick={() => {
              setActive("new");
              dispatch(sortDataByNews());
            }}
          >
            New Arrival
          </Wrapper.ProductSectionTitle>
          <Wrapper.ProductSectionTitle
            className={active === "sale" ? "activePr" : ""}
            onClick={() => {
              setActive("sale");
              dispatch(sortDataBySale());
            }}
          >
            Sale
          </Wrapper.ProductSectionTitle>
        </Wrapper.ProductSection>
        <Wrapper.ProductSort>
          <Wrapper.ProductSortTitle>Sort by:</Wrapper.ProductSortTitle>

          <Select
            style={{ width: "200px", border: "none" }}
            defaultValue={"default"}
            onChange={(e) => {
              e === "cheapest"
                ? dispatch(theCheapest())
                : e === "most-expensive"
                ? dispatch(mostExpensive())
                : dispatch(defaultSorting());
            }}
          >
            <Option value="default">Default</Option>
            <Option value="cheapest">Cheapest</Option>
            <Option value="most-expensive">Most expensive</Option>
          </Select>
        </Wrapper.ProductSort>
        <Wrapper.SetImg onClick={showDrawer} src={setImg} />
      </Wrapper.ProductSections>
      <Wrapper.CardContainer>
        {mapData[category]?.map(
          (value, index) =>
            index >= showCard[0] &&
            index <= showCard[1] && (
              <Wrapper.ProductCard key={value.id}>
                <Wrapper.Sale>{value.sale}</Wrapper.Sale>
                <Wrapper.CardImg src={value.img} />
                <Wrapper.CardHoverItems className="hoverItem">
                  <Wrapper.HoverItem1 onClick={() => addToCard(value)} />
                  <Wrapper.HoverItem2 onClick={() => addToWish(value)} />
                  <Wrapper.HoverItem3
                    onClick={() => {
                      dispatch(setProductData(value));
                      navigate("/product_view");
                    }}
                  />
                </Wrapper.CardHoverItems>
                <Wrapper.Space>
                  <Wrapper.ProductName>{value.name}</Wrapper.ProductName>
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
            )
        )}
      </Wrapper.CardContainer>

      <Pagination
        onChange={(e) => setPage(e.toFixed())}
        defaultCurrent={1}
        total={30}
        className="paginatio"
      />
    </Wrapper>
  );
};

export default Products;
