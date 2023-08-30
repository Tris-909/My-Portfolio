import React from "react";
import { Text, Box } from "@chakra-ui/react";

const ProjectCredential = ({ credentials }) => {
  return (
    <Box
      fontSize="1.5em"
      marginTop="1rem"
      backgroundColor="#fff"
      clipPath="polygon(88% 0%, 100% 50%, 88% 100%, 0% 100%, 0 51%, 0% 0%)"
      color="black"
      padding="10px"
      width="100%"
      sx={{
        "@media (max-width: 550px)": {
          display: "none",
        },
      }}
    >
      <Text as="span" fontWeight="700">
        Testing Account :
      </Text>
      <Text as="p" marginTop={3} marginBottom={0}>
        {credentials}
      </Text>
    </Box>
  );
};

export default ProjectCredential;
