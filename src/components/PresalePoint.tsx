import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import pxToRem from "utils/pxToRem";

interface Props {
  title: string;
  subtitle: string;
}

function PresalePoint({ title, subtitle }: Props) {
  return (
    <Box>
      <Heading
        fontFamily="organP800"
        fontSize={pxToRem(24)}
        mb={pxToRem(8)}
        fontWeight={1000}
      >
        <Box
          as="span"
          background="linear-gradient(270deg, #C73D19 56.31%, #EBD079 101.03%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent"
          fontFamily="organP800"
          fontSize="inherit"
          bgClip="text"
          color="transparent"
          mr={pxToRem(10)}
        >
          1
        </Box>
        {title}
      </Heading>

      <Text fontWeight={600} opacity={0.56} textTransform="uppercase">
        {subtitle}
      </Text>
    </Box>
  );
}

export default PresalePoint;
