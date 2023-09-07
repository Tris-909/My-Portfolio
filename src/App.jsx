import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Home from "./Components/Home/index";
import Timeline from "./Components/Journey/index";
import Projects from "./Components/Project/Projects/index";
import AboutMe from "./Components/Aboutme/index";
import Blogs from "./Components/Blogs/index";
import Footer from "./Components/Footer/index";
import Navbar from "./Components/Navbar/index";
import LoaderScreen from "./Components/LoaderScreen/index";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLargerThan870] = useMediaQuery("(max-width: 870px)");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <LoaderScreen />
      ) : (
        <Box
          backgroundColor="#141414"
          backgroundAttachment={"fixed"}
          backgroundSize={"cover"}
          marginTop={isLargerThan870 ? 0 : "-2em"}
          fontFamily={"Open Sans Condensed"}
          position={"relative"}
          zIndex="1"
        >
          <Navbar />
          <Home />
          <Timeline />
          <Projects />
          <AboutMe />
          <Blogs />
          <Footer />
        </Box>
      )}
    </>
  );
};

export default App;
