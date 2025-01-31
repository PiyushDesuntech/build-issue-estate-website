"use client"
import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

export default function WantCall() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Container
      maxWidth="xl"
      sx={{ px: { lg: "94px", md: 1, xs: 2 }, pt: { xs: 0,sm:0, lg: 5 } }}
    >
      <Box
        sx={{
          backgroundImage: "url(/Images/WantCallBG.svg)",
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat", 
          backgroundPosition: {xs: "right", md: "center"}, 
          height: "100%", 
          width: "100%", 
          mt: {xs: 0, lg: 3},
          display: "flex",
          justifyContent: "center",
          alignItems: "center,",
          flexDirection: "column",
          py: {xs: 4, md: 6},
        }}
      >
        <Grid container sx={{px: {xs: 0, md: 2}}} spacing={isMobile? 2: 0}>
          <Grid item xs={12} md={6.5}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "95%", sm: "100%" },
                    padding: { xs: "1rem", sm: 0 },
                  }}
                >
                  <Image
                    src="/Images/WantCall1.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "95%", sm: "100%" },
                  }}
                >
                  <Image
                    src="/Images/WantCall2.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain", transform: "scaleX(-1)" }}
                  />
                </Box>

                <Box
                 sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                    alignItems: "center",
                    width: { xs: "95%", sm: "100%" },
                  }}
                >
                  <Image
                    src="/Images/WantCall3.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={650}
                    height={500}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5.5} sx={{ px: { xs: 0,sm: 1, md: 0, lg: 6 },display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                py: { xs: 2, lg: 2 },
                px: { xs: 0, lg: 2 },
                gap: 3,
                width: { lg: "500px", md: "100%" },
              }}
            >
              <Typography
                sx={{
                  textAlign: "start",
                  fontWeight: 700,
                  fontSize: { xs: "26px", md: "40px" },
                }}
              >
                Request a Call Back from One of Our Agents
              </Typography>
              <Typography
                sx={{
                  textAlign: "start",
                  fontSize: { xs: "12px", md: "16px" },
                  fontWeight: 500,
                  color: "#585858",
                }}
              >
                Real people, Real answers. Real quick. Let one of our Client
                Conciergeshelp you get started on your home search. Enter your
                phone number and we’ll call you within 30 seconds.
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter Your Phone Number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#E0D8C3",
                          "&:hover": {
                            backgroundColor: "#3E4C66",
                            color: "#fff",
                          },
                          color: "#4D4D4D",
                          minWidth: { xs: "fit-content", sm: "118px" },
                          height: "55px",
                          mr: -1.7,
                          borderRadius: "0px 4px 4px 0px",
                          boxShadow: "none",
                          textTransform: "none",
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                      >
                        Call Back
                      </Button>
                    </InputAdornment>
                  ),
                  style: {
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    border: "none",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    border: "1px solid #A0A0A0",
                    "&:hover fieldset": {
                      border: "1px solid #A0A0A0",
                    },
                    "&.Mui-focused fieldset": {
                      border: "1px solid #A0A0A0",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
