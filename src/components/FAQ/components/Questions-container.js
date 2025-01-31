"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Dropdowns from "./Dropdowns";

export default function Questions_container() {
  return (
    <Box
      sx={{
        marginbottom: "100px",

        margin: "auto",
        padding: { xs: "8px", sm: "16px", md: "24px" }, // Responsive padding
        borderRadius: "7.65px ", // Rounded corners
        border: "1.53px solid #EBEBEB",
        opacity: 1,
        boxSizing: "border-box",
        // background: "#fff"
        mt: "60px",
        width: "100%"
      }}
    >
      <Dropdowns />
    </Box>
  );
}
