"use client";
import React, { useState } from "react";
import { Box, Typography, InputBase, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";

const Side = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
  };

  const categories = [
    { name: "Apartment", count: 2 },
    { name: "Condo", count: 1 },
    { name: "Family House", count: 1 },
    { name: "Modern Villa", count: 1 },
    { name: "Town House", count: 3 },
  ];

  const nearbyProperties = [
    { name: "Diamond Mansion", link: "/properties/diamond-mansion" },
    { name: "Green Earth Residences", link: "/properties/green-earth" },
    { name: "Luxury Pool Apartments", link: "/properties/luxury-pool" },
  ];

  const tags = ["Apartment", "Estate", "Luxury", "Real", "Real Estate"];

  return (
    <Box
      sx={{
        padding: 4,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Search Section */}
      <Box
        sx={{
          padding: 3,
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #EAEAEA",
            borderRadius: "16px",
            width: "100%",
            backgroundColor: "#fff",
            overflow: "hidden",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.04)",
          }}
        >
          <InputBase
            sx={{
              flex: 1,
              padding: "16px 20px",
              fontSize: "16px",
              color: "#333",
              "::placeholder": {
                color: "#666",
                opacity: 1,
                fontSize: "20px",
                fontWeight: 400,
              },
              "& input": {
                padding: 0,
              },
            }}
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IconButton
            onClick={handleSearch}
            sx={{
              padding: "12px 16px",
              color: "#666",
              "&:hover": {
                backgroundColor: "transparent",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "28px",
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Categories Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            marginBottom: "16px",
            fontSize: "18px",
            color: "#333",
          }}
        >
          Categories
        </Typography>
        <List>
          {categories.map((category, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  padding: "8px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#555",
                  "&:hover": {
                    color: "#000",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ChevronRightIcon sx={{ fontSize: 20, color: "#666" }} />
                  <ListItemText
                    primary={category.name}
                    sx={{
                      "& span": {
                        fontSize: "15px",
                      },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#888",
                  }}
                >
                  ({category.count})
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Nearby Properties Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            marginBottom: "16px",
            fontSize: "18px",
            color: "#333",
          }}
        >
          Nearby Properties
        </Typography>
        <List>
          {nearbyProperties.map((property, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component="a"
                href={property.link}
                sx={{
                  padding: "8px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#555",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#000",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <ChevronRightIcon sx={{ fontSize: 20, color: "#666" }} />
                  <ListItemText
                    primary={property.name}
                    sx={{
                      "& span": {
                        fontSize: "15px",
                      },
                    }}
                  />
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Tags Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
          padding: "16px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "600",
            marginBottom: "16px",
            fontSize: "18px",
            color: "#333",
          }}
        >
          Tags
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                fontSize: "14px",
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: "8px 16px",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Side;
