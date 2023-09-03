import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const BlogItem = ({ title, date, numberOfLikes, link, tagsArray }) => {
  return (
    <Box
      w="80%"
      display={"flex"}
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      border="2px solid black"
      padding={"1rem"}
      marginBottom="1rem"
    >
      <Link
        href={link}
        target="_"
        alt="Link to blog"
        fontSize="2.5rem"
        transition={"all 0.5s"}
        textDecor={"none"}
        textDecorationColor={"black"}
        color="black"
        _active={{
          color: "black",
        }}
        _visited={{
          color: "black",
        }}
      >
        <Text fontFamily={"Squada One"} color="black" fontSize="2rem">
          {title}
        </Text>
      </Link>

      <Box display={"flex"} flexDir={"row"} marginTop={"0.5rem"}>
        <Box>
          <Text
            as={"span"}
            mr="0.5rem"
            ml="0.5rem"
            fontSize={"1.2rem"}
            fontWeight={600}
          >
            {numberOfLikes}
          </Text>
          <i className="fas fa-heart" style={{ color: "#db1240" }}></i>
        </Box>
        <Text as="span" fontSize="1.2rem" fontWeight={600} ml="1rem">
          -
        </Text>
        <Box>
          <Text as="span" fontSize="1.2rem" fontWeight={600} ml="1rem">
            {date}
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        w="100%"
      >
        <Box display={"flex"} flexDir={"row"}>
          {tagsArray.map((tag, index) => {
            return (
              <Box
                key={index}
                backgroundColor={"#292325"}
                borderRadius={"5px"}
                color="white"
                padding="5px"
                fontSize="0.8rem"
                mr="1rem"
              >
                # {tag}
              </Box>
            );
          })}
        </Box>

        <Link
          href={link}
          target="_"
          alt="link to blogs"
          fontSize={"2.5rem"}
          transition="all 0.5s"
          textDecor={"none"}
          textDecorationColor={"black"}
          color="black"
          _active={{
            color: "black",
          }}
          _visited={{
            color: "black",
          }}
        >
          <i className="fas fa-caret-right" style={{ color: "black" }}></i>
        </Link>
      </Box>
    </Box>
  );
};

export default BlogItem;
