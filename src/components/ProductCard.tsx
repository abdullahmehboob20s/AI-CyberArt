import {
  AspectRatio,
  Box,
  BoxProps,
  Button,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";
import BaseButton from "./BaseButton";

interface Props extends BoxProps {
  title: string;
  bannerImg: string;
  desc: string;
}

function ProductCard({ title, desc, bannerImg }: Props) {
  return (
    <Box
      border="2px"
      borderColor="black.grey"
      py={pxToRem(40)}
      px={pxToRem(24)}
      bg="black.primary"
      display="flex"
      flexDirection="column"
    >
      <Box flex={1}>
        <Heading fontFamily="organ700" fontSize={pxToRem(20)}>
          {title}
        </Heading>

        <AspectRatio
          ratio={16 / 9}
          width="100%"
          mt={pxToRem(24)}
          mb={pxToRem(32)}
        >
          <Image src={bannerImg} width="100%" height="100%" objectFit="cover" />
        </AspectRatio>

        <Text
          fontSize={pxToRem(14)}
          mb={pxToRem(46)}
          textAlign="justify"
          fontFamily="organ300"
        >
          {desc}
        </Text>
      </Box>

      <BaseButton buttonType="simple" sx={{ width: "100%" }}>
        Details
      </BaseButton>
    </Box>
  );
}

export default ProductCard;
