"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Container,
  Button,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    images: ["/Images/boston1.svg"],
    title: "Allston",
  },
  {
    images: ["/Images/boston2.svg"],
    title: "Back Bay",
  },
  {
    images: ["/Images/boston3.svg"],
    title: "Beacon Hills",
  },
];

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: { xs: "-15px", sm: "-15px", lg: "-50px" },
      top: "53%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "#fff",
      color: "#D9D9D9",
      border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "#fff",
        border: "2px solid #BAAE78",
        color: "#BAAE78",
      },
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: { xs: "-15px", sm: "-15px", lg: "-50px" },
      top: "53%",
      transform: "translateY(-50%)",
      zIndex: 10,
      backgroundColor: "#fff",
      color: "#D9D9D9",
      border: "2px solid #D9D9D9",
      "&:hover": {
        backgroundColor: "#fff",
        border: "2px solid #BAAE78",
        color: "#BAAE78",
      },
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const PopularBoston = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      // {
      //   breakpoint: 1300,
      //   settings: {
      //     slidesToShow: 2,
      //   },
      // },
      {
        breakpoint: 1200,
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

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 2,
          px: { lg: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "baseline",
            px: {xs: 2, sm: 4, lg: 2}
          }}
        >
          <Box>
            <Typography sx={{ fontSize: {xs:"26px", md: "40px"}, fontWeight: 500 }}>
              Popular Boston Locations
            </Typography>
            <Typography sx={{ fontSize: {xs:"12px",md: "16px"}, fontWeight: 400 }}>
              Handpicked propertiesby our team.
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#585858",
                // textDecoration: "underline",
                "&:hover": { textDecoration: "underline" },
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              Explore All Properties{" "}
              <ArrowForwardIosOutlinedIcon sx={{ fontSize: "14px" }} />
            </Typography>
          </Box>
        </Box>
        <Slider {...settings}>
          {data.map((item, index) => (
            <Box key={index} mt={3} sx={{ p: { xs: 4, lg: 2 } }}>
              <Card
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  height: { xs: "280px", md: "310px", lg: "312px" },
                  width: { xs: "100%", lg: "100%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover   .image-container": {
                    transform: "scale(1.2)",
                    zIndex: 0,
                  },
                  border: "none",
                }}
              >
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  {item.images.map((img, imgIndex) => (
                    <Box
                      key={imgIndex}
                      className="image-container"
                      sx={{
                        height: { xs: "280px", md: "310px", lg: "312px" },
                        width: { xs: "100%", lg: "100%" },
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    width: "100%",
                    height: { xs: "80%", md: "80%", lg: "85%" },
                  }}
                >
                  <CardContent sx={{ color: "#fff" }}>
                    <Typography
                      component="a"
                      href="#"
                      sx={{
                        fontSize: "24px",
                        fontWeight: 600,
                        "&:hover": { color: "#E8E1C4" },
                        cursor: "pointer",
                        color: "#fff",
                        textDecoration:"none"
                      }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default PopularBoston;
