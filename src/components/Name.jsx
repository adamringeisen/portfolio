import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
const Name = (props) => {
  return (
    <React.Fragment>
      <Box p="14">
        <Text fontSize={["xl", "2xl"]}>Hello, my name is</Text>
        <Heading
          textAlign={`right`}
          size={["2xl", "3xl", "4xl"]}
          color="orange"
        >
          {props.name}
        </Heading>
      </Box>
    </React.Fragment>
  );
};

export default Name;
