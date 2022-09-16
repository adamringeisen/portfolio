import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/permanent-marker/400.css";
import "@fontsource/acme/400.css";
import "@fontsource/red-hat-display/400.css";

const Root = () => {
  return (
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
