import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import pxToRem from "utils/pxToRem";
import BaseButton from "components/BaseButton";

const ProductMainCard = () => {
  return (
    <Stack
      border="2px solid"
      borderColor="black.grey"
      p={pxToRem(24)}
      bg="black.primary"
      direction="row"
      spacing={pxToRem(46)}
      alignItems="center"
    >
      <Box flex={0.46}>
        <Image width="100%" src="images/product-headphone.png" />
      </Box>

      <Box flex={1}>
        <Heading fontSize={pxToRem(30)} fontFamily="organP800">
          AI music Tool
        </Heading>

        <Text
          fontFamily="organ300"
          opacity={0.55}
          lineHeight={1.7}
          mb={pxToRem(42)}
          mt={pxToRem(24)}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum{" "}
        </Text>

        <BaseButton
          buttonType="right-arrow-button"
          sx={{ fontSize: pxToRem(18) }}
        >
          Details
        </BaseButton>
      </Box>
    </Stack>
  );
};

export default ProductMainCard;
