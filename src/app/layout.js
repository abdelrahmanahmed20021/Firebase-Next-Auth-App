"use client";
import { ToastContainer } from "react-toastify";
import { theme } from "./Utillis/them";
import "./globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Roboto } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  style: "normal",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ChakraProvider theme={theme}>
          <ColorModeScript colorModeManager={theme.config.initialColorMode} />
          {children}
          <ToastContainer />
        </ChakraProvider>
      </body>
    </html>
  );
}
