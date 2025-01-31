"use client"
import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import SellHeading from "./components/SellHeading";
import SellYourHome from "./components/SellYourHome";
import MostExperience from "./components/MostExperience";
import OurAgents from "../AboutUs/components/OurAgents";
import MoreWays from "./components/MoreWays";
import WhyChooseUs from "./components/WhyChooseUs";
import SellPropertyForm from "./components/SellPropertyForm";
import HomeIndex from "../Home/HomeIndex";

export default function SellIndex() {
  const [showSellPropertyForm, setShowSellPropertyForm] = useState(false);

  const handleScheduleClick = () => {
    setShowSellPropertyForm(true);
  };

  return (
    <Box>
      {!showSellPropertyForm ? (
        <Box>
        <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 6 } }}>
          <SellHeading />
          <SellYourHome />
          <MostExperience />
          </Container>
          <OurAgents />
          <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 6 } }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                backgroundColor: "#E8E1C4",
                "&:hover": {
                  backgroundColor: "#4D4D4D",
                  color: "#fff",
                },
                color: "#717171",
                borderRadius: "8px",
                textTransform: "none",
                px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                py: "10px",
                m: 2,
                fontSize: "19.69px",
                fontWeight: 700,
              }}
            >
              Find More Agents
            </Button>
          </Box>
          <MoreWays />
          <WhyChooseUs />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              mt: 10,
              mb: 10,
            }}
          >
            <Box
              sx={{
                maxWidth: 1250,
                minHeight: 224,
                border: "1px solid #BD8F81",
                borderRadius: "12px",
                width: "100%",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontSize: {xs: "26px",md: "36px"}, fontWeight: 700, color: "#333333" }}
              >
                Ready to sell your home?
              </Typography>
              <Button
                variant="contained"
                onClick={handleScheduleClick}
                sx={{
                  display: "flex",
                  backgroundColor: "#E8E1C4",
                  "&:hover": {
                    backgroundColor: "#4D4D4D",
                    color: "#fff",
                  },
                  color: "#333333",
                  borderRadius: "8px",
                  textTransform: "none",
                  px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                  py: "10px",
                  m: 2,
                  fontSize: "16px",
                  fontWeight: 700,
                }}
              >
                Schedule a consultation
              </Button>
            </Box>
          </Box>
        </Container>
        </Box>
      ) : (
        <Box sx={{ background: "#F7F7F7" }}>
          <Container maxWidth="xl" sx={{ px: { xs: 1, lg: 6 } }}>
          <SellHeading />
            <SellPropertyForm />
          </Container>
        </Box>
      )}
      {/* <HomeIndex/> */}
    </Box>
  );
}
