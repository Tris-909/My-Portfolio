import { Box } from "@chakra-ui/react";
import { Link } from "react-scroll";

const NavItem = ({ link, text }) => {
  return (
    <Box
      position={"relative"}
      p={"1.25rem 0rem 0.75rem 0rem"}
      ml="2rem"
      mr="1rem"
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
          ml: "0.75rem",
          mr: 0,
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
      <Link
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        {text}
      </Link>
    </Box>
  );
};

export default NavItem;
