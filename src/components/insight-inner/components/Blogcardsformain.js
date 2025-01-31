"use client";

import React, { useState } from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

const allBlogCardsData = [
  {
    title: "10 Tips for Staging Your Home Like a Pro",
    date: "March 15, 2024",
    description: "Learn the secrets of professional home staging to make your property stand out in the market and attract potential buyers.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    author: "Sarah Johnson",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
  },
];

export default function BlogCards() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 1;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allBlogCardsData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <Box 
        sx={{ 
          padding: "24px 0", 
          backgroundColor: "#F7F7F7",
          minWidth: "51px",
          '@media (max-width: 600px)': {
            padding: "16px 0",
          }
        }}
      >
        <Grid container spacing={4}>
          {currentCards.map((card, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "7.38px",
                  padding: "16px",
                  border: "1.5px solid #ebebeb",
                  minWidth: "51px",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                  transform: "translateY(0)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    "& .blog-image": {
                      transform: "scale(1.05)",
                    },
                    "& .read-more .MuiSvgIcon-root": {
                      transform: "translateX(4px)",
                    },
                  },
                  '@media (max-width: 600px)': {
                    padding: "12px",
                    borderRadius: "4px",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                    },
                  }
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "220px",
                    position: "relative",
                    borderRadius: "7.38px",
                    overflow: "hidden",
                    marginBottom: "16px",
                    '@media (max-width: 900px)': {
                      height: "180px",
                    },
                    '@media (max-width: 600px)': {
                      height: "160px",
                      borderRadius: "4px",
                      marginBottom: "12px",
                    }
                  }}
                >
                  <Box
                    className="blog-image"
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={75}
                      fill
                      style={{
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                      priority={index < 2}
                      unoptimized
                    />
                  </Box>
                </Box>

                <Typography
                  sx={{
                    fontSize: "22.15px",
                    fontWeight: 700,
                    marginBottom: "12px",
                    color: "#484848",
                    lineHeight: 1.4,
                    overflow: "hidden",
                    transition: "color 0.3s ease",
                    '&:hover': {
                      color: "#000",
                    },
                    '@media (max-width: 900px)': {
                      fontSize: "20px",
                    },
                    '@media (max-width: 600px)': {
                      fontSize: "18px",
                      marginBottom: "8px",
                    }
                  }}
                >
                  {card.title}
                </Typography>

                <Box 
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    marginBottom: "12px",
                    '@media (max-width: 600px)': {
                      marginBottom: "8px",
                    }
                  }}
                >
                  <CalendarTodayIcon 
                    sx={{ 
                      fontSize: "17.23px", 
                      color: "#777777", 
                      marginRight: "8px",
                      '@media (max-width: 600px)': {
                        fontSize: "14px",
                      }
                    }} 
                  />
                  <Typography 
                    sx={{ 
                      color: "#777777", 
                      fontSize: "17.23px",
                      '@media (max-width: 600px)': {
                        fontSize: "14px",
                      }
                    }}
                  >
                    {card.date}
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#484848",
                    fontSize: "17.23px",
                    lineHeight: 1.6,
                    marginBottom: "16px",
                    overflow: "hidden",
                    '@media (max-width: 900px)': {
                      fontSize: "16px",
                    },
                    '@media (max-width: 600px)': {
                      fontSize: "14px",
                      marginBottom: "12px",
                    }
                  }}
                >
                  {card.description}
                </Typography>

                <Box 
                  sx={{ 
                    marginTop: "auto", 
                    borderTop: "1px solid #EBEBEB", 
                    paddingTop: "12px",
                    '@media (max-width: 600px)': {
                      paddingTop: "8px",
                    }
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      '@media (max-width: 600px)': {
                        flexDirection: "row", // Keep row direction for mobile
                        alignItems: "center",
                        justifyContent: "space-between", // Maintain space between items
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        display: "flex", 
                        alignItems: "center",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateX(4px)",
                        }
                      }}
                    >
                      <Avatar
                        src={card.avatarUrl}
                        sx={{ 
                          width: 32, 
                          height: 32,
                          '@media (max-width: 600px)': {
                            width: 28,
                            height: 28,
                          }
                        }}
                      />
                      <Typography 
                        sx={{ 
                          marginLeft: "12px", 
                          fontSize: "17.23px", 
                          color: "#777777",
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "#484848",
                          },
                          '@media (max-width: 600px)': {
                            fontSize: "14px",
                            marginLeft: "8px",
                          }
                        }}
                      >
                        {card.author}
                      </Typography>
                    </Box>
                    <Box
                      className="read-more"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        color: "#00000099",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          "& .MuiSvgIcon-root": {
                            transform: "translateX(4px)",
                          },
                        },
                        '@media (max-width: 600px)': {
                          marginLeft: "auto", // Push to the right
                        }
                      }}
                    >
                      <Typography 
                        sx={{ 
                          fontSize: "17.23px", 
                          fontWeight: "500", 
                          lineHeight: 1,
                          color: "#00000099",
                          '@media (max-width: 600px)': {
                            fontSize: "14px",
                          }
                        }}
                      >
                        Read More
                      </Typography>
                      <KeyboardArrowRightIcon 
                        sx={{ 
                          fontSize: 17, 
                          color: "#00000099",
                          transition: "transform 0.3s ease",
                          '@media (max-width: 600px)': {
                            fontSize: 14,
                          }
                        }} 
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}