import { Box } from "@chakra-ui/react";

const InnerIcon = () => {
  return (
    <Box
      w="24px"
      h="24px"
      border="2px solid black"
      backgroundColor="black"
      position="absolute"
      bottom="1%"
      right="2%"
      borderRadius="30px"
    />
  );
};

export default InnerIcon;
