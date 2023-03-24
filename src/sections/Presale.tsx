import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import BaseButton from "components/BaseButton";
import PreSaleBox from "components/PreSaleBox";
import PresalePoint from "components/PresalePoint";
import LineColumnsLayout from "layouts/LineColumnsLayout";
import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

function Presale() {
  return (
    <Box>
      <Container pt={pxToRem(100)} pb={pxToRem(120)}>
        <LineColumnsLayout alignItems="center">
          <Stack spacing={pxToRem(56)} gridColumn="1/2">
            <PresalePoint title="1B" subtitle="token supple" />
            <PresalePoint title="300M" subtitle="available pre-sale" />
            <PresalePoint title="ERC20" subtitle="token type" />
          </Stack>
          <Box gridColumn="2/-1" pl={pxToRem(60)}>
            <Stack direction="row" alignItems="center" spacing={pxToRem(72)}>
              <PreSaleBox />

              <Box>
                <Heading
                  fontSize={{ sm: pxToRem(42), "2xl": pxToRem(48) }}
                  fontFamily="organT800"
                  mb={pxToRem(32)}
                  fontWeight={1000}
                >
                  cyberpart <br />
                  presale stage
                </Heading>

                <Text
                  fontSize={{ sm: pxToRem(20), "2xl": pxToRem(24) }}
                  mb={pxToRem(42)}
                >
                  Be among the first to own Floofer tokens and get access to
                  exclusive perks and discounts.
                </Text>

                <BaseButton
                  buttonType="half-border"
                  rightIcon={
                    <HiOutlineArrowSmRight
                      className="_icon"
                      fontSize={pxToEm(23)}
                    />
                  }
                  sx={{
                    height: pxToEm(50),
                    fontSize: pxToRem(18),
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Learn More
                </BaseButton>
              </Box>
            </Stack>
          </Box>
        </LineColumnsLayout>
      </Container>
    </Box>
  );
}

export default Presale;
