import React from "react";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";

const Footer = () => {
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Box w="100%" bgColor="#30302e" fontFamily="Nunito Sans">
      <Flex
        w="80%"
        h="80%"
        margin="0% 10% 0% 10%"
        flexDir={"column"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text
          color="#f7faff"
          fontSize="36px"
          sx={{
            "@media (max-width: 800px)": {
              alignItems: "flex-start",
              fontSize: "20px",
            },
          }}
        >
          {"Tri Minh Tran built with love."}
        </Text>
        <Flex
          color="#f7faff"
          fontSize={isLargerThan800 ? "20px" : "25px"}
          display={"flex"}
          flexDir={"column"}
          alignItems={isLargerThan800 ? "flex-start" : "flex-end"}
          justifyContent={"center"}
        >
          <div>tranminhtri.work@gmail.com</div>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
