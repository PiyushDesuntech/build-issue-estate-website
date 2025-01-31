"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

export default function Main_image() {
  const images = [
    "/Images/Feature2.svg",
    "/Images/Feature1.svg",
    "/Images/Popular3.svg",
  ];

  const imageSets = [
    [ "/Images/Feature2.svg", "/Images/Feature1.svg",
    "/Images/Popular3.svg",
    ],

    [ "/Images/Feature1.svg","/Images/Feature2.svg",
      "/Images/Popular3.svg",
    ],

    ["/Images/Popular3.svg","/Images/Feature1.svg",
      "/Images/Feature2.svg",
    ],
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageSetIndex, setCurrentImageSetIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(null);
  const [activelowButton, setActivelowButton] = useState(null);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

    setActiveButton("prev");
    // setTimeout(() => setActiveButton(null), 10000);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

    setActiveButton("next");
    // setTimeout(() => setActiveButton(null), 10000);
  };

  const handlePrevImageSetClick = () => {
    setCurrentImageSetIndex((prevIndex) =>
      prevIndex === 0 ? imageSets.length - 1 : prevIndex - 1
    );

    setActivelowButton("prev");
    // setTimeout(() => setActivelowButton(null), 10000);
  };

  const handleNextImageSetClick = () => {
    setCurrentImageSetIndex((prevIndex) =>
      prevIndex === imageSets.length - 1 ? 0 : prevIndex + 1
    );

    setActivelowButton("next");
    // setTimeout(() => setActivelowButton(null), 10000);
  };

  return (
    <Box
      sx={{
        // position: "relative",
        bottom: { md: "40px", xs: "50px", sm: "50px" },
      }}
    >
      {/* Main Image Slider */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "1px",
          // position: "relative",

          //  border:"1px solid blue",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "5px", sm: "5px", md: "5px" },
            flexWrap: "wrap",
            padding: "4px",
            // border:"1px solid red"
          }}
        >
          <Box
            sx={{
              width: { xs: "30px", sm: "50px", md: "53px" },
              height: { xs: "30px", sm: "50px", md: "53px" },
              border: "1px solid #ADADAD",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              background: activeButton === "prev" ? "#E8E1C4" : "transparent",
              alignItems: "center",
              flexShrink: 0,
            }}
            onClick={handlePrevClick}
          >
            {/* <Image
              src="/Images/preview_prev.png"
              alt="Previous"
              width={20}
              height={24}
            /> */}
            <ArrowBackIosOutlinedIcon/>
          </Box>

          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: "100%",
              minHeight: "200px",
              height: "100%",
              width: { xs: "100%", sm: "95%", md: "100%" },
              aspectRatio: { xs: "4/3", sm: "16/9", md: "1440/588" },
              // border:"1px solid yellow",

              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </Box>

          <Box
            sx={{
              width: { xs: "30px", sm: "50px", md: "53px" },
              height: { xs: "30px", sm: "50px", md: "53px" },
              border: "1px solid #ADADAD",
              background: activeButton === "next" ? "#E8E1C4" : "transparent",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
            onClick={handleNextClick}
          >
            {/* <Image
              src="/Images/preview_next.png"
              alt="Next"
              width={20}
              height={24}
            /> */}
            <ArrowForwardIosOutlinedIcon/>
          </Box>
        </Box>
      </Box>

      {/* Lower Image Navigator */}
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          mt: { md: "30px", sm: "0px", xs: "0px" },
          position: "relative",
          bottom: { xs: "2px", sm: "2px" },
          // border:"1px solid brown",
          alignItems: "center",
          gap: { md: "20px", sm: "2px", xs: "2px" },
          px: "20px",
        }}
      >
        <Box
          sx={{
            // border:"1px solid red",
            position: "relative",
            bottom: { md: "28px", sm: "2px", xs: "2px" },
            // top:{sm:"2px",xs:"2px", md:"0px"},
            left: "20px",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: { md: "10px", sm: "3px", xs: "3px" },
          }}
        >
          {/* Price Section */}
          <Typography
            sx={{
              fontSize: { sm: "30px", sx: "30px", md: "40px" },
              fontWeight: "500",
            }}
          >
            $5500
          </Typography>

          {/* Location Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <LocationOnOutlinedIcon sx={{ fontSize: { xs: 20, md: 35 } }} />
            <Typography
              sx={{
                fontSize: { xs: "10px", md: "18px" },
                color: "#484848",
                lineHeight: "1.2",
              }}
            >
              22-05 Astoria Blvd, Astoria
            </Typography>
          </Box>

          {/* Beds and Baths Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "13px", md: "18px" },
                color: "#484848",
              }}
            >
              Beds: 4
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "13px", md: "18px" },
                color: "#484848",
              }}
            >
              Baths: 2
            </Typography>
          </Box>
        </Box>

        {/* lower slider images */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "50px",
            // border: "1px solid red",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "15px", md: "33px" },
              height: { xs: "15px", md: "33px" },
              border: "1px solid #ADADAD",
              borderRadius: "50%",
              background:
                activelowButton === "prev" ? "#E8E1C4" : "transparent",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
            onClick={handlePrevImageSetClick}
          >
            {/* <Image
              src="/Images/preview_prev.png"
              alt="Previous"
              width={10}
              height={14}
            /> */}
            <KeyboardArrowLeftOutlinedIcon/>
          </Box>

          {imageSets[currentImageSetIndex].map((image, index) => (
            <Box
              key={index}
              sx={{
                // height: "127px",
                // width: "167px",

                height: { xs: "63px", sm: "63px", md: "127px" },
                width: { xs: "83px", sm: "83px", md: "167px" },
                border:
                  currentImageIndex === index
                    ? "4px solid #E8E1C4"
                    : "1px solid",
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => setCurrentImageIndex(index)}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </Box>
          ))}

          <Box
            sx={{
              width: { xs: "15px", md: "33px" },
              height: { xs: "15px", md: "33px" },
              border: "1px solid  #ADADAD",
              background:
                activelowButton === "next" ? "#E8E1C4" : "transparent",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
            onClick={handleNextImageSetClick}
          >
            {/* <Image
              src="/Images/preview_next.png"
              alt="Next"
              width={10}
              height={14}
            /> */}
            <KeyboardArrowRightOutlinedIcon/>
          </Box>

          <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
            {currentImageIndex + 1}/{imageSets[currentImageSetIndex].length}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
