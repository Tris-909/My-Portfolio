import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import RightNav from "./RightNav";
import { getWindowDimensions } from "../../utils/index";

const Navbar = () => {
  // --> Scroll up to show navbar START //
  const [currentScreenWidth, setCurrentScreenWidth] = useState(
    getWindowDimensions()
  );
  const [prevScrollPosition, setPrevScrollPosition] = useState(
    window.pageYOffset
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleResize() {
      setCurrentScreenWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.pageYOffset]);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    const Newvisibility = currentScrollPosition < prevScrollPosition;
    setPrevScrollPosition(currentScrollPosition);
    setVisible(Newvisibility);
  };
  // --> Scroll up to show navbar END //

  return (
    <Flex
      w="100%"
      h="10%"
      justifyContent={"center"}
      alignItems={"center"}
      position={"fixed"}
      left={0}
      right={0}
      top={visible ? 0 : "-10%"}
      transition={"top 0.6s"}
      zIndex={999}
    >
      <RightNav />
    </Flex>
  );
};

export default Navbar;
