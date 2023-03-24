import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  Image,
  ImageProps,
} from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";

interface Props extends BoxProps {
  containerProps?: ContainerProps;
  imageProps?: ImageProps;
}

function StripeGradientLayout({
  children,
  containerProps,
  imageProps,
  ...props
}: Props) {
  return (
    <Box
      bg="linear-gradient(270deg, #C73D19 0%, #EBD079 51.77%, #93DAD7 96.97%)"
      py={pxToRem(60)}
      position="relative"
      zIndex={10}
      {...props}
    >
      <Container {...containerProps}>{children}</Container>

      <Image
        src="images/whitepaper-stripes.svg"
        height="100%"
        position="absolute"
        top={0}
        left={0}
        zIndex={-1}
        {...imageProps}
      />
    </Box>
  );
}

export default StripeGradientLayout;
