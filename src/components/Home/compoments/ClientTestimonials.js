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
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    role: "Sales Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat leo nisi, in elementum mi feugiat equat. In nisi urna, pretium in congue in, ultrices in turpisesent semper nulla vestibulum, pellentesque odio a, finibus auguespendisse potenti. ",
    avatar: "/Images/client1.svg",
    rating: 5,
  },
  {
    name: "Elin SkoGlund",
    role: "Sales Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat leo nisi, in elementum mi feugiat equat. In nisi urna, pretium in congue in, ultrices in turpisesent semper nulla vestibulum, pellentesque odio a, finibus auguespendisse potenti. ",
    avatar: "/Images/client2.svg",
    rating: 5,
  },
  {
    name: "Tor Myhrman",
    role: "Sales Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat leo nisi, in elementum mi feugiat equat. In nisi urna, pretium in congue in, ultrices in turpisesent semper nulla vestibulum, pellentesque odio a, finibus auguespendisse potenti. ",
    avatar: "/Images/client3.svg",
    rating: 5,
  },
];

const CustomArrow = ({ onClick, direction }) => (
  <Button
    onClick={onClick}
    sx={{
      minWidth: 0,
      width: {xs: 30, sm: 48},
      height: {xs: 32, sm: 52},
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      color: "#000",
      borderRadius: "4px",
      ":hover": { backgroundColor: "#E8E1C4", border: "none" },
      marginLeft: direction === "right" ? "8px" : "0",
      p: 1,
      border: "1px solid #A5A5A5",
    }}
  >
    {direction === "left" ? <ArrowBackIosNewIcon sx={{fontSize: {xs: "small", sm: "medium"}}}/> : <ArrowForwardIosIcon sx={{fontSize: {xs: "small", sm: "medium"}}}/>}
  </Button>
);

const ClientTestimonials = ({ title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1054,
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
    <Container maxWidth="xl" sx={{ px: { lg: 5, xs: 0 }, mt: {xs: 1, md: 3}}}>
      <Box sx={{ position: "relative", padding: "20px" }}>
        <Box sx={{px: {xs: 0, sm: 1, md: 1, lg: 1}}}>
        <Typography
          sx={{
            fontSize: {xs:"26px", md: "40px"},
            fontWeight: 500,
            width: { xs: "70%", sm: "100%" },
            lineHeight: "26px"
          }}
          gutterBottom
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: {xs:"12px",md: "16px"}, fontWeight: 500, color: "#585858" }}
          gutterBottom
        >
          Morbi at felis ullamcorper ipsum.
        </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: {xs: "20px", sm: "10px"},
            right: {xs: "20px", sm: "25px",md: "25px", lg: "28px"},
            display: "flex",
            alignItems: "center",
            zIndex: 2,
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
          {testimonials.map((testimonial, index) => (
            <Box key={index} sx={{ px: { xs: 0, sm: 1 }, mt: 3, }}>
              <Card
                sx={{
                  p: {xs: 0,md: 1 ,lg: 2},
                  backgroundColor: "#fff",
                  //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  boxShadow: "none",
                  border: "1px solid #D5D5D5",
                  "&:hover": {
                    background: "#E8E1C4",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    border: "1px solid #E8E1C4",
                  },
                }}
              >
                <CardContent>
                <Box
                      sx={{
                        width: {xs: "60px", sm: "80px", md: "90px", lg: "100px"},
                        height: "100%",
                        ml: {xs: -1, md: -2}
                      }}
                    >
                      <Image
                        src="/Images/comma.svg"
                        alt="Colonial Realty Associates"
                        width={100}
                        height={100}
                        layout="responsive"
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  {/* <Image
                    src="/Images/comma.svg"
                    alt="Colonial Realty Associates"
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  /> */}
                  <Typography
                    sx={{ fontSize: {xs:"12px",md: "16px"}, fontWeight: 500, color: "#585858" }}
                    gutterBottom
                  >
                    {testimonial.text}
                  </Typography>
                  {/* <Typography sx={{fontSize: "16px", fontWeight: 500, color: "#585858", textDecoration: "underline", }}>Read full story</Typography> */}
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 80, height: 80 }}
                    />
                    <Box
                      ml={2}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography
                        sx={{
                          fontSize: {xs:"16px",md: "22px"},
                          fontWeight: 700,
                          color: "#585858",
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {xs:"12px",md: "16px"},
                          color: "#585858",
                          fontWeight: 500,
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                      <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        precision={0.5}
                        readOnly
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default ClientTestimonials;
