import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";

export default function TrialPack() {
  return (
    <Container maxWidth="xl" sx={{px: {xs: 1, md: 6}}}>
      {/* <Box sx={{ px: 4 }}>
        <Box
          sx={{
            maxWidth: "1200px",
            background: "#FAF8EE",
            borderRadius: "4px",
            border: "2px Dashed #BDB38B",
            mt: 5,
          }}
        >
          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography
                sx={{ fontSize: "26px", fontWeight: 700, color: "#484848" }}
              >
                Buy a Trial Pack
              </Typography>
              <Typography>
                Get up to Rs, 12200 off Your First Purchase
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <CheckIcon />
                  <Typography>Get instant Visibility</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <CheckIcon />
                  <Typography>Get instant Visibility</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <CheckIcon />
                  <Typography>Get instant Visibility</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <CheckIcon />
                  <Typography>Get instant Visibility</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                p: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#747679",
                  "&:hover": {
                    backgroundColor: "#E0D8C3",
                    color: "#000",
                  },
                  color: "#fff",
                  minWidth: "173px",
                  height: "50px",
                  textTransform: "none",
                }}
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box> */}
      <Box sx={{mt: {xs: 4, md: 10,}, mb: 6,}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{fontSize: "26px", fontWeight: 700, color: "#484848"}}>About Colonial Reality</Typography>
            <Typography sx={{fontSize: "16px", fontWeight: 500, color: "#818080"}}>
              Quisque est quam, venenatis vel est at, pretium interdum elit.
              Nulla malesuada ipsum tortor, ac dictum dui blandit vel. Donec
              convallis, mauris vel feugiat convallis, erat dolor vestibulum
              purus, vel pulvinar mauris eros quis mi. Quisque lobortis, dui id
              euismod venenatis, ipsum dolor pharetra diam, ut commodo tortor
              augue id ex. 
            </Typography>
            <Typography sx={{fontSize: "16px", fontWeight: 500, color: "#818080"}}>
              Quisque est quam, venenatis vel est at, pretium interdum elit.
              Nulla malesuada ipsum tortor, ac dictum dui blandit vel. Donec
              convallis, mauris vel feugiat convallis, erat dolor vestibulum
              purus, vel pulvinar mauris eros quis mi. Quisque lobortis, dui id
              euismod venenatis, ipsum dolor pharetra diam, ut commodo tortor
              augue id ex. 
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{fontSize: "26px", fontWeight: 700, color: "#484848"}}>Real Estate</Typography>
            <Typography sx={{fontSize: "16px", fontWeight: 500, color: "#818080"}}>
              Curabitur eget pulvinar mauris. Nullam varius ligula at
              sollicitudin mollis. Nulla consectetur dictum luctus. Suspendisse
              lobortis, nisl at tincidunt dapibus, odio odio consequat elit, eu
              tempus ante metus vel elit. Quisque ornare, ex bibendum varius
              blandit, risus justo faucibus nibh, id efficitur lectus eros ut
              dolor. Nulla molestie nec mi nec gravida. .
            </Typography>
            <Typography sx={{fontSize: "16px", fontWeight: 500, color: "#818080"}}>
              Quisque euismod commodo diam, et tristique felis tincidunt ac.
              Proin sollicitudin placerat lacus id ultrices. Curabitur pulvinar
              dapibus placerat. Donec eu pharetra augue. Curabitur finibus
              molestie quam in posuere. Nulla facilisi. Sed ornare tortor
              lobortis tincidunt sagittis. Aenean sollicitudin tortor id ante
              imperdiet, id maximus tellus ullamcorper.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
