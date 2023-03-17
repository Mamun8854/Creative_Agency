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
      <Box>
        <Accordian></Accordian>
      </Box>
    </Box>
  );
};

export default Faq;
