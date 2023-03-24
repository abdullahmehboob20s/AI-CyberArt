import { Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import PageLines from "components/PageLines";
import Portal from "components/Portal";
import StripeDivider from "components/StripeDivider";
import Hero from "sections/Hero";
import Presale from "sections/Presale";
import Products from "sections/Products";
import Whitepaper from "sections/Whitepaper";

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

      <Box bg="black.primary"></Box>
    </Box>
  );
}

export default Index;
