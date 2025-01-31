"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Pagination,
  Chip,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

const PropertyListing = () => {
  const [sort, setSort] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handlePropertyClick = (id) => {
    router.push(`/property-list/property-details/${id}`);
  };

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
    },
  ];

  const itemsPerPage = 8;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Slice properties for the current page
  const currentProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ padding: 3 }}>
      {/* Filter and Sort Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          border: "2px solid #D8D8D8",
          borderRadius: "8px",
          px: 4,
          py: 2,
        }}
      >
        <Typography variant="body1">
          Showing 1 – {properties.length} of {properties.length} results
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography>Sort By</Typography>
          <FormControl
            variant="outlined"
            size="small"
            sx={{ "& .MuiOutlinedInput-root": { border: "none" } }}
          >
            <Select
              value={sort}
              onChange={handleSortChange}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", 
                },
                "& .MuiOutlinedInput-root": {
                  boxShadow: "none", 
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "none", 
                },
              }}
            >
              <MenuItem value="Default">Default</MenuItem>
              <MenuItem value="Price">Price</MenuItem>
              <MenuItem value="Newest">Newest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        {currentProperties.map((property) => (
          <Box
            key={property.id}
            sx={{ py: 2, cursor: "pointer" }}
            onClick={() => handlePropertyClick(property.id)}
          >
            <Box
              sx={{
                border: "2px solid #D8D8D8",
                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                backgroundColor: "#fff",
                p: "14px",
                justifyContent: "space-between",
                // transition: "transform 0.3s ease-in-out",
                // "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    height: { xs: "220px", sm: "303px" },
                    width: { xs: "100%", sm: "328px" },
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${property.image})`,
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Chip
                      label={property.tag}
                      sx={{
                        bgcolor: "#3E4C66",
                        color: "#fff",
                        width: "fit-content",
                        borderRadius: 1,
                        fontSize: "14px",
                        "&:hover": {
                            background: "#E0D8C3",
                            color: "#4D4D4D",
                          },
                      }}
                    />
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <IconButton
                      sx={{
                        borderRadius: "3px",
                        background: "rgba(32, 32, 32, 0.3)",
                        color: "#fff",
                        "&:hover": {
                          background: "#E0D8C3",
                          color: "#4D4D4D",
                        },
                      }}
                    >
                      <FavoriteBorderIcon sx={{fontSize: {xs: "small", sm: "medium"}}}/>
                    </IconButton>
                    <IconButton
                      sx={{
                        borderRadius: "3px",
                        background: "rgba(32, 32, 32, 0.3)",
                        color: "#fff",
                        "&:hover": {
                          background: "#E0D8C3",
                          color: "#4D4D4D",
                        },
                      }}
                    >
                      <SyncAltOutlinedIcon sx={{fontSize: {xs: "small", sm: "medium"}}}/>
                    </IconButton>
                    <IconButton
                      sx={{
                        borderRadius: "3px",
                        background: "rgba(32, 32, 32, 0.3)",
                        color: "#fff",
                        "&:hover": {
                          background: "#E0D8C3",
                          color: "#4D4D4D",
                        },
                      }}
                    >
                      <ReplyOutlinedIcon sx={{ transform: "scaleX(-1)", fontSize: {xs: "small", sm: "medium"} }} />
                    </IconButton>
                    <IconButton
                      sx={{
                        borderRadius: "3px",
                        background: "rgba(32, 32, 32, 0.3)",
                        color: "#fff",
                        "&:hover": {
                          background: "#E0D8C3",
                          color: "#4D4D4D",
                        },
                      }}
                    >
                      <CalculateOutlinedIcon sx={{ transform: "scaleX(-1)", fontSize: {xs: "small", sm: "medium"} }} />
                    </IconButton>
                  </Box>
                </Box>

                {/* Details Section */}
                <Box
                  sx={{
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#B3A87A", fontSize: "17px" }}
                  >
                    {property.type}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 600, fontSize: {xs: "16px", md: "18px",lg: "22px"}, color: "#484848", "&:hover": {color: "#B3A87A"} }}
                  >
                    {property.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      color: "#484848",
                      fontSize: {xs: "14px", md: "16px",lg: "17.68px"}
                    }}
                  >
                    <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5, mt: 1 }} />
                    {property.location}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="body2">
                      Beds: {property.beds}
                    </Typography>
                    <Typography variant="body2">
                      Baths: {property.baths}
                    </Typography>
                    <Typography variant="body2">
                      Sqft: {property.sqft}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Footer Section */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 2,
                  py: {xs: 1, md: 3},
                  //   borderTop: '1px solid #ddd',
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {xs: "16px", md: "27px"},
                    fontWeight: 600,
                    color: "#484848",
                  }}
                >
                  ${property.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {property.yearsAgo} years ago
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Pagination Section */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#484848",
              border: "2px solid #E6E6E6",
              fontSize: "17.68px",
              width: "56.84px", 
              height: "56.84px", 
               borderRadius: "50%"
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#E8E1C4",
              border: "2px solid #E6E6E6",
              color: "#484848",
            },
            "& .MuiPaginationItem-previousNext": {
              color: "#484848",
              border: "2px solid #E6E6E6",
              fontSize: "17.68px",
              width: "56.84px",
              height: "56.84px",
              borderRadius: "50%"
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "#E8E1C4",
              border: "2px solid #E6E6E6",
            },
          }}
        />{" "}
      </Box>
    </Box>
  );
};

export default PropertyListing;
