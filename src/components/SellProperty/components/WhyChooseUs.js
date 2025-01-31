import React from "react";
import Image from "next/image";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Container,
} from "@mui/material";

const data = [
  {
    icon: "/Images/localexpert.svg",
    title: "Work with a local expert",
    description:
      "Redfin agents rank in the top 1% of agents working at any nationwide brokerage.",
  },
  {
    icon: "/Images/savethousands.svg", 
    title: "Save thousands in fees",
    description:
      "When you buy and sell with us, you’ll payhalf the fee other brokerages often charge.",
  },
  {
    icon: "/Images/reachmore.svg",
    title: "Reach more buyers",
    description:
      "Redfin is the #1 brokerage website, with five times more traffic than the next closest",
  },
];

const WhyChooseUs = () => {
  return (
    <Box>
      <Box sx={{ padding: {md: 4}, mt: 2 }}>
        <Typography sx={{fontSize: {xs: "30px", sm: "32px", md: "34px", lg: "36.92px"}, fontWeight: 700, color: "#484848"}} align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <Typography sx={{fontSize: {xs: "14px", sm: "16px", md: "17px", lg: "19.69px"}, fontWeight: 400, color: "#484848"}} align="center" gutterBottom>
          We provide full service at every step
        </Typography>
        <Grid container spacing={4} mt={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  padding: "1rem",
                  borderRadius: "13.44px",
                  transition: "background-color 0.5s ease, color 0.5s ease",
                  color: "333333",
                  "&:hover": {
                    backgroundColor: "#343433",
                    color: "#fff",
                  },
                 
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // gap: "36px",
                    height: {md: "360px"},
                  }}
                >
                  <Box
                    sx={{
                      width: "143px",
                      height: "160px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      layout="responsive"
                      // objectFit="cover"
                      width={74}
                      height={74}
                    />
                  </Box>
                 <Box>
                 <Typography sx={{fontSize: {xs: "20px", sm: "22px", md: "23px", lg: "25.75px"}, fontWeight: 700, }} gutterBottom>
                    {item.title}
                  </Typography>
                 </Box>
                  <Box>
                  <Typography sx={{fontSize: {xs: "14px", sm: "15px", md: "16px", lg: "17.23px"}, fontWeight: 400, }} >
                    {item.description} <Image
                      src="/Images/starWhy.svg"
                      alt="star"
                      width={14}
                      height={14}
                    />
                  </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
