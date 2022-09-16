import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import ThemeSwitcher from "./ThemeSwitcher";
const Top = () => {
  return (
    <React.Fragment>
      <Flex p="4">
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <ThemeSwitcher />
      </Flex>
    </React.Fragment>
  );
};

export default Top;
