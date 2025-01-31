import React from "react";
import { Box, Grid, Typography, List, ListItem } from "@mui/material";

const ServiceAreas = () => {
  const serviceAreas = [
    "Belmont, MA",
    "Brookline, MA",
    "Waltham, MA",
    "Brighton, Boston, MA",
    "Watertown, MA",
    "Allston, Boston, MA",
    "Boston, MA",
  ];

  return (
    <Box sx={{ padding: 2, mt: {xs: 2, sm: 0} }}>
      <Typography sx={{fontSize: {xs: "18px", sm: "20px", md: "22.07px"}, fontWeight: 700, color: "#2A2A33"}} gutterBottom>
        Service areas ({serviceAreas.length})
      </Typography>
      <Grid container >
        {serviceAreas.map((area, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <List>
              <Typography sx={{fontSize: {xs: "14px", sm: "16px", md: "17.21px"}, fontWeight: 400, color: "#2A2A33"}}>{area}</Typography>
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceAreas;
