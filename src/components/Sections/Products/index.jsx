import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Pagination, Space } from "antd";
import "../style.css";
import { data } from "../../../mock/Categories/data";

const Products = () => {
  let [mapData, setMapData] = useState(data);
  let [showCard, setShowCard] = useState([0, 8]);
  let [page, setPage] = useState();

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
  const items = [
    {
      label: (
        <Wrapper.DropDownItem href="https://www.antgroup.com">
          1st menu item
        </Wrapper.DropDownItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.DropDownItem href="https://www.aliyun.com">
          2nd menu item
        </Wrapper.DropDownItem>
      ),
      key: "1",
    },

    {
      label: <Wrapper.DropDownItem>3rd menu item</Wrapper.DropDownItem>,
      key: "3",
    },
  ];
  let [active, setActive] = useState("all");
  return (
    <Wrapper>
      <Wrapper.ProductSections>
        <Wrapper.ProductSection>
          <Wrapper.ProductSectionTitle
            className={active === "all" ? "activePr" : ""}
            onClick={() => setActive("all")}
          >
            All Plants
          </Wrapper.ProductSectionTitle>
          <Wrapper.ProductSectionTitle
            className={active === "new" ? "activePr" : ""}
            onClick={() => setActive("new")}
          >
            New Arrival
          </Wrapper.ProductSectionTitle>
          <Wrapper.ProductSectionTitle
            className={active === "sale" ? "activePr" : ""}
            onClick={() => setActive("sale")}
          >
            Sale
          </Wrapper.ProductSectionTitle>
        </Wrapper.ProductSection>
        <Wrapper.ProductSort>
          <Wrapper.ProductSortTitle>Sort by:</Wrapper.ProductSortTitle>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <Wrapper.DropDown onClick={(e) => e.preventDefault()}>
              <Space>
                Default sorting
                <DownOutlined />
              </Space>
            </Wrapper.DropDown>
          </Dropdown>
        </Wrapper.ProductSort>
      </Wrapper.ProductSections>
      <Wrapper.CardContainer>
        {mapData["House Plants"].map(
          (value, index) =>
            index >= showCard[0] &&
            index <= showCard[1] && (
              <Wrapper.ProductCard key={value.id}>
                <Wrapper.Sale>{value.sale}</Wrapper.Sale>
                <Wrapper.CardImg src={value.img} />
                <Wrapper.CardHoverItems className="hoverItem">
                  <Wrapper.HoverItem1 />
                  <Wrapper.HoverItem2 />
                  <Wrapper.HoverItem3 />
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
        style={{ float: "right", marginRight: "20px" }}
      />
    </Wrapper>
  );
};

export default Products;
