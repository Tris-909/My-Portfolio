import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Image } from "@chakra-ui/react";

const ProjectImage = ({ imageArray, width, height, top, left }) => {
  return (
    <Box
      position="absolute"
      zIndex={10}
      top={top}
      width={width}
      left={left}
      height={height}
      sx={{
        "@media (max-width: 1400px)": {
          position: "relative",
          top: "0%",
          left: "0%",
          marginTop: "5%",
          width: "85%",
        },
      }}
    >
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        animation="slide"
        interval={300}
        style={{ height: "100%" }}
      >
        {imageArray.map((oneImage, index) => {
          return (
            <Image
              key={index}
              src={oneImage}
              alt="project 1"
              border="5px solid white"
              width="100%"
              height="350px"
              sx={{
                "@media (max-width: 1400px)": {
                  height: "500px",
                },
                "@media (max-width: 650px)": {
                  height: "300px",
                },
                "@media (max-width: 450px)": {
                  height: "190px",
                },
              }}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default ProjectImage;
