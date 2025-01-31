"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Pagination,
  Chip,
  IconButton,
  Divider,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const PropertyGridView = ({properties}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handlePropertyClick = (id) => {
    router.push(`/property-list/property-details/${id}`);
  };

  const itemsPerPage = 9;
  const totalPages = Math.ceil(properties.length / itemsPerPage);

  const currentProperties = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ padding: {xs: 1, sm: 3} }}>
      <Grid container spacing={2}>
        {currentProperties.map((property) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={property.id}
            sx={{ py: 2, cursor: "pointer" }}
            onClick={() => handlePropertyClick(property.id)}
          >
            <Box
              sx={{
                // border: "2px solid #D8D8D8",

                borderRadius: 2,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
                // p: "14px",
                justifyContent: "space-between",
                // transition: "transform 0.3s ease-in-out",
                // "&:hover": {
                //   transform: "scale(1.02)",
                //   boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                // },
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  p: "14px",
                }}
              >
                <Box
                  sx={{
                    height:{xs: "220px", md:  "273px"},
                    width: { xs: "100%", sm: "100%" },
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${property.image})`,
                    borderRadius: 2,
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundRepeat: "no-repeat",
                    backgroundSize:"cover"
                  }}
                >
                  <Box sx={{ display: "flex", gap: 2 }}>
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
                    <Chip
                      label="Featured"
                      sx={{
                        bgcolor: "#E8E1C4",
                        color: "#4D4D4D",
                        width: "fit-content",
                        borderRadius: 1,
                        fontSize: "14px",
                        "&:hover": {
                            background: "#3E4C66",
                            color: "#fff",
                          },
                      }}
                    />
                  </Box>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: {xs: "16px", md: "23px",lg: "27px"},
                          fontWeight: 600,
                          color: "#fff",
                        }}
                      >
                        ${property.price}
                      </Typography>
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
                        <FavoriteBorderIcon sx={{ fontSize: isSmallScreen? "16px" : "24px" }}/>
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
                        <SyncAltOutlinedIcon sx={{ fontSize: isSmallScreen? "16px" : "24px" }}/>
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
                        <ReplyOutlinedIcon sx={{ transform: "scaleX(-1)",fontSize: {xs: "small", sm: "medium"} }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>

                {/* Details Section */}
                <Box
                  sx={{
                    pt: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#B3A87A", fontSize: "17px" }}
                  >
                    {property.type}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: {xs: "20px", md: "26px",lg: "30px"}, color: "#484848", "&:hover":{color: "#B3A87A"} }}
                  >
                    {property.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 1,
                      color: "#484848",
                      fontSize: {xs: "16px", md: "18px",lg: "20px"},
                      fontWeight: 400
                    }}
                  >
                    <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {property.location}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: 300,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: {xs: "16px", md: "18px",lg: "20px"},
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      Beds: {property.beds}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: {xs: "16px", md: "18px",lg: "20px"},
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      Baths: {property.baths}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: {xs: "16px", md: "18px",lg: "20px"},
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      Sqft: {property.sqft}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 2,
                  py: 2,
                  alignItems: "center",
                  //   borderTop: '1px solid #ddd',
                  // flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={property.avatar}
                    alt={property.name}
                    sx={{ width: {xs: 40, sm: 50, md: 55, lg: 63}, height: {xs: 40, sm: 50, md: 55, lg: 63} }}
                  />
                  <Typography
                    sx={{
                      fontSize: {xs: "16px", md: "18px",lg: "21px"},
                      color: "#484848",
                    }}
                  >
                    {property.name}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ fontSize: {xs: "16px", md: "18px",lg: "21px"} }}
                >
                  {property.yearsAgo} years ago
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

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
              fontSize: "17px",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "#E8E1C4",
              border: "2px solid #E6E6E6",
              color: "#484848",
            },
            "& .MuiPaginationItem-previousNext": {
              color: "#484848",
              border: "2px solid #E6E6E6",
              fontSize: "17px",
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

export default PropertyGridView;
