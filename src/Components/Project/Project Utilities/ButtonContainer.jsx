import React from "react";
import { Box } from "@chakra-ui/react";

const ButtonContainer = ({ children }) => {
  return (
    <Box display="flex" flexDirection="row" marginTop="1em">
      {children}
    </Box>
  );
};

export default ButtonContainer;
