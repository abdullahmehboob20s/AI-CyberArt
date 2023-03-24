import {
  Box,
  Button,
  Container,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import NextLink from "next/link";
import pxToRem from "utils/pxToRem";
import Portal from "./Portal";
import PageLines from "./PageLines";
import BaseButton from "./BaseButton";
import LineColumnsLayout from "layouts/LineColumnsLayout";

interface NavLinkProps {
  title: string;
}

const NavLink = ({ title }: NavLinkProps) => {
  return (
    <Link
      href="/"
      as={NextLink}
      textAlign="center"
      fontSize="medium"
      fontWeight="600"
      _hover={{
        textDecoration: "none",
      }}
    >
      {title}
    </Link>
  );
};

function Navbar() {
  const beforeLinksBox = useRef<HTMLDivElement>(null);

  return (
    <>
      <Box
        as="nav"
        sx={{ height: pxToRem(100), display: "flex", alignItems: "center" }}
        bg="transparent"
        zIndex={1}
      >
        <Container>
          <LineColumnsLayout alignItems="center">
            <Stack direction="row" spacing={3} alignItems="center">
              <Image src="images/logo.svg" width={pxToRem(60)} />
              <Text fontWeight="bold" fontSize={pxToRem(20)}>
                CyberPart
              </Text>
            </Stack>

            <NavLink title="HOME" />
            <NavLink title="ROADMAP" />
            <NavLink title="WHITEPAPER" />
            <NavLink title="COMMUNITY" />

            <Stack gridColumnEnd="-1" direction="row" justifyContent="flex-end">
              <BaseButton buttonType="simple">Buy Now!</BaseButton>
            </Stack>
          </LineColumnsLayout>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
