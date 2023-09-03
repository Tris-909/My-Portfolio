import React, { useState, useEffect } from "react";
import { Box, Flex, Text, keyframes } from "@chakra-ui/react";
import axios from "axios";
import BlogItem from "./BlogItem";
import Pagination from "react-js-pagination";
import "./BlogPagination.css";

const moveGradient = keyframes`
    50% {
        background-position: 100% 50%;
    }
`;

const GradientWidth = "9px";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://dev.to/api/articles?username=tris909&per_page=3&page=0`
      );
      setBlogs(data);
    };

    fetchData();
  }, []);

  const onPaginationChangeHandler = async (pageNumberClicked) => {
    setCurrentPage(pageNumberClicked);
    const { data } = await axios.get(
      `https://dev.to/api/articles?username=tris909&per_page=3&page=${pageNumberClicked}`
    );
    setBlogs(data);
  };

  return (
    <Box
      id="Blogs"
      w="90%"
      margin="5%"
      backgroundColor="white"
      borderRadius={"15px"}
      position={"relative"}
      _after={{
        position: "absolute",
        content: '""',
        top: `calc(-1 * ${GradientWidth})`,
        left: `calc(-1 * ${GradientWidth})`,
        zIndex: -1,
        width: `calc((100 % +${GradientWidth}) * 2)`,
        height: `calc((100 % +${GradientWidth}) * 2)`,
        bgGradient:
          "linear-gradient(60deg, hsl(224, 85%, 66%), hsl(269, 85%, 66%),hsl(314, 85%, 66%),hsl(359, 85%, 66%), hsl(44, 85%, 66%), hsl(89, 85%, 66%), hsl(134, 85%, 66%),hsl(179, 85%, 66%))",
        bgSize: "300% 300%",
        backgroundPosition: "0 50%",
        borderRadius: `calc(2 * ${GradientWidth})`,
        animation: `${moveGradient} 4s alternate infinite`,
      }}
      sx={{
        "@media (max-width: 775px)": {
          display: "flex",
          flexDir: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Flex
        flexDir={"column"}
        justifyContent={"column"}
        alignItems="center"
        pr="1rem"
      >
        <Text
          fontFamily={"Squada One"}
          color="black"
          mt="2rem"
          mb="2rem"
          fontWeight={"600"}
          fontSize={"3rem"}
        >
          My Blogs
        </Text>
        {blogs.map((blog) => {
          return (
            <BlogItem
              key={blog.id}
              title={blog.title}
              date={blog.readable_publish_date}
              numberOfLikes={blog.positive_reactions_count}
              link={blog.url}
              tagsArray={blog.tag_list}
            />
          );
        })}
        <Flex
          justifyContent={"center"}
          alignItems={"space-between"}
          justifySelf={"flex-end"}
        >
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={3}
            totalItemsCount={4}
            pageRangeDisplayed={3}
            hideFirstLastPages={true}
            hideNavigation={true}
            onChange={(pageNumberClicked) =>
              onPaginationChangeHandler(pageNumberClicked)
            }
            activeLinkClass={`pageActive`}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Blog;
