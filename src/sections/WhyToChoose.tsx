import { Box, Container, Grid, Image } from "@chakra-ui/react";
import Title from "components/Title";
import WhyToChooseCard from "components/WhyToChooseCard";
import React from "react";
import pxToRem from "utils/pxToRem";

function WhyToChoose() {
  return (
    <Box as="section" pt={pxToRem(40)} position="relative" zIndex={1}>
      <Container>
        <Title>
          why to choose <br />
          cyberart?
        </Title>

        <Grid
          gridTemplateColumns="1fr 1fr 1fr"
          justifyItems="center"
          rowGap={pxToRem(96)}
          columnGap={pxToRem(60)}
        >
          <WhyToChooseCard iconImg="images/whyToChoose/thunder.svg" />
          <WhyToChooseCard iconImg="images/whyToChoose/flag.svg" />
          <WhyToChooseCard iconImg="images/whyToChoose/globe.svg" />

          <WhyToChooseCard iconImg="images/whyToChoose/trophy.svg" />
          <WhyToChooseCard iconImg="images/whyToChoose/message.svg" />
          <WhyToChooseCard iconImg="images/whyToChoose/star.svg" />
        </Grid>
      </Container>

      <Image
        src="images/circle-blob.svg"
        alt="abc"
        sx={{ position: "absolute", top: 0, right: 0, zIndex: -1 }}
      />

      <Image
        src="images/circle-blob.svg"
        alt="abc"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          transform: "rotate(180deg)",
        }}
      />
    </Box>
  );
}

export default WhyToChoose;
