import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import Home from "./components/Home/index";
import Timeline from "./components/Journey/index";
import Projects from "./components/Project/Projects/index";
import AboutMe from "./components/Aboutme/index";
import Blogs from "./components/Blogs/index";
import Footer from "./components/Footer/index";
import Navbar from "./components/Navbar/index";
import LoaderScreen from "./components/LoaderScreen/index";

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
