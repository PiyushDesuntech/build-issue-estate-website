"use client"
import React, { useState } from "react";
import { Box, Button, Container, Divider, FormControl, IconButton, ListItemText, MenuItem, Select, Typography } from '@mui/material'
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Heading from "./components/Heading";
import PropertyGridView from "./components/PropertyGridView";
import PropertyListView from "./components/PropertyListView";



export default function PropertyListIndex() {
    const [sort, setSort] = useState("Relevance");
    const [viewMode, setViewMode] = useState("grid");
    const handleSortChange = (event) => {
        setSort(event.target.value);
      };
      const menuOptions = [
        { label: "Relevance", value: "Relevance" },
        { label: "Price - Low to High", value: "PriceLowToHigh" },
        { label: "Price - High to Low", value: "PriceHighToLow" },
        { label: "Most Recent", value: "MostRecent" },
        { label: "Rate/sqft - Low to High", value: "RatePerSqftLowToHigh" },
        { label: "Rate/sqft - High to Low", value: "RatePerSqftHighToLow" },
      ];
    
      const menuItems = menuOptions.flatMap((option, index) => [
        <MenuItem
          key={option.value}
          value={option.value}
          sx={{
            fontWeight: sort === option.value ? 600 : "normal",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ListItemText sx={{ fontWeight: sort === option.value ? 600 : "normal" }}>
            {option.label}
          </ListItemText>
          {sort === option.value && (
            <CheckCircleOutlineIcon fontSize="small" color="success" />
          )}
        </MenuItem>,
        index < menuOptions.length - 1 && <Divider key={`divider-${index}`} />,
      ]);
  return (
   <Box sx={{backgroundColor: "#F7F7F7"}}>
     <Container maxWidth="xl" sx={{ px: { lg: 6,md: 1, xs: 2 } }} >
      <Heading/>
      <Box sx={{px: {xs: 1, sm: 3}}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          // border: "2px solid #D8D8D8",
          borderRadius: "8px",
          px: 4,
          py: 2,
          background: "#fff",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography sx={{fontSize: {xs: "14px", md: "17px"}, color: "#616161", fontWeight: 500}}>
          Showing 1 – {properties.length} of {properties.length} results
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: {xs: "none", md: "flex"}, gap: 2, alignItems: "center" }}>
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
                height: "42px",
              }}
            >
              Save Search
            </Button> */}
          </Box>
          <Typography sx={{fontSize: {xs: "14px", md: "17px"}, color: "#616161", fontWeight: 500}}>Sort By</Typography>
          <FormControl
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // No border around the field
              },
              "& .MuiOutlinedInput-root": {
                paddingRight: "8px", // Adjust padding for the dropdown icon
              },
              "& .MuiSelect-icon": {
                top: "calc(50% - 12px)", // Center align the arrow icon
                right: "8px", // Align icon to the right
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none", // No border on focus
              },
            }}
          >
            <Select
              value={sort}
              onChange={handleSortChange}
              displayEmpty
              renderValue={(selected) => {
                const selectedOption = menuOptions.find(
                  (option) => option.value === selected
                );
                return selectedOption ? selectedOption.label : "";
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: "8px", // Rounded corners for dropdown menu
                    boxShadow: 5, // Subtle shadow
                    marginTop: "30px",
                    "& .MuiMenuItem-root": {
                      padding: "12px 16px",
                    },
                    "& .MuiDivider-root": {
                      margin: "0 16px",
                    },
                  },
                },
              }}
              sx={{
                "& .MuiSelect-select": {
                  padding: "8px 16px",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              {menuItems}
            </Select>
          </FormControl>
        </Box>
      </Box>
      </Box>
      {viewMode === "grid" ? (
            <PropertyGridView properties={properties} view="grid" />
          ) : (
            <PropertyListView properties={properties} view="list" />
          )}
    </Container>
   </Box>
  )
}

const properties = [
    {
      id: 1,
      type: "Apartment",
      title: "Diamond Manor Apartment",
      location: "22-05 Astoria Blvd, Astoria",
      beds: 4,
      baths: 2,
      sqft: 150,
      price: 6500,
      yearsAgo: 4,
      image: "/Images/property1.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 2,
      type: "Modern Villa",
      title: "Gorgeous Villa Bay",
      location: "325 E 84th St, New York",
      beds: 2,
      baths: 1,
      sqft: 120,
      price: 8000,
      yearsAgo: 5,
      image: "/Images/porperty2.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 3,
      type: "Apartment",
      title: "Anyway Apartments",
      location: "932 1st Avenue NY",
      beds: 3,
      baths: 1,
      sqft: 330,
      price: 150,
      yearsAgo: 5,
      image: "/Images/porperty3.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 4,
      type: "Apartment",
      title: "Selway Apartments",
      location: "932 1st Avenue NY",
      beds: 3,
      baths: 1,
      sqft: 3300,
      price: 150,
      yearsAgo: 5,
      image: "/Images/porperty4.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 5,
      type: "Town House",
      title: "House on the Hollywood",
      location: "15-45 Ocean Blvd, Miami",
      beds: 3,
      baths: 2,
      sqft: 200,
      price: 8500,
      yearsAgo: 3,
      image: "/Images/porperty5.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 6,
      type: "Apartment",
      title: "Luxury Family Home",
      location: "19-33 Ditmars Blvd, Astoria",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/Images/porperty6.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 7,
      type: "Apartment",
      title: "Eaton Garth Penthouse",
      location: "25-25 Broadway, Astoria",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/Images/porperty7.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 8,
      type: "Apartment",
      title: "Skyper Pool Apartment",
      location: "318 E 84th St, New York",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/Images/porperty2.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 9,
      type: "Apartment",
      title: "North Dillard Street",
      location: "20-30 Steinway St, Queens",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/Images/porperty4.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 10,
      type: "Apartment",
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/Images/porperty4.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
    {
      id: 11,
      type: "Apartment",
      title: "Green Hill House",
      location: "30-25 Green Rd, California",
      beds: 6,
      baths: 4,
      sqft: 350,
      price: 9500,
      yearsAgo: 1,
      image: "/Images/porperty6.svg",
      tag: "For Sale",
      avatar: "/Images/client1.svg",
      name: "John Wilson",
    },
  ];