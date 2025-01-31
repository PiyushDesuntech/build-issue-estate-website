"use client";

import { Box, Container } from "@mui/material";
import React from "react";
import Heading from "./components/Heading";
import LoanCalculator from "./components/LoanCalculator";
import LoanAmount from "./components/LoanAmount";
import AdvancedSearch from "./components/AdvanceSearch";
import LoanInformation from "./components/LoanInformation";

export default function Mortgage() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", minWidth: "51px" }}>
      <Container
        maxWidth="xl"
        sx={{
          px: { 
            xs: 2, 
            // sm: "32px 24px", 
            lg: 6 
          },
          minWidth: "51px",
          // paddingLeft: { md: "24px", lg: "50px" },
          py: 3
        }}
      >
        {/* Page Heading */}
        <Box sx={{ 
          marginBottom: { xs: 3, lg: 2 },
          // paddingLeft: { xs: 0, lg: "-10px" },
          px: {xs: 0,sm: 2, md: 2}

        }}>
          <Heading />
        </Box>

        {/* Main Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "minmax(500px, 2fr) minmax(400px, 1fr)",
              lg: "minmax(680px, 2fr) minmax(300px, 1fr)",
            },
            gap: { xs: 3, sm: 4, md: 1, lg: 6 },
            marginBottom: { xs: 4, md: 6 }
          }}
        >
          {/* Left Column: Loan Amount */}
          <Box sx={{ 
            paddingLeft: { xs: 0, lg: "110px" },
            display: 'flex',
            justifyContent: { xs: 'center', lg: 'flex-start' },
            px: {xs: 1,sm: 3, md: 0}
          }}>
            <LoanAmount />
          </Box>

          {/* Right Column: Calculator and Advanced Search */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
              width: { xs: "100%", md: "auto" },
              maxWidth: { xs: "100%", md: "none" },
              margin: { xs: "0 auto", md: 0 },
              px: {xs: 1,sm: 3, md: 2}
            }}
          >
            <Box sx={{ width: "100%" }}>
              <LoanCalculator />
            </Box>
            <Box sx={{ width: "100%" }}>
              <AdvancedSearch />
            </Box>
          </Box>
        </Box>

        {/* Loan Information Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { lg: "calc(100% - 130px)", md: "100%" },
            marginTop: { xs: 4, lg: -13 },
            marginLeft: { xs: 0, lg: "70px" },
            paddingRight: { lg: "45px", md: 0 }
          }}
        >
          <LoanInformation />
        </Box>
      </Container>
    </Box>
  );
}