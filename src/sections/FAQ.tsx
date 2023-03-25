import { Box, Container, Stack, Text } from "@chakra-ui/react";
import Accordion from "components/Accordion";
import Title from "components/Title";
import React from "react";
import pxToRem from "utils/pxToRem";

function FAQ() {
  return (
    <Box as="section">
      <Container>
        <Title mb={pxToRem(80)}>FAQ</Title>

        <Stack spacing={pxToRem(26)}>
          <Accordion question="man ye parandam arezo daram?">
            <Text opacity={0.48}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages,
            </Text>
          </Accordion>
          <Accordion question="man ye parandam arezo daram?">
            <Text opacity={0.48}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages,
            </Text>
          </Accordion>
          <Accordion question="man ye parandam arezo daram?">
            <Text opacity={0.48}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages,
            </Text>
          </Accordion>
          <Accordion question="man ye parandam arezo daram?">
            <Text opacity={0.48}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages,
            </Text>
          </Accordion>
        </Stack>
      </Container>
    </Box>
  );
}

export default FAQ;
