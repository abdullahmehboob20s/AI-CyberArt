import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
import BaseButton from "components/BaseButton";
import React from "react";
import pxToRem from "utils/pxToRem";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import pxToEm from "utils/pxToEm";
import LineColumnsLayout from "layouts/LineColumnsLayout";
import HeroSocialLinks from "components/HeroSocialLinks";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Hero() {
  return (
    <Box>
      <Container
        pt={pxToRem(40)}
        pb={pxToRem(80)}
        zIndex={1}
        position="relative"
      >
        <LineColumnsLayout zIndex={10}>
          <Stack alignItems="center" gridColumn="1/2">
            <Image src="images/hero-cicle-badge.svg" width={pxToRem(130)} />
          </Stack>
          <Box gridColumn="2/-1" pl={pxToRem(60)}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Heading
                fontFamily="organT800"
                fontWeight={900}
                fontSize={{ lg: pxToRem(58), "2xl": pxToRem(68) }}
                lineHeight={1.1}
                mb={pxToRem(60)}
              >
                cyberpart, <br />
                Revolution <br />
                in way of art
              </Heading>

              <HeroSocialLinks
                socialLinks={[
                  {
                    link: "/",
                    Icon: <FaTelegramPlane />,
                  },
                  {
                    link: "/",
                    Icon: <FaTwitter />,
                  },
                  {
                    link: "/",
                    Icon: <RiInstagramFill />,
                  },
                ]}
              />
            </Stack>

            <Stack direction="row" alignItems="center" spacing={pxToRem(48)}>
              <BaseButton buttonType="arrow-button">Join Community</BaseButton>
              <BaseButton
                buttonType="simple"
                sx={{
                  fontSize: pxToRem(18),
                  height: "auto",
                  p: 0,
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  _hover: {
                    bg: "transparent",
                  },
                }}
                leftIcon={
                  <Image
                    src="images/coins.svg"
                    width={pxToEm(18)}
                    mr={pxToEm(4)}
                  />
                }
                rightIcon={<HiOutlineArrowSmRight fontSize={pxToEm(24)} />}
              >
                <Box as="span" fontSize="inherit" px={pxToEm(6)}>
                  join $art
                </Box>
              </BaseButton>
            </Stack>
            <Stack alignItems="flex-end" width="50%">
              <Image src="images/pointing-arrow.svg" />
            </Stack>

            <Image src="images/sound-lines.svg" width="50%" mt={pxToRem(30)} />
          </Box>
        </LineColumnsLayout>

        <Image
          src="images/ai-girl.svg"
          position="absolute"
          bottom="0"
          right="0%"
          height="70%"
        />
      </Container>
    </Box>
  );
}

export default Hero;
