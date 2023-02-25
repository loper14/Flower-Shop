import React from "react";
import Header from "../../Header";

const Carousel = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol
          className="carousel-indicators"
          style={{ display: "flex", gridGap: "4px", justifyContent: "center" }}
        >
          <li
            style={{ backgroundColor: "green", border: "none" }}
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li
            style={{ backgroundColor: "green", border: "none" }}
            data-target="#myCarousel"
            data-slide-to="1"
          ></li>
          <li
            style={{ backgroundColor: "green", border: "none" }}
            data-target="#myCarousel"
            data-slide-to="2"
          ></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <Header />
          </div>

          <div className="item">
            <Header />
          </div>

          <div className="item">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
