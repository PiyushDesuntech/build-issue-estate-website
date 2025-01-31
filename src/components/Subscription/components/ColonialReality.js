import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";

export default function ColonialRiality() {
  return (
    <Box sx={{ px: { xs: 2, lg: 2 }, my: "90px" }}>
      <Typography sx={{ fontWeight: 500, fontSize: "26px" }}>
      Colonial Reality News & Blogs
      </Typography>
      <Typography
        sx={{ fontWeight: 400, fontSize: "17.68px", color: "#777777", my: 2.5, }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit est, bibendum vel molestie nec, aliquam sed libero.
      </Typography>
      <Divider />
      <Grid container spacing={3} mt={2.5}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            title="Our Blogs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit est, bibendum vel molestie ne."
            radioOptions={[
              { label: "Instant", value: "Instant" },
              { label: "Daily", value: "Daily" },
              { label: "Never", value: "Never" },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            title="Agent’s Blogs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit est, bibendum vel molestie ne."
            radioOptions={[
              { label: "Instant", value: "Instant" },
              { label: "Daily", value: "Daily" },
              { label: "Never", value: "Never" },
            ]}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
