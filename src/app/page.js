"use client";
import { Flex, Heading } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../FB";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import LPage from "./auth/login/page";
import { useGState } from "./Context/Context";
import DrawerBar from "@/components/DrawerBar;";
import ModeController from "@/components/ModeController";

export default function Home() {
  const { user, setUser } = useGState();
  useEffect(() => {
    const auth = getAuth(app);
    const checkUserState = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
    return () => {
      checkUserState();
    };
  }, []);

  if (user == "") {
    return <Heading>Loading....</Heading>;
  }
  if (user == null) {
    return <LPage />;
  }

  return (
    <Flex padding={"30px"} justifyContent={"space-between"}>
      <DrawerBar />
      <ModeController />
    </Flex>
  );
}
