import React, { useState } from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  Input,
  InputGroup,
  InputLeftElement,
  FormControl,
  Button,
  InputRightElement,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { message } from "@/app/Utillis/validations";
import { LoginGoogle } from "../../FB";

export default function LForm() {
  const [type, setType] = useState("password");
  const regexEmailPattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  const regexPasswordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const LoginFun = (e) => {
    e.preventDefault();
    // message("warning", "Hello world", "top-left", 3000, "dark");
    if (e.target[0].value == "" || !regexEmailPattern.test(e.target[0].value)) {
      message(
        "warning",
        "Please Enter Valid Email example@ex.com",
        "top-left",
        3000,
        "dark"
      );
    } else if (
      e.target[2].value == "" ||
      !regexPasswordPattern.test(e.target[2].value)
    ) {
      message(
        "warning",
        `Please Enter Valid Password`,
        "top-left",
        3000,
        "dark"
      );
    }
  };

  return (
    <FormControl
      gap={"30px"}
      display="flex"
      flexDir={"column"}
      as={"form"}
      padding={{ base: "30px", md: "0" }}
      width={{ base: "100%", md: "auto" }}
      onSubmit={LoginFun}
    >
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={
            <Text
              display={"flex"}
              paddingTop={"6px"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"gray.900"}
              height={"100%"}
            >
              <HiOutlineMailOpen size={"21px"} />
            </Text>
          }
        />
        <Input
          width={{ base: "100%", md: "400px" }}
          _hover={{ bg: "gray.600" }}
          size={"lg"}
          bg={"light.800"}
          variant={"filled"}
          type="email"
          _focus={{
            bg: "dark.900",
            color: "light.900",
            borderColor: "gray.900",
          }}
          color={"gray.900"}
          _placeholder={{ color: "gray.900" }}
          placeholder="Enter Email"
        />
      </InputGroup>
      <InputGroup>
        <InputRightElement
          children={
            <Button
              marginTop={"6px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              color={"gray.900"}
              variant={"unstyled"}
              onClick={() =>
                type == "text" ? setType("password") : setType("text")
              }
            >
              <AiFillEyeInvisible size={"21px"} />
            </Button>
          }
        />
        <Input
          width={{ base: "100%", md: "400px" }}
          _hover={{ bg: "gray.600" }}
          size={"lg"}
          bg={"light.800"}
          display={"flex"}
          alignItems={"center"}
          variant={"filled"}
          type={type}
          _focus={{
            bg: "dark.900",
            color: "light.900",
            borderColor: "gray.900",
          }}
          color={"gray.900"}
          _placeholder={{ color: "gray.900" }}
          placeholder="Enter Password"
        />
      </InputGroup>
      <Text color={"gray.400"} textAlign={"end"}>
        <Link href={"#"}>Forget Password ?</Link>
      </Text>
      <Flex direction={"column"} gap={"60px"}>
        <Button
          bg={"blue.900"}
          color={"light.900"}
          fontWeight={"bold"}
          boxShadow={"10px 10px 30px #4ebaf82f,-10px -10px 30px #65c6ff36"}
          size={"lg"}
          _hover={{ bg: "blue.800" }}
          type="submit"
        >
          Login
        </Button>
        <Stack
          height={"1px"}
          position={"relative"}
          zIndex={"1"}
          _after={{
            content: `"Or continue with"`,
            position: "absolute",
            fontSize: "12px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            color: "gray.400",
            backgroundColor: "blue.800",
            padding: "5px 10px",
            borderRadius: "5px",
            zIndex: "2",
          }}
          bg={"gray.400"}
        ></Stack>
        <Button
          rightIcon={<FcGoogle />}
          bg={"blue.800"}
          color={"gray.400"}
          fontWeight={"bold"}
          size={"lg"}
          _hover={{ bg: "blue.900" }}
          boxShadow={"10px 10px 30px #4ebaf82f,-10px -10px 30px #65c6ff36"}
          onClick={LoginGoogle}
        >
          Google
        </Button>
      </Flex>
    </FormControl>
  );
}
