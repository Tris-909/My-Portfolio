import React, { useState, useEffect } from "react";
import LoaderScreen from "./components/LoaderScreen/LoaderScreen";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Timeline from "./components/Journey/Journey";
import Projects from "./components/Project/ProjectSection";
import AboutmeV2 from "./components/Aboutme/AboutmeV2";
import Blog from "./components/Blogs/Blogs";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, useMediaQuery } from "@chakra-ui/react";

function App() {
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
          <AboutmeV2 />
          <Blog />
          <Footer />
          <ToastContainer />
        </Box>
      )}
    </>
  );
}

export default App;
