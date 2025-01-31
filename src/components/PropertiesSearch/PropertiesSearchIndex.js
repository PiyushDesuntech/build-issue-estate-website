"use client"
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GridViewIcon from "@mui/icons-material/GridView";
import Heading from "./components/Heading";
import AdvancedSearch from "./components/AdvancedSearch";
import NearbyProperties from "./components/NearbyProperties";
import PropertyListingGrid from "./components/PropertyListingGrid";
import PropertyListing from "./components/PropertyListing";


export default function PropertiesSearchIndex() {
  const [viewMode, setViewMode] = useState("grid"); // State to manage view mode

  return (
    <Container maxWidth="xl" sx={{ px: { lg: 7, xs: 1 } }}>
      <Heading />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          px: 3,
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: {xs:"26px", sm: "30px",md: "37px"}, fontWeight: 600, color: "#484848" }}
          >
            Properties Search
          </Typography>
        </Box>
        <Box sx={{ display: {xs: "none", md: "flex"}, gap: 2 }}>
          {/* <Button
            startIcon={<FavoriteBorderIcon />}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              color: "#4D4D4D",
              "&:hover": {
                background: "#E3E3E3",
                color: "#4D4D4D",
              },
              height: "50px",
            }}
          >
            Save Search
          </Button> */}
          <IconButton
            onClick={() => setViewMode("grid")}
            sx={{
              borderRadius: "8px",
              border: `2px solid #E3E3E3`,
              color: "#4D4D4D",
              "&:hover": {
                background: "#E3E3E3",
                color: "#4D4D4D",
              },
              background:`${
                viewMode === "grid" ? "#E3E3E3" : "#fff"
              }`,
              height: "50px",
              width: "50px",
            }}
          >
            <GridViewIcon />
          </IconButton>
          <IconButton
            onClick={() => setViewMode("list")}
            sx={{
              borderRadius: "8px",
              border: `2px solid #E3E3E3`,
              color: "#4D4D4D",
              "&:hover": {
                background: "#E3E3E3",
                color: "#4D4D4D",
              },
              background:`${
                viewMode === "list" ? "#E3E3E3" : "#fff"
              }`,
              height: "50px",
              width: "50px",
            }}
          >
            <FormatListBulletedIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={4}>
          <AdvancedSearch />
          <NearbyProperties />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          {/* Conditional rendering based on viewMode */}
          {viewMode === "grid" ? (
            <PropertyListingGrid view="grid" />
          ) : (
            <PropertyListing view="list" />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
