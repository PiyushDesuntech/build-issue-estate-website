"use client";
import React, { useState } from "react";
import { Box, Grid, Typography, Pagination } from "@mui/material";

const properties = [
  {
    id: 1,
    price: "$2,850/mo",
    address: "14 Marion St APT 33 Brookline, MA 02446",
    details: "1 Bed, 1 Bath",
    image: "/Images/Rent1.svg",
  },
  {
    id: 2,
    price: "$2,450/mo",
    address: "230 Walnut St APT 47 Newton, MA 02460",
    details: "1 Bed, 1 Bath",
    image: "/Images/Rent2.svg",
  },
  {
    id: 3,
    price: "$6,500/mo",
    address: "73 Thatcher APT 302 Brookline, MA 02446",
    details: "4 Bed, 2 Bath",
    image: "/Images/Rent3.svg",
  },
  {
    id: 4,
    price: "$4,750/mo",
    address: "316 Saint Paul St #6A Brookline, MA 02446",
    details: "3 Bed, 1 Bath",
    image: "/Images/Rent4.svg",
  },
  {
    id: 5,
    price: "$2,850/mo",
    address: "6 Lake Shorer APT 4 Brighton, MA 02135",
    details: "1 Bed, 1 Bath",
    image: "/Images/Rent5.svg",
  },
  {
    id: 6,
    price: "$2,850/mo",
    address: "14 Marion St APT 33 Brookline, MA 02446",
    details: "1 Bed, 1 Bath",
    image: "/Images/Rent6.svg",
  },
];

const AgentSell = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate the indices of the properties to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProperties = properties.slice(startIndex, endIndex);

  return (
    <Box my={2}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "22.07px",
          color: "#2A2A33",
          mt: 5,
        }}
        gutterBottom
      >
        For Sell ({properties.length})
      </Typography>
      <Grid container spacing={0.5} mt={3}>
        {visibleProperties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Box
              sx={{
                backgroundImage: `url(${property.image})`,
                width: "100%",
                height: {
                  xs: "290px",
                  sm: "215px",
                },
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                p: 1,
                borderRadius: "4.29px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    px: 1,
                    borderRadius: 1,
                    width: "fit-content",
                    fontSize: "15.45px",
                    fontWeight: 700,
                  }}
                >
                  {property.price}
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14.45px",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {property.address}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13.45px",
                    fontWeight: 400,
                    color: "#fff",
                  }}
                >
                  {property.details}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Pagination
          count={Math.ceil(properties.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          //   color="primary"
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
        />
      </Box>
    </Box>
  );
};

export default AgentSell;
