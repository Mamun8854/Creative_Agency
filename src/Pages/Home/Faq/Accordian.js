import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const ExpandAccordionIcon = () => {
  return (
    <div>
      <div className="addExpand">
        <AddIcon></AddIcon>
      </div>
      <div className="removeExpand">
        <RemoveIcon></RemoveIcon>
      </div>
    </div>
  );
};

const Accordian = ({ title, description }) => {
  return (
    <Accordion sx={{ p: 2 }}>
      <AccordionSummary
        sx={{
          "& p": {
            fontWeight: "bold",
            color: "primary.main",
          },
          "& .Mui-expanded": {
            "& p": {
              color: "primary.green",
            },
            "& .addExpand": {
              display: "none",
            },
            "& .removeExpand": {
              display: "block",
              "& svg": {
                color: "primary.green",
              },
            },
          },
          "& .removeExpand": {
            display: "none",
          },
        }}
        expandIcon={<ExpandAccordionIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordian;
