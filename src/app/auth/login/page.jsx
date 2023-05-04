"use client";

import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Humen from "/public/images/Humen.png";
import Rectangle from "/public/images/Rectangle.png";
import pattern from "/public/images/pattern.png";

import Link from "next/link";
import LForm from "@/components/LForm";
import ModeController from "@/components/ModeController";

export default function page() {
  const textColor = useColorModeValue("dark.900", "light.900");
  return (
    <Box
      backgroundImage={pattern.src}
      minHeight={"100vh"}
      backgroundSize={"cover"}
      backgroundPosition={"bottom center"}
      position="relative"
      zIndex={"1"}
      backgroundRepeat={"no-repeat"}
      _after={{
        content: `""`,
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "-1",
        width: "100%",
        height: "100%",
        backgroundImage: `${Rectangle.src}`,
        backgroundSize: { base: "0px", md: "contain", lg: "cover" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: {
          base: "bottom right",
          md: "bottom left",
          lg: "top left",
        },
      }}
    >
      <Flex flexDirection={"column"} gap={"20px"}>
        <Flex
          position={"relative"}
          justifyContent={"space-between"}
          padding={{ base: "20px 40px", md: "100px 30px", lg: "100px 60px" }}
          paddingBottom={"0"}
        >
          <Flex flexDirection={"column"} gap={{ base: "30px", md: "80px" }}>
            <Heading
              color={textColor}
              fontSize={{ base: "2rem", md: "2.3rem", lg: "3.3rem" }}
              lineHeight={{ base: "52px", md: "72px" }}
            >
              Log In to <br />
              Recharge Direct
            </Heading>
            <Text
              fontSize={{ base: ".8rem", md: "1rem", lg: "1.2rem" }}
              color={textColor}
              fontWeight={"500"}
              lineHeight={"32px"}
            >
              if you don’t have an account <br /> you can{" "}
              <Text as={"span"} color={"blue.900"} fontWeight={"700"}>
                <Link href={"#"}>Register here!</Link>
              </Text>
            </Text>
          </Flex>
          <Stack
            display={{ base: "none", md: "block" }}
            position={"absolute"}
            right={"30px"}
            className="humen-animation"
            _after={{
              content: `""`,
              position: "absolute",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              bottom: "-120px",
              left: "0",
            }}
            _before={{
              content: `""`,
              position: "absolute",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              bottom: "-120px",
              left: "150px",
            }}
          >
            <Image
              src={Humen.src}
              width={Humen.width / 1.3}
              height={Humen.height / 1.3}
              alt="Human"
            />
          </Stack>
        </Flex>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          position={{ base: "static", md: "absolute" }}
          top={{ md: "70%", lg: "50%" }}
          left={"50%"}
          transform={{ md: "translate(-50%,-70%)", lg: "translate(-50%,-50%)" }}
        >
          <LForm />
        </Flex>
        <Box
          position={"fixed"}
          bottom={{ base: "93%", md: "30px" }}
          right={"30px"}
          zIndex={"100"}
        >
          <ModeController />
        </Box>
      </Flex>
    </Box>
  );
}
