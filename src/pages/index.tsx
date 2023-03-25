import { Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import PageLines from "components/PageLines";
import Portal from "components/Portal";
import StripeDivider from "components/StripeDivider";
import Hero from "sections/Hero";
import Presale from "sections/Presale";
import Products from "sections/Products";
import Whitepaper from "sections/Whitepaper";
import React from "react";
import WhyToChoose from "sections/WhyToChoose";
import HowToBuy from "sections/HowToBuy";
import pxToRem from "utils/pxToRem";
import NeedMoreHelp from "components/NeedMoreHelp";
import FAQ from "sections/FAQ";

function Index() {
  return (
    <Box pb={"100px"}>
      <Portal>
        <PageLines />
      </Portal>

      <Navbar />
      <Hero />
      <StripeDivider />
      <Presale />
      <Whitepaper />
      <Products />

      <Box bg="black.primary">
        <Box mb={pxToRem(180)}>
          <WhyToChoose />
        </Box>
        <Box mb={pxToRem(180)}>
          <HowToBuy />
        </Box>
        <Box mb={pxToRem(180)}>
          <NeedMoreHelp />
        </Box>
        <Box mb={pxToRem(180)}>
          <FAQ />
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
