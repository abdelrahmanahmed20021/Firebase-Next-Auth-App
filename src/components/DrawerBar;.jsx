"use client";
import { useGState } from "@/app/Context/Context";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  useColorModeValue,
  Avatar,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdOutlineFilterList } from "react-icons/md";

export default function DrawerBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const DrBg = useColorModeValue("dark.900", "blue.700");
  const DrColor = useColorModeValue("light.900", "dark.900");
  const { user } = useGState();
  const btnRef = useRef();
  console.log(user);
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <MdOutlineFilterList size={"30px"} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={DrBg}>
          <DrawerCloseButton color={DrColor} />
          <DrawerHeader marginBottom={"40px"} color={DrColor}>
            Personal Details
          </DrawerHeader>

          <DrawerBody>
            <WrapItem
              color={"light.900"}
              display={"flex"}
              flexDirection={"column"}
              gap={"15px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar size="lg" name={user.displayName} src={user.photoURL} />
              <Text>Hi ~ {user.displayName}</Text>
            </WrapItem>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
