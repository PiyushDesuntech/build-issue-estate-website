import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import EastIcon from "@mui/icons-material/East";

export default function SellYourHome() {
  return (
    <Box sx={{ px: { xs: 1, md: 3 } }}>
      <Box
        sx={{
          backgroundImage: "url(/Images/sellBG.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          mt: 2,
          height: { xs: "400px", sm: "400px", md: "574px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 700,
            background: "rgba(255, 255, 255, 0.71)", // Adjust transparency
            textAlign: "center",
            borderRadius: "9px",
            p: { xs: "20px", md: "36px" },
            backdropFilter: "blur(5px)", // Add blur effect
            WebkitBackdropFilter: "blur(2px)", // Ensure compatibility with Webkit browsers
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "26px", md: "37px" },
              fontWeight: 700,
              color: "#333333",
            }}
          >
            Sell your home for top dollar and save on fees
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "10px", md: "12px" },
              color: "#333333",
              fontWeight: 400,
            }}
          >
            Our agents have the experience to price, market, and sell your home
            for the best price possible. And you get it all for half the fee
            other brokerages often charge.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "3px",
              justifyContent: "center",
              mt: "19.5px",
            }}
          >
            <TextField
              size="small"
              placeholder="Enter your street address"
              sx={{
                width: { xs: "180px", md: "298px" },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4.5px",
                  "& fieldset": {
                    borderColor: "#CCCCCC", 
                  },
                  "&:hover fieldset": {
                    borderColor: "#CCCCCC", 
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#CCCCCC", 
                  },
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "0.75px solid #CCCCCC",
                },
                "& .MuiInputBase-input": {
                  position: "relative",
                  zIndex: 1, 
                },
                backgroundColor: "#FFFFFF",
                borderRadius: "4.5px",
              }}
            />

            <IconButton sx={{ borderRadius: "4.5px", background: "#FAECB2" }}>
              <EastIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
