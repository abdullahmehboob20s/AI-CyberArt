import { ComponentStyleConfig } from "@chakra-ui/react";

const Container: ComponentStyleConfig = {
  baseStyle: {
    width: "90%",
    margin: "0 auto",
    p: 0,
  },
  variants: {
    "1440px": {
      maxWidth: "1440px",
    },
    "1280px": {
      maxWidth: "1280px",
    },
    "960px": {
      maxWidth: "960px",
    },
  },
  defaultProps: {
    variant: "1440px",
  },
};

export default Container;
