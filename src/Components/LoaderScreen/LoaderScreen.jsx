import React from "react";
import { Flex } from "@chakra-ui/react";
import { ReactComponent as LoadingScreen } from "../../assets/Home_Loader/Eclipse-0.6s-201px.svg";

const LoaderScreen = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      position="relative"
      zIndex="5"
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"black"}
    >
      <LoadingScreen />
    </Flex>
  );
};

export default LoaderScreen;
