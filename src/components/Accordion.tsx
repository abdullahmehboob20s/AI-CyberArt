import { Box, BoxProps, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import pxToRem from "utils/pxToRem";

interface Props extends BoxProps {
  question: string;
}

function Accordion({ question, children, ...props }: Props) {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
  const accordionMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAccordionOpen) {
      accordionMenuRef.current!.style.height =
        accordionMenuRef.current!.scrollHeight + "px";
    } else {
      accordionMenuRef.current!.style.height = "0";
    }
  }, [isAccordionOpen]);

  const toggleAccordion = () => setIsAccordionOpen((val) => !val);

  return (
    <Box
      bg="black.secondary"
      border="var(--border-width)"
      borderColor="var(--border-color)"
      __css={{
        "--plus-icon-size": "40%",
        "--py": pxToRem(22),
        "--px": pxToRem(28),
        "--border-width": "2px solid",
        "--border-color": "#3B3B3D",
        "--transition": "all .3s ease",
      }}
      {...props}
    >
      <Box
        as="button"
        h="auto"
        py={"var(--py)"}
        px={"var(--px)"}
        display="flex"
        color="white"
        width="100%"
        onClick={toggleAccordion}
      >
        <Box
          as="span"
          minW={pxToRem(36)}
          height={pxToRem(36)}
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr={pxToRem(26)}
          position="relative"
          bg={isAccordionOpen ? "activeOrange" : "#242427"}
          transition="var(--transition)"
        >
          <Box
            position="absolute"
            top="50%"
            translateY="-50%"
            width="var(--plus-icon-size)"
            left="50%"
            translateX="-50%"
            height="2px"
            bg="white"
            transform="auto"
          ></Box>
          <Box
            position="absolute"
            top="50%"
            translateY="-50%"
            left="50%"
            translateX="-50%"
            height="var(--plus-icon-size)"
            width="2px"
            bg="white"
            transform="auto"
            transition="var(--transition)"
            opacity={isAccordionOpen ? 0 : 1}
          ></Box>
        </Box>
        <Text fontWeight={700} fontSize={pxToRem(20)} textAlign="left">
          {question}
        </Text>
      </Box>

      <Box
        ref={accordionMenuRef}
        transition="var(--transition)"
        overflow="hidden"
        height={0}
      >
        <Box
          py="var(--py)"
          bg="black.secondary"
          px="var(--px)"
          borderTop="var(--border-width)"
          borderColor="var(--border-color)"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Accordion;
