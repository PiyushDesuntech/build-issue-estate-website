"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const SectionContent = ({ heading, subheading, description, hasBottomMargin, isPriceRange }) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      gap: { xs: "12px", sm: "14px", md: "16px" },
      marginBottom: hasBottomMargin ? { xs: "20px", sm: "24px", md: "28px", lg: "32px" } : "0px",
      // padding: { 
      //   xs: "12px 16px",
      //   sm: "16px 20px",
      //   md: "0px" 
      // },
      // marginLeft: { 
      //   xs: "0px",
      //   sm: "0px",
      //   md: "42px" 
      // },
      // marginRight: { 
      //   xs: "0px",
      //   sm: "0px",
      //   md: "42px" 
      // },
      transition: "all 0.3s ease",
      minWidth: "51px"
    }}>
      {heading && (
        <Typography
          variant="h2"
          sx={{
            fontSize: { 
              xs: "18px",
              sm: "20px",
              md: "24px",
              lg: "31px" 
            },
            fontWeight: 600,
            color: "#303030",
            lineHeight: { xs: 1.3, sm: 1.2 },
            textAlign: { xs: "left", sm: "left" },
            transition: "font-size 0.3s ease"
          }}
        >
          {heading}
        </Typography>
      )}
      {subheading && (
        <Typography
          variant="h3"
          sx={{
            fontSize: { 
              xs: "15px",
              sm: "16px",
              md: "18px",
              lg: "22px" 
            },
            fontWeight: 700,
            color: "#314259",
            lineHeight: 1.2,
            display: 'inline',
            textAlign: { xs: "left", sm: "left" },
            transition: "font-size 0.3s ease"
          }}
        >
          {subheading}
        </Typography>
      )}
      {description && isPriceRange ? (
        <Box sx={{ 
          width: "100%", 
          textAlign: { xs: "left", sm: "left" },
          transition: "all 0.3s ease",
          minWidth: "51px"
        }}>
          {description.map((item, index) => (
            <Box key={index} sx={{ marginBottom: { xs: "8px", sm: "12px" } }}>
              {item.boldText && (
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "13px",
                      sm: "14px",
                      md: "16px",
                      lg: "17.78px" 
                    },
                    fontWeight: 700,
                    color: "#444444",
                    textAlign: { xs: "left", sm: "left" },
                    transition: "font-size 0.3s ease",
                    marginBottom: "4px"
                  }}
                >
                  {item.boldText}
                </Typography>
              )}
              {item.text && (
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "12px",
                      sm: "13px",
                      md: "15px",
                      lg: "17.78px" 
                    },
                    fontWeight: 400,
                    color: "#444444",
                    textAlign: { xs: "left", sm: "left" },
                    transition: "font-size 0.3s ease",
                    lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 }
                  }}
                >
                  {item.text}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ 
          width: "100%", 
          textAlign: { xs: "left", sm: "left" },
          transition: "all 0.3s ease",
          minWidth: "51px"
        }}>
          {description.map((item, index) => (
            <Box key={index} sx={{ marginBottom: { xs: "8px", sm: "12px" } }}>
              {item.boldText && (
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "13px",
                      sm: "14px",
                      md: "16px",
                      lg: "17.78px" 
                    },
                    fontWeight: 700,
                    color: "#444444",
                    display: "inline",
                    textAlign: { xs: "left", sm: "left" },
                    transition: "font-size 0.3s ease"
                  }}
                >
                  {item.boldText}
                </Typography>
              )}
              {item.text && (
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "12px",
                      sm: "13px",
                      md: "15px",
                      lg: "17.78px" 
                    },
                    fontWeight: 400,
                    color: "#444444",
                    display: "inline",
                    textAlign: { xs: "left", sm: "left" },
                    transition: "font-size 0.3s ease",
                    lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 }
                  }}
                >
                  {item.text}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default function RentalCostsSection() {
  const priceRangesSections = [
    {
      heading: "Price Ranges",
      subheading: "High Range – 35% of Gross Income",
      description: [
        { boldText: "Lorem Ipsum is simply dummy text of the printing and" },
        { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop" }
      ],
      hasBottomMargin: true,
    },
    {
      heading: "",
      subheading: "Mid Range – 25% of Gross Income",
      description: [
        { boldText: "Lorem Ipsum is simply dummy text of the printing and" },
        { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop" }
      ],
      hasBottomMargin: true,
    },
    {
      heading: "",
      subheading: "Low Range – 15% of Gross Income",
      description: [
        { boldText: "Lorem Ipsum is simply dummy text of the printing and" },
        { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop" }
      ],
    }
  ];
    
  const rentalCostsSections = [
    {
      heading: "Rental Costs",
      description: [
        { boldText: "The One-Third Rule:", text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took." }
      ],
      hasBottomMargin: true,
    },
    {
      heading: "",
      description: [
        { boldText: "Consider All Your Expenses:", text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took " }
      ],
      hasBottomMargin: true,
    },
    {
      heading: "",
      description: [
        { boldText: "Do Your Research:", text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tooka galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise" }
      ],
      hasBottomMargin: true,
    },
    {
      heading: "",
      description: [
        { boldText: "Consider Your Lifestyle:", text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised " }
      ],
      hasBottomMargin: true,
    }
  ];

  return (
    <Container maxWidth="xl" sx={{px: {xs: 3, lg: 8}}}>
      <Box
      sx={{
        width: "100%",
        // maxWidth: { xs: "100%", sm: "100%", md: "1330px" },
        backgroundColor: "#F7F7F7",
        // padding: { 
        //   xs: "16px",
        //   sm: "24px",
        //   md: "32px",
        //   lg: "40px" 
        // },
        display: "flex",
        flexDirection: "column",
        gap: { 
          xs: "20px",
          sm: "24px",
          md: "28px",
          lg: "32px" 
        },
        margin: "auto",
        transition: "all 0.3s ease",
        minWidth: "51px",
        boxSizing: "border-box"
      }}
    >
      <Box sx={{ 
        width: "100%",
        transition: "all 0.3s ease",
        minWidth: "51px"
      }}>
        {priceRangesSections.map((section, index) => (
          <SectionContent
            key={index}
            heading={section.heading}
            subheading={section.subheading}
            description={section.description}
            hasBottomMargin={section.hasBottomMargin}
            isPriceRange={true}
          />
        ))}
      </Box>

      <Box sx={{ 
        height: { 
          xs: "8px",
          sm: "12px",
          md: "16px" 
        } 
      }} />

      <Box sx={{ 
        width: "100%",
        transition: "all 0.3s ease",
        minWidth: "51px"
      }}>
        {rentalCostsSections.map((section, index) => (
          <SectionContent
            key={index}
            heading={section.heading}
            description={section.description}
            hasBottomMargin={section.hasBottomMargin}
            isPriceRange={false}
          />
        ))}
      </Box>
    </Box>
    </Container>
  );
}