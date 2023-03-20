import { Button, Divider, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", py: 8 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", color: "#fff" }}>
            Creative Agency
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "rgba(255,255,255,0.5)" }}>
              Creative Agency
            </Typography>
            <Button
              sx={{
                bgcolor: "primary.green",
                "&:hover": {
                  bgcolor: "primary.green",
                },
                ml: 2,
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
        <Divider sx={{ mt: 3, bgcolor: "white" }}></Divider>
        <Typography sx={{ color: "white", textAlign: "center", py: 2 }}>
          Copyright © 2023 - All right reserved by Creative Agency
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
