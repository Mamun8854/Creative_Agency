import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Service = ({ image }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        pt: 2,
        mx: "auto",
        "&:hover": {
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
        sx={{
          width: "auto",
          mx: "auto",
        }}
      />
      <CardContent style={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
