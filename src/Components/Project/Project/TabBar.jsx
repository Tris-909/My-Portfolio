import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

const Tab = ({ children, onClick }) => {
  return (
    <Box
      color="white"
      backgroundColor="#30302e"
      cursor="pointer"
      borderRadius={"15px"}
      padding="1rem"
      textAlign={"center"}
      fontSize="1.7rem"
      fontWeight={700}
      onClick={onClick}
      sx={{
        "@media (max-width: 1175px)": {
          display: "none",
        },
      }}
    >
      {children}
    </Box>
  );
};

const BorderBottom = ({ children, isActive }) => {
  return (
    <Box
      paddingBottom={"0.5rem"}
      borderBottom={isActive ? "3px solid #ff2e2e" : "none"}
      transition="border 0.1s"
    >
      {children}
    </Box>
  );
};

const TabBar = ({ toggleActiveDescription, descriptionActive }) => {
  return (
    <Box position="relative" width="100%" marginBottom="1rem">
      <SimpleGrid width="100%" columns={2}>
        <Tab
          category="description"
          onClick={() => toggleActiveDescription("description")}
        >
          <BorderBottom isActive={descriptionActive}>Description</BorderBottom>
        </Tab>
        <Tab
          category="tech-stacks"
          onClick={() => toggleActiveDescription("tech-stacks")}
        >
          <BorderBottom isActive={!descriptionActive}>Tech-Stacks</BorderBottom>
        </Tab>
      </SimpleGrid>
    </Box>
  );
};

export default TabBar;
