import React from "react";
import { Flex } from "@chakra-ui/react";

const ProjectWrapper = (props) => {
  return (
    <Flex wrap="wrap" justifyContent="center" gap="20px 25px">
      {props.children}
    </Flex>
  );
};

export default ProjectWrapper;
