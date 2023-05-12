import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    900: "#4461F2",
    800: "#2D9CDB",
    700: "#12415B",
  },
  gray: {
    900: "#667085",
    800: "#14162E",
    700: "#ACADAC",
    600: "#C7C7C7",
    500: "#DDDFDD",
    400: "#DFDFDF",
  },
  dark: {
    900: "#14162E",
    800: "#4F555A",
  },
  light: {
    900: "#fff",
    800: "#EAF0F7",
    700: "#FFDED8",
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ colors, config });
