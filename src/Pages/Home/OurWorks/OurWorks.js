import { Box, Grid, IconButton } from "@mui/material";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Cards from "./Card";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const OurWorks = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        my: 5,
        mb: 10,
      }}
    >
      {/* Card heading section  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SectionTitle
          title="Here are some of "
          colored="our works"
          sx={{ textAlign: "left" }}
        ></SectionTitle>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .Mui-selected": {
                color: "primary.green",
                fontWeight: "bold",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="Mobile Application" />
          </Tabs>
          <Box>
            <IconButton
              sx={{ border: `1px solid #959EAD`, mr: 2 }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBackIcon></ArrowBackIcon>
            </IconButton>
            <IconButton
              sx={{ border: `1px solid #959EAD` }}
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
            >
              <ArrowBackIcon sx={{ rotate: "180deg" }}></ArrowBackIcon>
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Card section  */}
      <Box>
        <Grid container></Grid>
        <Cards></Cards>
      </Box>
    </Box>
  );
};

export default OurWorks;
