import { Box, Container } from "@chakra-ui/react";
import LineColumnsLayout from "layouts/LineColumnsLayout";
import React, { MutableRefObject, useEffect, useState } from "react";
import pxToRem from "utils/pxToRem";

function PageLines() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: -10,
        height: "100%",
      }}
    >
      <Container sx={{ height: "100%", display: "flex" }}>
        <LineColumnsLayout>
          <Box></Box>

          {new Array(100).fill("").map((_, i) => {
            const isActive = i == 0;

            return (
              <Box
                key={i}
                width={pxToRem(164)}
                height="100%"
                borderLeft={!isActive ? "none" : "2px"}
                borderRight={"2px"}
                borderColor="rgba(255,255,255,.08)"
                overflow="hidden"
                position="relative"
                background={
                  isActive
                    ? "linear-gradient(180.03deg, rgba(255, 163, 66, 0.24) -33.95%, rgba(255, 158, 55, 0) 15.21%), #16161A"
                    : "none"
                }
              >
                {isActive && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "auto",
                      translateX: "-50%",
                      width: "120%",
                      height: pxToRem(6),
                      bgGradient:
                        "linear-gradient(270deg, #C73D19 0%, #EBD079 51.77%, #93DAD7 96.97%)",
                    }}
                  ></Box>
                )}
              </Box>
            );
          })}
        </LineColumnsLayout>
      </Container>
    </Box>
  );
}

export default PageLines;
