import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import LoaderScreen from "./components/LoaderScreen";
import Home from "./components/Home";
import Timeline from "./components/Journey";
import Projects from "./components/Project/ProjectSection";
import Aboutme from "./components/Aboutme";
import Blog from "./components/Blogs";
import Footer from "./components/Footer";

// Waiting to turn into chakraUI
import Navbar from "./components/Navbar/Navbar";

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
          overflow="auto"
        >
          <Navbar />
          <Home />
          <Timeline />
          <Projects />
          <Aboutme />
          <Blog />
          <Footer />
        </Box>
      )}
    </>
  );
};

export default App;
