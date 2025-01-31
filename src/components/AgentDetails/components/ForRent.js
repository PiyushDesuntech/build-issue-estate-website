import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const properties = [
  {
    id: 1,
    price: "$2,850/mo",
    address: "14 Marion St APT 33 Brookline, MA 02446",
    details: "1 Bed, 1 Bath",
    image: "/Images/Rent1.svg", // Replace with your image paths
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

const ForRent = () => {
  return (
    <Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{ fontWeight: 700, fontSize: "22.07px", color: "#2A2A33" }}
        >
          For Sale
        </Typography>
        <Typography
          sx={{ fontWeight: 400, fontSize: "17.65px", color: "#2A2A33", mt: 1 }}
        >
          Active listings data currently unavailable.
        </Typography>
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: "22.07px", color: "#2A2A33", mt: 5 }} gutterBottom>
        For Rent ({properties.length})
      </Typography>
      <Grid container spacing={0.5} mt={3}>
        {properties.map((property) => (
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
                borderRadius: "4.29px"
              }}
            >
              <Box
               sx={{display: 'flex', justifyContent: "flex-end"}}
              >
                <Typography  sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  px: 1,
                  borderRadius: 1,
                  width: "fit-content",
                  fontSize: "15.45px",
                  fontWeight:  700
                }}>{property.price}</Typography>
              </Box>
              <Box >
                <Typography sx={{fontSize: "14.45px",
                  fontWeight:  700, color: "#fff"}}>
                  {property.address}
                </Typography >
                <Typography sx={{fontSize: "13.45px",
                  fontWeight:  400, color: "#fff"}}>
                  {property.details}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ForRent;
