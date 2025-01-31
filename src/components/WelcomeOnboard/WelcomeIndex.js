"use client";
import React, { useState } from "react";
import WelcomeOnboard from "./components/WelcomeOnboard";
import { Box, Container } from "@mui/material";
import TrialPack from "./components/TrialPack";
import PropertyForm from "./components/PropertyForm";

export default function WelcomeIndex() {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);
  return (
    <Box>
      <Box sx={{background: "#FCFCFC"}}>
      <Container maxWidth="xl" sx={{ px: { lg: 8, xs: 3 }, mt: 3 }}>
        <WelcomeOnboard />
      </Container>
      </Box>
      <Box sx={{background: "#F7F7F7"}}>
      <Container maxWidth="xl" sx={{ px: { lg: 8, xs: 3 }, mt: {xs: 6, sm: 6, md: 8, lg: 10}, pb: 5 }}>
      <PropertyForm/>
      </Container>
      </Box>
    </Box>
  );
}
