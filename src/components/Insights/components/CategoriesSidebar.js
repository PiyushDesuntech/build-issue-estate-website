"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function CategoriesSidebar() {
  const [categories] = useState([
    { name: "Apartment", count: 2 },
    { name: "Condo", count: 1 },
    { name: "Family House", count: 1 },
    { name: "Modern Villa", count: 1 },
    { name: "Town House", count: 3 },
  ]);

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
            xs: "16px", 
            sm: "18px", 
            md: "20px", 
            lg: "23.08px" 
          },
          color: "#484848",
        }}
      >
        Categories
      </Typography>
      <Grid container>
        {categories.map((category, index) => (
          <Grid item xs={12} key={index}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  padding: { 
                    xs: "4px 0", 
                    sm: "6px 0", 
                    md: "8px 0" 
                  },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#555",
                  transform: "translateX(0)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#000",
                    transform: "translateX(8px)",
                    backgroundColor: "transparent",
                    "& .category-arrow": {
                      transform: "translateX(4px)",
                    },
                  },
                  "@media (max-width: 600px)": {
                    "&:hover": {
                      transform: "translateX(4px)",
                    },
                  },
                  wordWrap: "break-word",
                }}
              >
                <Box sx={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: { 
                    xs: 0.25, 
                    sm: 0.5, 
                    md: 1 
                  }
                }}>
                  <ArrowRightIcon
                    className="category-arrow"
                    sx={{ 
                      fontSize: { 
                        xs: "18px", 
                        sm: "20px", 
                        md: "22px", 
                        lg: "24px" 
                      }, 
                      color: "#484848", 
                      fontWeight: 900,
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                  <ListItemText
                    primary={category.name}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: { 
                          xs: "13px", 
                          sm: "14px", 
                          md: "16px", 
                          lg: "17.95px" 
                        },
                        color: "#484848",
                        transition: "color 0.3s ease-in-out",
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { 
                      xs: "13px", 
                      sm: "14px", 
                      md: "16px", 
                      lg: "17.95px" 
                    },
                    color: "#484848",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  ({category.count})
                </Typography>
              </ListItemButton>
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}