import { Heading, HeadingProps } from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";

interface Props extends HeadingProps {
  font_size?: 32 | 48;
}

function Title({ font_size = 48, ...props }: Props) {
  return (
    <Heading
      textAlign="center"
      fontFamily="organT800"
      fontSize={pxToRem(font_size)}
      mb={pxToRem(100)}
      {...props}
    />
  );
}

export default Title;
