"use client"
import React from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const data = [
  {
    icon: "/Images/financing.svg",
    title: "Trusted By Thousands",
    description:
      "Curabitur viverra, risus non laoreet molestie, erat justo porta urna, quis consequat ante augue commodo eros. Fusce convallis sodales lacus.",
  },
  {
    icon: "/Images/Trusted.svg", 
    title: "Wide Range Of Properties",
    description:
      "Morbi nec scelerisque metus, vel iaculis dolor. Vivamus consequat felis quam, nec fringilla leo finibus in. Duis pulvinar nisi nec ultricies aliquet.",
  },
  {
    icon: "/Images/wideRange.svg",
    title: "Financing Made Easy",
    description:
      "Praesent eleifend nunc in luctus ultrices. Pellentesque sed mauris sed felis consectetur mollis non nec tortor. In sit amet semper nibh.",
  },
];

const WhyUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: {xs: 1,md: 0.5,lg: 6}, mt: {xs: 3, sm: 3, md: 2} }}>
        <Typography sx={{ fontWeight: 500, fontSize: {xs:"26px", md: "40px"}, color: "#484848"}} align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography sx={{fontSize: {xs:"12px",md: "16px"}, fontWeight: 500, color: "#585858"}} align="center" gutterBottom>
          We provide full service at every step
        </Typography>
        <Grid container spacing={isMobile? 2: 4} sx={{mt: {xs: 1, md: 2}, display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: 3,
                  // padding: "1rem",
                  borderRadius: "8px",
                  color: "#444444",
                  transition: "background-color 0.5s ease, color 0.5s ease",
                  "&:hover": {
                    backgroundColor: "#3E4C66",
                    color: "#fff",
                  },
                 
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: {xs: "16px", lg: "26px"},
                    height: {lg: "430px", md: "400px"},
                  }}
                >
                  <Box
                    sx={{
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      background: "#E8E1C4",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      // layout="responsive"
                      // objectFit="cover"
                      width={74}
                      height={74}
                    />
                  </Box>
                 <Box>
                 <Typography sx={{fontWeight: 600, fontSize: {xs:"16px",md: "18px",lg: "22px"}, }} gutterBottom>
                    {item.title}
                  </Typography>
                 </Box>
                  <Box>
                  <Typography sx={{fontWeight: 500, fontSize: {xs:"12px",md: "14px",lg: "16px"}, }} >
                    {item.description}
                  </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
