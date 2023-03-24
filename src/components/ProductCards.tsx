import { Grid, GridProps } from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";

interface Props extends GridProps {}

function ProductCards({ ...props }: Props) {
  return <Grid templateColumns="repeat(3,1fr)" gap={pxToRem(32)} {...props} />;
}

export default ProductCards;
