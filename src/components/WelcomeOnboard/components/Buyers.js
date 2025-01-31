"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  CardMedia,
  Container,
  Rating,
  Grid,
} from "@mui/material";
import StraightIcon from "@mui/icons-material/Straight";
import Image from "next/image";

const buyers = [
  {
    name: "Shrikant Sharma",
    budget: "Rs 35 - Rs 50 Lac",
    searchingSince: "Within 6 Months",
  },
  {
    name: "Manoj Kumar",
    budget: "Rs 35 - Rs 50 Lac",
    searchingSince: "Within 6 Months",
  },
  {
    name: "Saurabh Sharma",
    budget: "Rs 35 - Rs 50 Lac",
    searchingSince: "Within 6 Months",
  },
  {
    name: "Saurabh Sharma",
    budget: "Rs 35 - Rs 50 Lac",
    searchingSince: "Within 6 Months",
  },
];

const CustomArrow = ({ onClick, direction }) => (
  <Button
    onClick={onClick}
    sx={{
      minWidth: 0,
      width: 52,
      height: 52,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      color: "#000",
      borderRadius: "50%",
      ":hover": { backgroundColor: "#E8E1C4", border: "none" },
      marginLeft: direction === "right" ? "8px" : "0",
      p: 1,
      border: "1px solid #A5A5A5",
    }}
  >
    {direction === "left" ? (
      <StraightIcon sx={{ transform: "rotate(270deg)" }} />
    ) : (
      <StraightIcon sx={{ transform: "rotate(90deg)" }} />
    )}
  </Button>
);

const Buyers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef();

  return (
    <Box sx={{ px: { xs: 1 }, mt: 3 }}>
      <Box sx={{ position: {xs:"unset", sm: "relative"}, padding: {xs: 1, sm: "20px"} }}>
        <Typography
          sx={{ fontSize: "26px", fontWeight: 700, color: "#484848" }}
        >
          6000 Buyers are Looking for a Property in
        </Typography>
        <Typography
          sx={{ fontSize: "18px", fontWeight: 500, color: "#616161" }}
        >
          Reach out to Them Before Other Agents Do
        </Typography>

        <Box
          sx={{
            position: {xs: "unset", sm: "absolute"},
            top: {xs: "40%", sm: "10px"},
            right: "10px",
            display: "flex",
            alignItems: "center",
            zIndex: 2,
            mt: {xs: 2, sm: 0},
          }}
        >
          <CustomArrow
            direction="left"
            onClick={() => sliderRef.current.slickPrev()}
          />
          <CustomArrow
            direction="right"
            onClick={() => sliderRef.current.slickNext()}
          />
        </Box>

        {/* Slider */}
        <Slider {...settings} ref={sliderRef}>
          {buyers.map((buyer, index) => (
            <Box key={index} sx={{ p: { xs: 0, sm: 2 }, mt: 3 }}>
              <Card
                sx={{
                  p: 2,
                  backgroundColor: "#fff",
                  //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  boxShadow: "none",
                  border: "2px solid #D5D5D5",
                  // "&:hover": {
                  //   border: "none",
                  //   // boxShadow: 6,
                  //   // background: "#E8E1C4",
                  // },
                }}
              >
                <CardContent>
                  <Typography variant="h6">{buyer.name}</Typography>
                  <Grid container mt={2}>
                    <Grid
                      item
                      xs={6}
                      md={6}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#616161",
                        }}
                      >
                        Budget
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#616161",
                        }}
                      >
                        Searching Since
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      md={6}
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {buyer.budget}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {buyer.searchingSince}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box sx={{ px: 4, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#E0D8C3",
            "&:hover": {
              backgroundColor: "#3E4C66",
              color: "#fff",
            },
            color: "#000",
            minWidth: "233px",
            height: "53px",
            textTransform: "none",
            fontSize: "16px", 
            fontWeight: 500
          }}
        >
          Connect Now
        </Button>
        <Typography sx={{ mt: 1, fontSize: "18px", fontWeight: 500, color: "#616161"}}>
          Your Welcome Gift: <span style={{color: "#009681"}}>Get One Time Discount of Rs. 12,200</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Buyers;
