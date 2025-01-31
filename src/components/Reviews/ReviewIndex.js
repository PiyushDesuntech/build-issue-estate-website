"use client";
import React from "react";
import { Box, Container, Grid } from "@mui/material";
import Heading from "./components/Heading";
import PropertyAgentCard from "./components/PropertyAgentCard";
import ReviewForm from "./components/ReviewForm";

export default function ReviewIndex() {
  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F7F7F7" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, lg: 8 } }}>
        <Heading />
        <Grid container spacing={4} pb={8}>
          <Grid item xs={12} md={8}>
          <ReviewForm />
          </Grid>
          <Grid item xs={12} md={4} >
         <Box sx={{mt: {xs:0, md: "-60px"}}}>
         <PropertyAgentCard />
         </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
