import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function FirstTime() {
  return (
    <Container maxWidth="xl"sx={{
      backgroundImage:
        "linear-gradient(to top, rgba(251, 251, 251, 0.69) 0%, rgba(255, 255, 255, 0) 100%), url(/Images/FirstTimeBG.svg)",
      backgroundSize: "cover",
      // backgroundPosition: "center",
      // pb: 4,
      mt: -4,
    }}>
      <Box mt={4} mb={4} sx={{ px: { lg: 7 }, py: 6 }}>
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={12}>
            <Box>
              <Typography
                sx={{ fontSize: "36px", fontWeight: 600, maxWidth: "400px" }}
              >
                Are You a First-Time Homebuyer?
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} sm={6} xs={12} sx={{fontSize: "16px", mt: 2}}>
            <Typography variant="body2">
              Now to the home buying process or looking for a refresher? Check
              out our resource library designed specifically for new home
              buyers.
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, mt: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  backgroundColor:  "#E8E1C4",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#4D4D4D",
                    color: "white",
                  },
                  border: "2px solid #000",
                  px: 3.5,
                  py: 1.5,
                }}
              >
                Start Your Journey Here
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  backgroundColor:  "#fff",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "#4D4D4D",
                    color: "white",
                  },
                  border: "2px solid #000",
                  px: 3.5,
                  py: 1.5,
                }}
              >
                Consult with our agent
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
