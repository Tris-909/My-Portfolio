import React, { useState, useEffect } from "react";
import LinkButton from "./LinkButton";
import Fade from "react-reveal/Fade";
import { Box, Text } from "@chakra-ui/react";
import "./backGroundEffect.css";

const getWindowDimensions = () => {
  const { innerWidth: width } = window;
  return width;
};

const Home = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setCurrentScreenWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      id="Home"
      w="100%"
      height={"110vh"}
      display={"grid"}
      gridTemplateColumns={"1fr"}
      gridTemplateRows={"1fr"}
      position="relative"
      background="radial-gradient(ellipse at bottom, #141414 0%, #141414 100%)"
      overflow="hidden"
      sx={{
        "@media (max-width: 870px)": {
          height: "100vh",
        },
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
        width="100%"
        height="100%"
        sx={{
          "@media (max-width: 870px)": {
            position: "relative",
            top: "5%",
            display: "flex",
            alignItems: "flex-start",
          },
        }}
      >
        <Fade left cascade>
          <Text
            fontSize="6em"
            color="white"
            fontFamily="Nunito Sans"
            letterSpacing="5px"
            transitionDuration={"1s"}
            sx={{
              "@media (max-width: 870px)": {
                fontSize: "17vw",
                letterSpacing: "5px",
                marginLeft: "10%",

                "& span": {
                  display: "block",
                },
              },
            }}
          >
            Tri Tran
          </Text>
          <Text
            color="white"
            fontSize="4em"
            fontFamily={"Nunito Sans"}
            transitionDuration={"1s"}
            sx={{
              "@media (max-width: 870px)": {
                fontSize: "9vw",
                marginLeft: "10%",
              },
            }}
          >
            FullStack Developer
          </Text>
        </Fade>
        <Box
          display={"flex"}
          flexDirection={"row"}
          marginTop="1rem"
          position="relative"
          left="-2%"
          sx={{
            "@media (max-width: 870px)": {
              ml: "10%",
              position: "inherit",
              left: "0%",
            },
          }}
        >
          <LinkButton
            link="https://www.linkedin.com/in/tr%C3%AD-tr%E1%BA%A7n-6861331a4/"
            iconName="fab fa-linkedin"
          />
          <LinkButton
            link="https://github.com/Tris-909"
            iconName="fab fa-github"
          />
          <LinkButton link="https://dev.to/tris909" iconName="fab fa-dev" />
        </Box>
      </Box>
      {currentScreenWidth < 2000 ? (
        <>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </>
      ) : null}
    </Box>
  );
};

export default Home;
