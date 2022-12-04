import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import cardImg from "./pp.png";
import { Box, IconButton, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
const Cards = () => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 345, p: 2, borderRadius: "10px", minWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="190"
        image={cardImg}
        style={{ borderRadius: "10px" }}
      />
      <CardContent
        sx={{
          p: 0,
          pt: 4,
          "&:last-child": {
            pb: 0,
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="body"
            component="div"
            color="text.secondary"
          >
            Web Design
          </Typography>
          <Typography variant="h5" color="primary.main" fontWeight="bold">
            Web Design Research
          </Typography>
        </Box>
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            "& svg": { color: "primary.main" },
            height: "20px",
            width: "20px",
          }}
        >
          <AddIcon></AddIcon>
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Cards;
