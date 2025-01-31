"use client";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  LocationOn,
  Email,
  Phone,
  Fax,
  Facebook,
  Twitter,
  Google,
  LinkedIn,
} from "@mui/icons-material";

export default function ContactInfo() {
  return (
    <Box>
      <Box sx={{ height: { xs: "300px", sm: "500px" } }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.38025897598953!2d-73.73674148018567!3d40.651002981461886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2642550fa563d%3A0xedb7398d43d0e4a0!2s67%20253rd%20St%2C%20Rosedale%2C%20NY%2011422%2C%20USA!5e0!3m2!1sen!2sin!4v1737350925343!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              maxWidth: {xs: "100%", sm: "80%", md: 950},
              justifyContent: "center",
              mt: { xs: 3, sm: -20, md: -20 },
              // p: { xs: 0, sm: 2, md: 0 },
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
              mb: 6,
              borderRadius: "5px",
            }}
          >
            {/* Left Section */}
            <Box
              sx={{
                width: { xs: "100%",sm: "50%", md: "40%" },
                backgroundColor: "#E8E1C4",
                padding: 3,
                borderRadius: { xs: "5px 5px 0px 0px", md: "5px 0px 0px 5px" },
              }}
            >
              <Typography
                sx={{ fontSize: "16.67px", fontWeight: 700, color: "#383838" }}
              >
                Contact Information
              </Typography>
              <Typography
                sx={{ fontSize: "11.67px", fontWeight: 400, color: "#383838" }}
              >
                Ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos...
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  mt: "25px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOn sx={{ mr: 1 }} />
                  <Typography
                    sx={{
                      fontSize: "11.67px",
                      fontWeight: 400,
                      color: "#383838",
                    }}
                  >
                    Homeo Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York
                    10282
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email sx={{ mr: 2, color: "#383838" }} />
                  <Typography
                    sx={{
                      fontSize: "11.67px",
                      fontWeight: 400,
                      color: "#383838",
                    }}
                  >
                    example@info.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Phone sx={{ mr: 2, color: "#383838" }} />
                  <Typography
                    sx={{
                      fontSize: "11.67px",
                      fontWeight: 400,
                      color: "#383838",
                    }}
                  >
                    0933 343 343
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Fax sx={{ mr: 2, color: "#383838" }} />
                  <Typography
                    sx={{
                      fontSize: "11.67px",
                      fontWeight: 400,
                      color: "#383838",
                    }}
                  >
                    0933 343 343
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 1, mt: 4, mb: 3}}>
                <IconButton>
                  <Facebook sx={{ color: "#383838", fontSize: "11.67px" }} />
                </IconButton>
                <IconButton>
                  <Twitter sx={{ color: "#383838", fontSize: "11.67px" }} />
                </IconButton>
                <IconButton>
                  <Google sx={{ color: "#383838", fontSize: "11.67px" }} />
                </IconButton>
                <IconButton>
                  <LinkedIn sx={{ color: "#383838", fontSize: "11.67px" }} />
                </IconButton>
              </Box>
            </Box>

            {/* Right Section */}
            <Box
              sx={{
                width: { xs: "100%",sm: "50%", md: "60%" },
                padding: 3,
                background: "#fff",
                borderRadius: { xs: "0px 0px 5px 5px", md: "0px 5px 5px 0px" },
              }}
            >
              <Typography sx={{fontSize: "16.67px", fontWeight: 700, color: "#484848"}} gutterBottom>
                We want to hear from you!
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "5px",
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                        fontSize: "11.67px",
                        fontWeight: 400,
                        color: "#383838",
                        height: 41,
                        "& input": {
                          padding: "10px 12px",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "11.67px",
                        fontWeight: 400,
                        color: "#383838",
                        transform: "translate(0, 12px) scale(1)", // Center label when not focused
                        ml: 1,
                      },
                      "& .MuiInputLabel-shrink": {
                        transform: "translate(0, -6px) scale(0.75)", // Adjust when the label shrinks
                      },
                    }}
                  />{" "}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "5px",
                        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                        fontSize: "11.67px",
                        fontWeight: 400,
                        color: "#383838",
                        height: 41,
                        "& input": {
                          padding: "10px 12px",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "11.67px",
                        fontWeight: 400,
                        color: "#383838",
                        transform: "translate(0, 12px) scale(1)", // Center label when not focused
                        ml: 1,
                      },
                      "& .MuiInputLabel-shrink": {
                        transform: "translate(0, -6px) scale(0.75)", // Adjust when the label shrinks
                      },
                    }}
                  />{" "}
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "5px",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                      fontSize: "11.67px",
                      fontWeight: 400,
                      color: "#383838",
                      height: 41,
                      "& input": {
                        padding: "10px 12px",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "11.67px",
                      fontWeight: 400,
                      color: "#383838",
                      transform: "translate(0, 12px) scale(1)", // Center label when not focused
                      ml: 1,
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(0, -6px) scale(0.75)", // Adjust when the label shrinks
                    },
                  }}
                />{" "}
              </Box>
              <Box sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={7}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "5px",
                      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                      fontSize: "11.67px",
                      fontWeight: 400,
                      color: "#383838",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "11.67px",
                      fontWeight: 400,
                      color: "#383838",
                    },
                  }}
                />
              </Box>
              <Box sx={{ mt: 2, display:"flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    backgroundColor: "#E0D8C3",
                    "&:hover": {
                      backgroundColor: "#4D4D4D",
                      color: "#fff",
                    },
                    color: "#00000099",
                    borderRadius: "5px",
                    textTransform: "none",
                    px: { xs: 2, sm: 2, md: 5, lg: "40px" },
                    py: "10px",
                    fontSize: "13px", 
                    fontWeight: 700,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>
  );
}
