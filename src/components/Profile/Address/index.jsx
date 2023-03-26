import { Button, Input, Radio } from "antd";
import { useState } from "react";
import star from "../../../assets/icons/star.svg";
import { Wrapper } from "./style";
const Address = () => {
  let [checked, setChecked] = useState(false);
  return (
    <Wrapper.Form>
      <Wrapper.FormTitle>Billing Address</Wrapper.FormTitle>
      <Wrapper.FormTitle2>
        The following addresses will be used on the checkout page by default.
      </Wrapper.FormTitle2>
      <Wrapper.FormDiv>
        <Wrapper.Div>
          <Wrapper.FormLabel>
            First Name <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input style={{ width: "350px" }} />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            Last Name <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input style={{ width: "350px" }} />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            Country / Region <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input style={{ width: "350px" }} />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            Town / City <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input style={{ width: "350px" }} />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            Street Address <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input
            placeholder="House number and street name"
            style={{ width: "350px" }}
          />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input
            placeholder="Appartment, suite, unit, etc. (optional)"
            style={{ width: "350px" }}
          />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            State <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input style={{ width: "350px" }} />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            Zip <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input style={{ width: "350px" }} />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            Email address <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input style={{ width: "350px" }} />
        </Wrapper.Div>

        <Wrapper.Div>
          <Wrapper.FormLabel>
            Phone number <Wrapper.StarImg src={star} />
          </Wrapper.FormLabel>
          <Input style={{ width: "350px" }} />
        </Wrapper.Div>
      </Wrapper.FormDiv>
      <Button
        style={{
          backgroundColor: "#46A358",
          color: "white",
          marginTop: "25px",
        }}
      >
        Save Address
      </Button>
    </Wrapper.Form>
  );
};

export default Address;
