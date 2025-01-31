"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Pagination,
  Chip,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

const PropertyListView = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

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
    <Box sx={{ padding: { xs: 1, sm: 3 } }}>
      <Box>
        {currentProperties.map((property) => (
          <Box
            key={property.id}
            sx={{ py: 2, cursor: "pointer" }}
            onClick={() => handlePropertyClick(property.id)}
          >
            <Box
              sx={{
                // border: "2px solid #D8D8D8",

                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
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
                  flexDirection: { xs: "column", md: "row" },
                  p: "14px",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    height: { xs: "200px",sm: "250px", md: "249px" },
                    width: { xs: "100%", md: "304px" },
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${property.image})`,
                    borderRadius: "12px",
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
                    {/* <Chip
                      label="Featured"
                      sx={{
                        bgcolor: "#E8E1C4",
                        color: "#4D4D4D",
                        width: "fit-content",
                        borderRadius: 1,
                        fontSize: "14px",
                      }}
                    /> */}
                  </Box>
                </Box>

                {/* Details Section */}
                <Box
                  sx={{
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      // flexWrap: "wrap-reverse",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "24px", lg: "30px" },
                        color: "#484848",
                      }}
                    >
                      {property.title}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        mt: { xs: 2, sm: 0 },
                      }}
                    >
                      <IconButton
                        sx={{
                          borderRadius: "3px",
                          background: "rgba(32, 32, 32, 0.3)",
                          color: "#fff",
                          "&:hover": {
                            background: "#E0D8C3",
                            color: "#4D4D4D",
                          },
                          height: "34px",
                          width: "34px",
                        }}
                      >
                        <FavoriteBorderIcon />
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
                          height: "34px",
                          width: "34px",
                        }}
                      >
                        <SyncAltOutlinedIcon />
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
                          height: "34px",
                          width: "34px",
                        }}
                      >
                        <ReplyOutlinedIcon sx={{ transform: "scaleX(-1)" }} />
                      </IconButton>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: { xs: "column", sm: "row" }, // Stack items on small screens
                      maxWidth: { xs: "100%", sm: 600 }, // Full width on small screens
                      borderRadius: "12px",
                      background: "#F5F5F5",
                      p: { xs: 1, sm: 2 }, // Adjust padding for small screens
                      gap: { xs: 2, sm: 0 }, // Add spacing between items for column layout
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: { xs: "18px", sm: "21px" }, // Adjust font size
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      <BedOutlinedIcon sx={{ mr: 0.5 }} /> Beds: {property.beds}
                    </Typography>

                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        display: { xs: "none", sm: "block" }, // Hide vertical divider on small screens
                        backgroundColor: "#D2D2D2",
                        mx: 2,
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: { xs: "18px", lg: "21px" }, // Adjust font size
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      <BathtubOutlinedIcon sx={{ mr: 0.5 }} /> Baths:{" "}
                      {property.baths}
                    </Typography>

                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{
                        display: { xs: "none", sm: "block" }, // Hide vertical divider on small screens
                        backgroundColor: "#D2D2D2",
                        mx: 2,
                      }}
                    />

                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: { xs: "18px", lg: "21px" },
                        fontWeight: 400,
                        color: "#484848",
                      }}
                    >
                      <ApartmentOutlinedIcon sx={{ mr: 0.5 }} /> Sqft:{" "}
                      {property.sqft}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#484848",
                      fontSize: { xs: "14px", lg: "21px" },
                    }}
                  >
                    <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                    {property.location}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#484848",
                      fontSize: { xs: "14px", lg: "21px" },
                    }}
                  >
                    2BHK Apartment available for sale at garia please contact
                    for more details.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row", md: "column" },
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: { xs: "100%", md: "395px" },
                  border: "2px solid #BDB38B75",
                  background: "#FAF8EE",
                  borderRadius: {
                    xs: "0px 0px 12px 12px",
                    md: "0px 12px 12px 0px",
                  },
                  py: {xs: 1, md: 0}
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: {xs: "26px", md: "34px",lg: "39px"},
                    fontWeight: 600,
                    color: "#000",
                  }}
                >
                  ${property.price}
                </Typography>
               <Box sx={{ display: "flex",
                  flexDirection: { xs: "column", sm: "row", md: "column" },
                  justifyContent: "space-evenly",gap: 2}}>
               <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#E8E1C4",
                    color: "#484848",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#484848",
                      boxShadow: "none",
                    },
                    fontSize: "17px",
                    textTransform: "none",
                    borderRadius: "30px",
                    width: "228px",
                  }}
                >
                  Know More
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    border: "2px solid #9F9F9F",
                    bgcolor: "#fff",
                    color: "#484848",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#484848",
                      boxShadow: "none",
                    },
                    fontSize: "17px",
                    textTransform: "none",
                    borderRadius: "30px",
                    width: "228px",
                  }}
                >
                  {" "}
                  Contact Agent
                </Button>
               </Box>
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

export default PropertyListView;
