import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Importing the search icon from MUI

export default function FindLocalAgent() {
  return (
    <Container maxWidth="xl" >
      <Grid container spacing={2} mt={6}>
        <Grid item md={7} xs={12}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "1rem",
            }}
          >
            <Image
              src="/Images/LocalAgent.svg"
              alt="Colonial Realty Associates"
              layout="responsive"
              width={890}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              m: 1,
              gap: 3,
              maxWidth: "500px"
            }}
          >
            <Typography variant="h4" sx={{ textAlign: "start" }}>
              Find Local Agent
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "start" }}>
              You’re in luck! HouzQuest rigerously vets the best Realtors in
              your local market to help you find just the right fit.
            </Typography>
            {/* <TextField
              variant="outlined"
              placeholder="Search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4, // Adds a slight border-radius to the input field
                },
              }}
            /> */}
            <TextField
                variant="outlined"
                // fullWidth
                 placeholder="Enter Your Zipcode"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                       variant="contained"
                       sx={{
                         backgroundColor: "#E0D8C3",
                         "&:hover": {
                           backgroundColor: "#4D4D4D",
                           color: "#fff",
                         },
                         color: "#000",
                         minWidth: "84px",
                         height: "55px",
                         mr: -1.8,
                         borderRadius: "0px 4px 4px 0px",
                         boxShadow: "none"
                       }}
                      >
                        <SearchIcon />
                      </Button>
                    </InputAdornment>
                  ),
                  style: {
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                  },
                }}
              />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
