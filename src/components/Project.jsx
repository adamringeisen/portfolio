import React from "react";
import { Text, Box, Badge, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Project = (props) => {
  const project = props.project;
  const badgeUp = (badgeList, color) => {
    const badges = badgeList.map((item, idx) => {
      return (
        <Badge key={idx} borderRadius="full" px="2" colorScheme={color}>
          {item}
        </Badge>
      );
    });
    return badges;
  };
  return (
    <React.Fragment>
      <Box
        maxW="sm"
        borderWidth="0px"
        borderColor="blue.600"
        borderRadius="lg"
        overflow="hidden"
        p="4"
      >
        <Box>
          <Box maxW="sm">
            <Text fontSize="lg" fontWeight="bold">
              {project.title}
            </Text>
            <Box> {badgeUp(project.langs, "blue")}</Box>
            <Box> {badgeUp(project.frameworks, "green")}</Box>
            <Box p="3">
              <Text fontSize="md">{project.desc}</Text>
            </Box>
            <Link fontWeight="bold" href={project.link} isExternal>
              {project.link}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Project;
