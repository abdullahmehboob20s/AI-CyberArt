import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";
import { BsArrowRightShort } from "react-icons/bs";
import pxToEm from "utils/pxToEm";

interface QuestionProps {
  title: string;
  subtitle: string;
  desc: string;
}

const Question = ({ title, subtitle, desc }: QuestionProps) => {
  return (
    <Box maxW={pxToRem(254)}>
      <Heading fontFamily="organT800" mb={pxToRem(24)}>
        {title}
      </Heading>

      <Text fontFamily="organ700" mb={pxToRem(16)}>
        {subtitle}
      </Text>

      <Text
        textAlign="justify"
        fontFamily="organ400"
        fontSize={pxToRem(12)}
        opacity={0.56}
        lineHeight={1.8}
      >
        {desc}
      </Text>
    </Box>
  );
};

const RightArrow = () => {
  return (
    <Box
      fontSize="100%"
      minW={pxToEm(60)}
      height={pxToEm(60)}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Image src="images/gradient-circle.svg" width="100%" />

      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="auto"
        translateX="-50%"
        translateY="-50%"
        fontSize={pxToEm(34)}
      >
        <BsArrowRightShort />
      </Box>
    </Box>
  );
};

function HowToBuy() {
  return (
    <Box as="section">
      <Container>
        <Title>How to buy</Title>

        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={pxToRem(78)}
        >
          <Question
            title="01"
            subtitle="first you need to set up your wallet"
            desc="if you’re on desktop then we recommend Metamask, with Trust Wallet being the recommended wallet for mobile users."
          />
          <Stack justifyContent="center">
            <RightArrow />
          </Stack>
          <Question
            title="02"
            subtitle="you can buy $flooter using ETH on etherium chain"
            desc="Once you've connected your wallet, hit 'Buy with ETH' and specify how many $Floofer you would like to purchase. Tokens can be claimed after presale ends."
          />
          <Stack justifyContent="center">
            <RightArrow />
          </Stack>
          <Question
            title="03"
            subtitle="you can also buy $flooter using USDT on etherium chain"
            desc="Once you've connected your wallet, hit 'Buy with ETH' and specify how many $Floofer you would like to purchase. Tokens can be claimed after presale ends."
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default HowToBuy;
