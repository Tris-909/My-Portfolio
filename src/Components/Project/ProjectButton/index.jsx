import React from "react";
import { Link } from "@chakra-ui/react";

const ProjectButton = ({ link, content }) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="nofollow"
      textTransform={"uppercase"}
      textDecoration={"none"}
      cursor={"pointer"}
      padding={"10px"}
      borderRadius={"5px"}
      display={"inline-block"}
      border={"none"}
      transition={"all 0.4s ease 0s"}
      marginTop={"20px"}
      marginRight={"8%"}
      fontWeight={500}
      fontSize={"1.25rem"}
      background={"#fff"}
      color={"#000"}
      _hover={{
        background: "#404040",
        color: "#fff",
        letterSpacing: "1px",
        WebkitBoxShadow: "0px 5px 40px -10px rgba(0, 0, 0, 0.57)",
        MozBoxShadow: "0px 5px 40px -10px rgba(0, 0, 0, 0.57)",
        boxShadow: "5px 40px -10px rgba(0, 0, 0, 0.57)",
        transition: "all 0.4s ease 0s",
      }}
      sx={{
        "@media (max-width: 400px)": {
          fontSize: "1rem",
          padding: "7px",
        },
      }}
    >
      {content}
    </Link>
  );
};

export default ProjectButton;
