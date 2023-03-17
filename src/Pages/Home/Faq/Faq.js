import { Box } from "@mui/material";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <Box sx={{ mb: 8 }}>
      <SectionTitle
        title="Frequently Asked"
        colored={" Questions"}
      ></SectionTitle>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Accordian
          title="What is node JS and why it is used?"
          description="Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the clients browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021."
        ></Accordian>
        <Accordian
          title="Is node JS a backend?"
          description="Node. js is sometimes misunderstood by developers as a backend framework that is exclusively used to construct servers. This is not the case; Node. js can be used on the frontend as well as the backend."
        ></Accordian>
        <Accordian
          title="What is node JS and why it is used?"
          description="Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the clients browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021."
        ></Accordian>
        <Accordian
          title="What is node JS and why it is used?"
          description="Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the clients browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021."
        ></Accordian>
      </Box>
    </Box>
  );
};

export default Faq;
