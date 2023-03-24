import { Grid, GridProps } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props extends GridProps {}

const LineColumnsLayout: FC<Props> = ({ ...props }) => {
  return (
    <Grid
      templateColumns="226px repeat(auto-fill, minmax(164px,164px))"
      gridTemplateRows="1fr"
      minWidth="100%"
      gap={0}
      {...props}
    ></Grid>
  );
};

export default LineColumnsLayout;
