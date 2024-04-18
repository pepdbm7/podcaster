import React from "react";
import { Wraper } from "./Card.styles";

const Card = ({ data }: any) => {
  // console.log(data);
  return <Wraper>{data?.["im:name"].label}</Wraper>;
};

export default Card;
