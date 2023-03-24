import { Button, PropsOf, ButtonProps, Box } from "@chakra-ui/react";
import React, { FC, ReactElement } from "react";
import pxToEm from "utils/pxToEm";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import pxToRem from "utils/pxToRem";

interface ButtonType {
  buttonType: "simple" | "arrow-button" | "half-border" | "right-arrow-button";
}
interface BaseButtonProps extends ButtonProps, ButtonType {}
interface ButtonProp extends ButtonProps {}
interface IconsButtonProps extends ButtonProps {}

const SimpleButton: FC<ButtonProp> = ({ sx, ...props }) => {
  return (
    <Button
      {...props}
      variant="unstyled"
      sx={{
        height: pxToEm(40),
        display: "block",
        px: pxToEm(20),
        bg: "transparent",
        border: "2px solid white",
        borderRadius: 0,
        fontSize: pxToRem(16),
        transition: "all .2s ease",
        lineHeight: 1,
        fontWeight: 700,
        m: 0,
        _hover: {
          bg: "white",
          color: "black",
        },
        ...sx,
      }}
    />
  );
};

const HalfBorder: FC<ButtonProp> = ({ sx, ...props }) => {
  return (
    <Button
      {...props}
      variant="unstyled"
      sx={{
        height: pxToEm(40),
        display: "block",
        px: pxToEm(20),
        bg: "transparent",
        border: "2px solid white",
        borderRadius: 0,
        fontSize: pxToRem(16),
        transition: "all .2s ease",
        lineHeight: 1,
        fontWeight: 700,
        m: 0,
        _hover: {
          bg: "white",
          color: "black",
        },
        ...sx,
      }}
    />
  );
};

const RightArrowButton: FC<ButtonProp> = ({ sx, children, ...props }) => {
  return (
    <Button
      variant="unstyled"
      sx={{
        height: pxToEm(50),
        px: 0,
        display: "flex",
        alignItems: "center",
        fontSize: pxToRem(18),
        bg: "transparent",
        border: "2px solid white",
        borderRadius: 0,
        transition: "all .2s ease",
        lineHeight: 1,
        fontWeight: 700,
        m: 0,
        "& ._icon": {
          transition: "all .2s ease",
        },
        _hover: {
          bg: "white",
          color: "black",
          borderColor: "black",
          "& ._icon": {
            bg: "white",
            borderLeftColor: "black",
            color: "black",
          },
        },
        ...sx,
      }}
      {...props}
    >
      <Box
        as="span"
        px={pxToEm(20)}
        fontSize="inherit"
        color="inherit"
        flex={1}
      >
        {children}
      </Box>

      <Box
        as="span"
        className="_icon"
        sx={{
          display: "flex",
          height: "100%",
          minWidth: `calc(${pxToEm(50)} - 2px)`,
          alignItems: "center",
          justifyContent: "center",
          bg: "black.grayish",
          color: "white",
          borderLeft: "2px solid",
          borderLeftColor: "transparent",
        }}
      >
        <Box fontSize={pxToEm(24)}>
          <HiOutlineArrowSmRight />
        </Box>
      </Box>
    </Button>
  );
};

const OnlyRightArrowButton: FC<ButtonProp> = ({ sx, ...props }) => {
  return (
    <SimpleButton
      {...props}
      rightIcon={<HiOutlineArrowSmRight fontSize={pxToEm(23)} />}
      sx={{
        display: "flex",
        alignItems: "center",
        ...sx,
      }}
    />
  );
};

const BaseButton: FC<BaseButtonProps> = ({ buttonType, sx, ...props }) => {
  if (buttonType === "half-border") {
    return <HalfBorder sx={sx} {...props} />;
  }

  if (buttonType === "right-arrow-button") {
    return <OnlyRightArrowButton sx={sx} {...props} />;
  }

  if (buttonType === "simple") {
    return <SimpleButton sx={sx} {...props} />;
  }

  if (buttonType === "arrow-button") {
    return <RightArrowButton sx={sx} {...props} />;
  }

  return <>abc</>;
};

export default BaseButton;
