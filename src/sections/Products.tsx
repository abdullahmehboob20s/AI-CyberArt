import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import BaseButton from "components/BaseButton";
import ProductCard from "components/ProductCard";
import ProductCards from "components/ProductCards";
import ProductMainCard from "components/ProductMainCard";
import LineColumnsLayout from "layouts/LineColumnsLayout";
import React from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import pxToEm from "utils/pxToEm";
import pxToRem from "utils/pxToRem";

const PaginationBullet = ({ isActive = false }: { isActive?: boolean }) => {
  return (
    <Box
      width={pxToRem(10)}
      height={pxToRem(10)}
      bg={isActive ? "white" : "#3D3D3D"}
    ></Box>
  );
};

function Products() {
  return (
    <Box as="section" mt={pxToRem(120)}>
      <Box mb={pxToRem(90)}>
        <Container>
          <LineColumnsLayout>
            <Stack
              gridColumn="1/2"
              direction="row"
              alignItems="center"
              spacing={pxToRem(20)}
            >
              <PaginationBullet isActive={true} />
              <PaginationBullet />
              <PaginationBullet />
              <PaginationBullet />
            </Stack>

            <Stack
              gridColumn="2/-1"
              pl={pxToRem(60)}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading fontFamily="organT800" fontSize={pxToRem(48)}>
                Products
              </Heading>

              <Stack direction="row" spacing={pxToRem(20)}>
                <BaseButton
                  buttonType="simple"
                  sx={{
                    fontSize: pxToRem(26),
                    px: 0,
                    height: pxToEm(30),
                    width: pxToEm(44),
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <HiArrowNarrowLeft />
                </BaseButton>
                <BaseButton
                  buttonType="simple"
                  sx={{
                    fontSize: pxToRem(26),
                    px: 0,
                    height: pxToEm(30),
                    width: pxToEm(44),
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <HiArrowNarrowRight />
                </BaseButton>
              </Stack>
            </Stack>
          </LineColumnsLayout>
        </Container>
      </Box>

      <Container pb={pxToRem(120)} bg="black.primary">
        <Stack spacing={pxToRem(48)}>
          <ProductMainCard />

          <ProductCards>
            <ProductCard
              title="AI nft graphic tool"
              bannerImg="images/products/1.png"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
            />
            <ProductCard
              title="AI customer support"
              bannerImg="images/products/2.png"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
            />
            <ProductCard
              title="AI virtual friend"
              bannerImg="images/products/3.png"
              desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
            />
          </ProductCards>
        </Stack>
      </Container>
    </Box>
  );
}

export default Products;
