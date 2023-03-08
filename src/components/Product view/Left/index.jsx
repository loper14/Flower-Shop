import React, { useState } from "react";
import { Wrapper } from "./style";
import img1 from "../../../assets/imgs/flower1.png";
import img2 from "../../../assets/imgs/flower6.png";
import img3 from "../../../assets/imgs/flower9.png";

const Left = ({ img }) => {
  let indexImgs = [img, img1, img2, img3];
  let [activeIndex, setActiveIndex] = useState(0);
  return (
    <Wrapper>
      <Wrapper.RelatedImgs>
        {indexImgs.map((value, index) => (
          <Wrapper.RelatedImg
            key={index}
            active={index === activeIndex ? true : false}
            onClick={() => setActiveIndex(index)}
            src={value}
          />
        ))}
      </Wrapper.RelatedImgs>
      <Wrapper.ActiveImg src={indexImgs[activeIndex]} />
    </Wrapper>
  );
};

export default Left;
