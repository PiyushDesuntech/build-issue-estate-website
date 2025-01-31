"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 8 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Box>
            <Typography
              sx={{
                color: "#444444",
                fontSize: {
                  xs: "12px",
                  sm: "13px",
                  md: "14px",
                  lg: "16px",
                },
                // lineHeight: {
                //   xs: "1.4",
                //   sm: "1.5",
                //   md: "1.6",
                //   lg: "1.5",
                // },
                // textAlign: {
                //   xs: "justify",
                //   lg: "left",
                // },
                // display: "block",
                // width: "100%",
                // hyphens: {
                //   xs: "auto",
                //   lg: "none",
                // },
                // letterSpacing: {
                //   xs: "0.3px",
                //   sm: "0.4px",
                //   md: "0.5px",
                //   lg: "normal",
                // },
                // wordSpacing: {
                //   xs: "0.5px",
                //   sm: "0.7px",
                //   md: "1px",
                //   lg: "normal",
                // },
                fontWeight: 400,
              }}
            >
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum."
            </Typography>
            <Box
              sx={{
                width: {
                  xs: "140px",
                  sm: "160px",
                  md: "180px",
                  lg: "193.24px",
                },
                height: {
                  xs: "35px",
                  sm: "40px",
                  md: "45px",
                  lg: "55.56px",
                },
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "#3E4C66",
                "&:hover": {
                  backgroundColor: "#E0D8C3",
                  color: "#000",
                },
                color: "#FFFFFF",
                minWidth: "51px",
                mt: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "17.78px",
                  },
                  fontWeight: 500,
                }}
              >
                Get Started!
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ mt: { xs: 2, md: -10, lg: -15 }, display: "flex",justifyContent: "center", width: "100%"  }}>
          <Box
            sx={{
              width: {xs: "300px", md: "100%"},
              height: "100%",
              minWidth: "51px",
            }}
          >
            <Image
              src="/Images/Figure → Rent-Calculator.png"
              alt="Hero illustration"
              layout="responsive"
              width={300}
              height={300}
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
