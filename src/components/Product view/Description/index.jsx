import React, { useState } from "react";
import { Wrapper } from "./style";

const Description = () => {
  let [active, setActive] = useState("description");
  return (
    <Wrapper>
      <Wrapper.TextContainer>
        <Wrapper.Title
          onClick={() => setActive("description")}
          active={active === "description" ? true : false}
        >
          Product Description
        </Wrapper.Title>
        <Wrapper.Title
          onClick={() => setActive("review")}
          active={active === "review" ? true : false}
        >
          Review
        </Wrapper.Title>
      </Wrapper.TextContainer>
      {active === "description" ? (
        <>
          {" "}
          <Wrapper.Text1>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
          </Wrapper.Text1>
          <Wrapper.Text2>
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </Wrapper.Text2>
        </>
      ) : (
        <>
          {" "}
          <Wrapper.Text1>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Wrapper.Text1>
          <Wrapper.Text2>
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </Wrapper.Text2>
        </>
      )}
      <Wrapper.Bold>Living room:</Wrapper.Bold>
      <Wrapper.Text1>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Wrapper.Text1>
      <Wrapper.Bold>Dining room:</Wrapper.Bold>
      <Wrapper.Text1>
        The benefits of houseplants are endless. In addition to cleaning the air
        of harmful toxins, they can help to improve your mood, reduce stress and
        provide you with better sleep. Fill every room of your home with
        houseplants and their restorative qualities will improve your life.
      </Wrapper.Text1>
      <Wrapper.Bold>Office:</Wrapper.Bold>
      <Wrapper.Text1>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Wrapper.Text1>
    </Wrapper>
  );
};

export default Description;
