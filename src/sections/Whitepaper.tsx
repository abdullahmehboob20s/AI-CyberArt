import { Box, Container, Heading, Image, Stack } from "@chakra-ui/react";
import BaseButton from "components/BaseButton";
import StripeGradientLayout from "layouts/StripeGradientLayout";
import React from "react";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

function Whitepaper() {
  return (
    <StripeGradientLayout>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Heading fontSize={pxToRem(30)} fontFamily="organP800" color="black">
          READ CYBERART WHITEPAPER
        </Heading>

        <BaseButton
          buttonType="simple"
          sx={{
            bg: "black",
            color: "white",
            fontSize: pxToRem(18),
            fontWeight: 700,
            border: "none",
            height: pxToEm(50),
            px: pxToEm(40),
          }}
        >
          Download
        </BaseButton>
      </Stack>
    </StripeGradientLayout>
  );
}

export default Whitepaper;
