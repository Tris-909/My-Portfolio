import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        {imageArray.map((oneImage, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ProjectImage;
