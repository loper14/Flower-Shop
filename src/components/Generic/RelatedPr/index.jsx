import { CardContainer } from "./style";
import { relatedPrData } from "../../../mock/relatedPr";

const RelatedPrCard = () => {
  return (
    <CardContainer>
      {relatedPrData.map((value) => (
        <CardContainer.Card key={value.id}>
          <CardContainer.Img src={value.img} />
          <CardContainer.Title>{value.name}</CardContainer.Title>
          <CardContainer.Price>${value.price}</CardContainer.Price>
        </CardContainer.Card>
      ))}
    </CardContainer>
  );
};

export default RelatedPrCard;
