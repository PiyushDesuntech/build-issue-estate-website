import React from "react";
import { Box, Typography } from "@mui/material";

export default function Frequently_asked_ques() {
  return (
    <Box
    sx={{
      width: { xs: "100%", sm: "603.53px" }, 
      height: "61.2px",
      top: "120.6px",
      left: { xs: "0", sm: "570.05px" }, 
      
      // border: "2px solid red",
      margin: "4px auto",
      display: "flex",
      justifyContent: "center", 
      alignItems: "center", 
    }}
  >
    <Typography
      sx={{
        fontFamily: "Lato",
        fontSize: { xs: "32px",md: "40px", lg: "45.9px" },
        fontWeight: 700,
        lineHeight: "61.2px",
        textAlign: "center", 
        color: "#484848"
      }}
    >
      Frequently Asked Questions
    </Typography>
  </Box>
  
  );
}
