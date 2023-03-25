import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";

interface Props {
  iconImg: string;
}

function WhyToChooseCard({ iconImg }: Props) {
  return (
    <Box
      _hover={{
        ".whyToChoose-img": {
          bg: "#C73D19",
        },
      }}
      maxWidth={pxToRem(232)}
    >
      <Box
        className="whyToChoose-img"
        width={pxToRem(80)}
        height={pxToRem(80)}
        bg="black.grayish2"
        mb={pxToRem(32)}
        mx="auto"
        borderRadius="50%"
        transition="all .2s ease"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={iconImg} alt="icon-img" width="50%" />
      </Box>

      <Heading
        textAlign="center"
        fontFamily="organT800"
        fontSize={pxToRem(20)}
        mb={pxToRem(16)}
      >
        lorem ipsum
      </Heading>

      <Text textAlign="center" fontWeight={pxToRem(16)} opacity={0.48}>
        $BATS is a utility token that will be used in fantasy sports and other
        games being developed by Battle Infinity.
      </Text>
    </Box>
  );
}

export default WhyToChooseCard;
