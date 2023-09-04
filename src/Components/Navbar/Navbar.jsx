import React from "react";
import Resume from "./TriTran-2.5YoE-FullStack.pdf";
import NavItem from "./NavItem";
import { Flex, Link } from "@chakra-ui/react";

const RightNav = () => {
  return (
    <Flex flexGrow={1} alignContent={"center"} justifyContent={"center"}>
      <NavItem
        activeClass="active"
        text="Journey"
        link="Journey"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      />
      <NavItem
        activeClass="active"
        text="Projects"
        link="Projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      />

      <NavItem
        activeClass="active"
        text="About Me"
        link="Aboutme"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      />
      <NavItem
        activeClass="active"
        text="Blogs"
        link="Blogs"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      />
      <Link
        href={Resume}
        target="_blank"
        position={"relative"}
        ml="2rem"
        p={"1.25rem 0rem 0.75rem 0rem"}
        color="white"
        cursor="pointer"
        fontSize={"1.5rem"}
        fontFamily={"Nunito Sans"}
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textDecor={"none"}
        bgImage={"linear-gradient(white, white)"}
        bgSize={"0 2px, auto"}
        bgRepeat={"no-repeat"}
        bgPos={"center bottom"}
        transition={"all 0.2s ease-out"}
        _hover={{
          backgroundSize: "100% 2px, auto",
        }}
        sx={{
          "@media (max-width: 870px)": {
            p: "0.5rem",
            mr: 0,
            ml: "0.5rem",
            fontSize: "0.5rem",
            textAlign: "center",
          },
          "@media (min-width: 870px)": {
            fontSize: "1rem",
          },
          "@media (min-width: 1200px)": {
            fontSize: "1.5rem",
          },
          "@media (min-width: 1600px)": {
            fontSize: "2rem",
          },
        }}
      >
        Resume
      </Link>
    </Flex>
  );
};

export default RightNav;
