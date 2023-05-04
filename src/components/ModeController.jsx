import React from "react";
import { RiMoonFill } from "react-icons/ri";
import { HiSun } from "react-icons/hi";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function ModeController() {
  const { colorMode, toggleColorMode } = useColorMode();
  const btnColor = useColorModeValue("light.900", "dark.900");
  const btnbg = useColorModeValue("dark.900", "light.900");

  return (
    <Button
      onClick={toggleColorMode}
      _hover={{ bg: "blue.900", color: "light.900" }}
      bg={btnbg}
      width={"100px"}
      boxShadow={"10px 10px 20px #feffff2d,-10px -10px 30px #feffff2d"}
    >
      <Box
        position={"relative"}
        width={"600px"}
        height={"100%"}
        overflow={"hidden"}
      >
        <Box
          position={"absolute"}
          top={"50%"}
          left={colorMode == "dark" ? "50%" : "-100%"}
          className={colorMode == "dark" ? "mode-animation-sun" : ""}
          transform={"translate(-50%,-50%)"}
          transition={"all ease .1s"}
          color={btnColor}
        >
          <HiSun />
        </Box>
        <Box
          position={"absolute"}
          top={"50%"}
          right={colorMode == "light" ? "50%" : "-100%"}
          className={colorMode == "light" ? "mode-animation-moon" : ""}
          transform={"translate(-50%,-50%)"}
          color={btnColor}
        >
          <RiMoonFill />
        </Box>
      </Box>
    </Button>
  );
}
