"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function LatestProperties() {
  const properties = [
    {
      id: 1,
      image: "./Images/Figure1.webp",
      title: "Diamond Manor Luxury Estate with amazing views",
      price: "$6500",
      details: "Beds: 4 Baths: 2 150 sqft",
    },
    {
      id: 2,
      image: "./Images/Figure1.webp",
      title: "Eaton Garth Penthouse",
      price: "$7500",
      details: "Beds: 4 Baths: 1 220 sqft",
    },
    {
      id: 3,
      image: "./Images/Figure1.webp",
      title: "Skyper Pool Apartment in downtown area",
      price: "$1200/mo",
      details: "Beds: 3 Baths: 2 110 sqft",
    },
  ];

  const router = useRouter();
  const handleCardClick = (id) => {
    router.push(`/property-list/property-details/${id}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "51px",
        backgroundColor: "#fff",
        borderRadius: { 
          xs: "4px", 
          sm: "5px", 
          md: "7.38px" 
        },
        padding: { 
          xs: "12px", 
          sm: "16px", 
          md: "20px", 
          lg: "24px" 
        },
        border: "1.5px solid #ebebeb",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          marginBottom: { 
            xs: "10px", 
            sm: "12px", 
            md: "16px" 
          },
          fontSize: { 
            xs: "18px", 
            sm: "20px", 
            md: "24px", 
            lg: "26.8px" 
          },
          color: "#484848",
        }}
      >
        Latest Properties
      </Typography>
      <Grid container spacing={{ xs: 1, sm: 1.5, md: 2 }}>
        {properties.map((property, index) => (
          <Grid item xs={12} key={property.id}>
            <Card
             onClick={() => handleCardClick(property.id)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                boxShadow: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                transform: "translateY(0)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-3px)",
                  "& .property-image": {
                    transform: "scale(1.05)",
                  },
                },
                "@media (max-width: 600px)": {
                  "&:hover": {
                    transform: "translateY(-2px)",
                  },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { 
                    xs: "80px", 
                    sm: "90px", 
                    md: "100px", 
                    lg: "110.77px" 
                  },
                  height: { 
                    xs: "80px", 
                    sm: "90px", 
                    md: "100px", 
                    lg: "110.77px" 
                  },
                  marginRight: { 
                    xs: "10px", 
                    sm: "12px", 
                    md: "16px" 
                  },
                  borderRadius: { 
                    xs: "4px", 
                    sm: "5px", 
                    md: "7.38px" 
                  },
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <Box
                  className="property-image"
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 90px, (max-width: 1024px) 100px, 110.77px"
                    style={{
                      objectFit: "cover",
                    }}
                    priority={index === 0}
                    unoptimized
                  />
                </Box>
              </Box>
              <CardContent
                sx={{
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  flex: 1,
                  marginTop: { 
                    xs: "8px", 
                    sm: "10px", 
                    md: "12px", 
                    lg: "16px" 
                  },
                  "&:last-child": { paddingBottom: 0 },
                  maxWidth: {
                    xs: "calc(100% - 90px)", // Account for image width and margin on mobile
                    sm: "calc(100% - 102px)", // Account for image width and margin on tablet
                    md: "calc(100% - 116px)", // Account for image width and margin on desktop
                    lg: "calc(100% - 126.77px)", // Account for image width and margin on large screens
                  },
                }}
              >
                <Typography
                  component="div"
                  sx={{
                    fontSize: { 
                      xs: "14px", 
                      sm: "16px", 
                      md: "18px", 
                      lg: "20.52px" 
                    },
                    color: "#484848",
                    marginBottom: { 
                      xs: "2px", 
                      sm: "4px", 
                      md: "8px" 
                    },
                    fontWeight: 700,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#000",
                    },
                    display: "-webkit-box",
                    WebkitLineClamp: {
                      xs: 2, // 2 lines on mobile
                      sm: 1, // 1 line on larger screens
                    },
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: 1.2,
                    "&:hover": {color: "#E8E1C4"}
                  }}
                >
                  {property.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "14px", 
                      sm: "16px", 
                      md: "18px", 
                      lg: "20px" 
                    },
                    color: "#E8E1C4",
                    marginBottom: { 
                      xs: "2px", 
                      sm: "2px", 
                      md: "4px" 
                    },
                    fontWeight: 700,
                  }}
                >
                  {property.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { 
                      xs: "12px", 
                      sm: "14px", 
                      md: "16px", 
                      lg: "17.95px" 
                    },
                    color: "#484848",
                    fontWeight: 400,
                  }}
                >
                  {property.details}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}