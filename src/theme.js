import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Permanent Marker, serif`,
    body: `Red Hat Display, sans-serif`,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    orange: {
      50: "#FDF0E7",
      100: "#FAD4BD",
      200: "#F6B993",
      300: "#F29D68",
      400: "#EF823E",
      500: "#EB6614",
      600: "#BC5210",
      700: "#8D3D0C",
      800: "#5E2908",
      900: "#2F1404",
    },
    yellow: {
      50: "#FFF7E5",
      100: "#FFE7B8",
      200: "#FFD88A",
      300: "#FFC95C",
      400: "#FFB92E",
      500: "#FFAA00",
      600: "#CC8800",
      700: "#996600",
      800: "#664400",
      900: "#332200",
    },
    green: {
      50: "#EDF7F2",
      100: "#CDE9DB",
      200: "#ADDCC4",
      300: "#8DCEAD",
      400: "#6DC096",
      500: "#4DB280",
      600: "#3E8E66",
      700: "#2E6B4D",
      800: "#1F4733",
      900: "#0F241A",
    },
    gray: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
    },
  },
});

export default theme;
