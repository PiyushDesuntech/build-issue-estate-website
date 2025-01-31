import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function MostExperience() {
  return (
    <Box sx={{ p:{xs: 1, md: 3} }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{display: "flex", flexDirection: "column", justifyContent: "center", py: 3}}>
          <Typography
            sx={{
              fontSize:{xs: "30px", sm: "34px", md: "38px", lg: "40px"},
              fontWeight: 500,
              color: "#000000",
              maxWidth: 464,
              lineHeight: {xs: "34px", sm: "34px", md: "50px"},
              mt: {xs: 2}
            }}
          >
            Work with the most experienced agents in Canada
          </Typography>
          <Typography
            sx={{ fontSize:{xs: "15px", sm: "16px", md: "18px", lg: "19.69px"}, fontWeight: 700, color: "#484848", mt: {xs: 1, sm: 3, md: 0} }}
          >
            Lorem ipsum dolor sit ame adipiscing elit.
          </Typography>
          <Typography
            sx={{ fontSize:{xs: "14px", sm: "15px", md: "16px", lg: "17.69px"}, fontWeight: 400, color: "#484848", mt: {xs: 1, sm: 3, md: 0} }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris
            ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend
            dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci
            elementum augue, eget auctor metus ante sit amet velit.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} >
          <Box sx={{display: "flex", justifyContent: {xs: "flex-start", md: "flex-end"}, py: {xs: 3, md: 10}}}>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: {xs: "100%", md: "70%"},
              }}
            >
              <Image
                src="/Images/MostExperience.svg"
                alt="MostExperience"
                layout="responsive"
                width={650}
                height={500}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
