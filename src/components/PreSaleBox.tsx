import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";
import BaseButton from "./BaseButton";
import { FaRegQuestionCircle } from "react-icons/fa";

function PreSaleBox() {
  return (
    <Box
      bg="black.primary"
      minWidth={pxToRem(371)}
      py={pxToRem(48)}
      px={pxToRem(40)}
      position="relative"
      zIndex={10}
      boxShadow="0px 24px 144px #000000"
      border="3px solid"
      borderColor="black.grey"
    >
      <Box mb={pxToRem(68)}>
        <Stack direction="row" justifyContent="space-between" mb={pxToRem(8)}>
          <Heading
            fontFamily="organ700"
            textTransform="uppercase"
            fontSize={pxToRem(20)}
          >
            1 flooter
          </Heading>
          <Heading
            fontFamily="organ700"
            textTransform="uppercase"
            fontSize={pxToRem(20)}
          >
            0.013 USDT
          </Heading>
        </Stack>
        <Text
          textAlign="center"
          fontSize={pxToRem(14)}
          opacity=".4"
          fontFamily="organ300"
        >
          USDT Raised $102,375.39 / $2,080,000
        </Text>
      </Box>

      <Box mb={pxToRem(-60)}>
        <Image src="images/presale-progress-bar.svg" width="100%" />

        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="auto"
          translateX="-50%"
          translateY="-10%"
          width="100%"
        >
          <Text
            textAlign="center"
            fontFamily="organ400"
            fontSize={pxToRem(12)}
            opacity={0.56}
            mb={1}
          >
            Tokens Remaining
          </Text>
          <Text textAlign="center" fontFamily="organ800" fontSize={pxToRem(22)}>
            152,124,970
          </Text>
        </Box>
      </Box>

      <BaseButton
        buttonType="simple"
        width="100%"
        sx={{
          bg: "white",
          color: "black",
          fontSize: pxToRem(18),
          mb: pxToEm(24),
        }}
      >
        Connect Wallet
      </BaseButton>

      <BaseButton
        buttonType="simple"
        width="100%"
        leftIcon={<FaRegQuestionCircle />}
        sx={{
          bg: "transparent",
          color: "white",
          height: "auto",
          fontSize: pxToRem(18),
          border: "none",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          _hover: {},
        }}
      >
        How To Buy
      </BaseButton>

      <Image
        src="images/pre-sale-blob.svg"
        className="100%"
        position="absolute"
        bottom={0}
        left={0}
        zIndex={-2}
      />

      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
        bg="rgba(0,0,0,.3)"
      />
    </Box>
  );
}

export default PreSaleBox;
