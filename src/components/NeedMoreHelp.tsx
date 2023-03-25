import { Box, Text } from "@chakra-ui/react";
import StripeGradientLayout from "layouts/StripeGradientLayout";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";
import Title from "./Title";

const PointLink = ({ title }: { title: string }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      m={pxToRem(16)}
      fontSize={pxToRem(18)}
    >
      <Box
        w={pxToRem(8)}
        height={pxToRem(8)}
        bg="black.primary"
        mr={pxToEm(6)}
      ></Box>

      <Text color="black.primary" fontWeight={700} fontSize="inherit">
        {title}
      </Text>
    </Box>
  );
};

function NeedMoreHelp() {
  return (
    <StripeGradientLayout py={pxToRem(50)}>
      <Title
        fontFamily="organP800"
        color="black"
        font_size={32}
        mb={pxToEm(18)}
      >
        NEED MORE HELP?
      </Title>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <PointLink title="How to Setup Trust Wallet" />
        <PointLink title="HOW TO INSTALL TRUST WALLET" />
        <PointLink title="HOW TO ADD $FLOOTER TO TRUST WALLET" />
        <PointLink title="TIPS FOR SAFE TRUST WALLET" />
      </Box>
    </StripeGradientLayout>
  );
}

export default NeedMoreHelp;
