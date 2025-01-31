"use client";
import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "70px", sm: "90px", md: "100px" },
        backgroundColor: "#fff",
        borderRadius: { xs: "6px", sm: "8.12px" },
        padding: { xs: "12px 16px", sm: "17px", md: "20px" },
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
          transform: "translateY(-2px)",
        }
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "24.37px" },
              fontWeight: "400",
              color: "#314259",
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.5px",
              transition: "color 0.2s ease-in-out",
            }}
          >
            Advanced Search
          </Typography>
        </Grid>
        <Grid item>
          <Box
            sx={{
              width: { xs: "40px", sm: "44px", md: "48px" },
              height: { xs: "40px", sm: "44px", md: "48px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "1.5px solid #E5E5E5",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#d5d5d5",
              },
            }}
          >
            <ExpandMoreIcon
              sx={{
                fontSize: { xs: "20px", sm: "22px", md: "24px" },
                color: "#666666",
                transition: "transform 0.2s ease-in-out",
                transform: isOpen ? "rotate(180deg)" : "rotate(0)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}