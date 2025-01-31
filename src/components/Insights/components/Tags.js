"use client";

import { Box, Typography, Chip } from "@mui/material";
import React from "react";

const tags = ["Apartment", "Estate", "Luxury", "Real", "Real Estate"];

export default function Tags() {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "51px",
        backgroundColor: "#fff",
        borderRadius: { 
          xs: "4px", 
          sm: "5px", 
          md: "7.38px" 
        },
        padding: { 
          xs: "12px", 
          sm: "16px", 
          md: "20px", 
          lg: "24px" 
        },
        border: "1.5px solid #ebebeb",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          marginBottom: { 
            xs: "10px", 
            sm: "12px", 
            md: "16px" 
          },
          fontSize: { 
            xs: "16px", 
            sm: "18px", 
            md: "20px", 
            lg: "22.15px" 
          },
          color: "#484848",
        }}
      >
        Tags
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: { 
            xs: 0.5, 
            sm: 0.75, 
            md: 1 
          },
        }}
      >
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            sx={{
              fontSize: { 
                xs: "12px", 
                sm: "14px", 
                md: "16px", 
                lg: "17.23px" 
              },
              backgroundColor: "#f5f5f5",
              color: "#484848",
              borderRadius: { 
                xs: "4px", 
                sm: "6px", 
                md: "8px" 
              },
              padding: { 
                xs: "4px 8px", 
                sm: "6px 12px", 
                md: "8px 16px" 
              },
              cursor: "pointer",
              transform: "scale(1)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#e0e0e0",
                transform: "scale(1.05)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              },
              "@media (max-width: 600px)": {
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                },
              },
              height: { 
                xs: "32px", 
                sm: "36px", 
                md: "40px", 
                lg: "49px" 
              },
              margin: { 
                xs: "2px", 
                sm: "2px", 
                md: "0" 
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}