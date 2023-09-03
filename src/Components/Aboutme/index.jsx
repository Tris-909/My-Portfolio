import React from "react";
import { Box, Link } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";

const TextContainer = ({ children }) => {
  return (
    <Box
      fontFamily={"Open Sans Condensed"}
      fontSize={"35px"}
      fontWeight={600}
      marginBottom="30px"
      sx={{
        "@media (max-width: 1300px)": {
          fontSize: "28px",
        },
        "@media (max-width: 650px)": {
          fontSize: "24px",
        },
        "@media (max-width: 450px)": {
          fontSize: "20px",
        },
      }}
    >
      {children}
    </Box>
  );
};

const AboutMeTab = () => {
  return (
    <Box
      w="90%"
      h="90%"
      display={"flex"}
      flexDir={"column"}
      alignItems={"start"}
      justifyContent={"center"}
    >
      <TextContainer>
        I'm a Full-Stack Developer at{" "}
        <Link
          fontWeight={800}
          color={"#f73bcb"}
          href="https://www.sendpayments.com/"
          target="_"
        >
          SendFX
        </Link>{" "}
        to help people and business transfer money around the world.
      </TextContainer>
      <TextContainer>
        {" "}
        At work, I work on new features, fix bugs, do code reviews and drink
        some more coffee.{" "}
      </TextContainer>
      <TextContainer>
        {" "}
        I love building web-applications using React and Amazon Web Services.{" "}
      </TextContainer>
    </Box>
  );
};

const AboutMe = () => {
  return (
    <Fade left>
      <Box
        id="Aboutme"
        w="90%"
        margin={"7% 5% 5% 5%"}
        borderRadius={"10px"}
        zIndex={1}
        padding={"20px 0px"}
        position="relative"
        backgroundColor="#f7faff"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontFamily={"Nunito Sans"}
        sx={{
          "@media (max-width: 870px)": {
            margin: "11% 5% 5% 5%",
          },
        }}
      >
        <Box
          position={"absolute"}
          top="-50px"
          left="0%"
          background="transparent"
          display={"flex"}
          flexDir={"row"}
          columnGap={"0.5rem"}
        >
          <Box
            left="0%"
            backgroundColor="#f7faff"
            fontSize={"25px"}
            fontWeight={800}
            padding="15px"
            borderRadius={"5px"}
            cursor={"pointer"}
          >
            About Me
          </Box>
        </Box>
        <AboutMeTab />
      </Box>
    </Fade>
  );
};

export default AboutMe;
