import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Heading from "@/components/FAQ/components/Heading";
import Frequently_asked_ques from "@/components/FAQ/components/Frequently-asked-ques";
import Questions_container from "@/components/FAQ/components/Questions-container";
import JoinUs from "../Home/compoments/JoinUs";

export default function Faq() {
  return (
    <Box>
      <Container maxWidth="xl" sx={{ minHeight: "100vh", pb: 10, px: {xs: 3, md: 4 } }}>
        <Heading />
        <Frequently_asked_ques />
        <Box sx={{px: {xs: 0, md: 4}}}>
        <Questions_container />
        </Box>
      </Container>
      <JoinUs/>
    </Box>
  );
}
