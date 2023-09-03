import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
