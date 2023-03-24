import { Box, Link, BoxProps, LinkProps } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
import { JsxElement } from "typescript";
import pxToRem from "utils/pxToRem";
import NextLink from "next/link";
import pxToEm from "utils/pxToEm";
import { BsTwitter } from "react-icons/bs";

interface LinkData {
  link: string;
  Icon: any;
}

interface SocialLinkProps extends LinkData, LinkProps {
  size: any;
}

const SocialLink = ({ link, Icon, size }: SocialLinkProps) => {
  return (
    <Link
      as={NextLink}
      href={link}
      target="_blank"
      sx={{
        display: "flex",
        height: `calc(${pxToRem(size)} - .4rem)`,
        alignItems: "center",
        justifyContent: "center",
        fontSize: pxToEm(22),
        transition: "all .2s ease",
        color: "black",
        span: {
          transition: "all .2s ease",
        },
        _hover: {
          color: "white",
          bg: "black",
        },
      }}
    >
      {Icon}
    </Link>
  );
};

interface Props extends BoxProps {
  socialLinks: LinkData[];
}

function HeroSocialLinks({ socialLinks, ...props }: Props) {
  const size: number = 50;

  return (
    <Box width={pxToRem(size)} bg="white" py={pxToRem(4)} {...props}>
      {socialLinks &&
        socialLinks.map((item, i) => (
          <SocialLink key={i} link={item.link} Icon={item.Icon} size={size} />
        ))}
    </Box>
  );
}

export default HeroSocialLinks;
