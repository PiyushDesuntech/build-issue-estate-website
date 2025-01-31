import React from "react";
import Link from "next/link";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const properties = [
  {
    id: 1,
    image: "/Images/nearby1.svg", 
    title: "Diamond Manor",
    price: "$6500",
    beds: 4,
    baths: 2,
    sqft: 150,
  },
  {
    id: 2,
    image: "/Images/nearby2.svg",
    title: "Eaton Garth Penthouse",
    price: "$7500",
    beds: 4,
    baths: 1,
    sqft: 220,
  },
  {
    id: 3,
    image: "/Images/nearby3.svg",
    title: "Skyper Pool Apartment",
    price: "$1200/mo",
    beds: 3,
    baths: 2,
    sqft: 110,
  },
  {
    id: 4,
    image: "/Images/nearby4.svg",
    title: "North Dillard Street",
    price: "$5500",
    beds: 4,
    baths: 1,
    sqft: 120,
  },
];

const PropertyCard = ({ property }) => (
  <Link href={`/property-list/property-details/${property.id}`} passHref style={{textDecoration: "none"}}>
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "row", sm: "row" },
        mb: 1,
        boxShadow: "none",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <CardMedia
        component="img"
        image={property.image}
        alt={property.title}
        sx={{ width: { xs: 60, sm: 80,md: 60,lg: 100 }, height: { xs: 60, sm: 80,md: 60,lg: 100 } }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography sx={{ fontSize: { xs: "13px", lg: "20px" }, fontWeight: 700, color: "#484848", "&:hover": { color: "#B3A87A" } }} noWrap>
          {property.title}
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", lg: "20px" }, fontWeight: 700, color: "#B3A87A" }}>{property.price}</Typography>
        <Typography sx={{ fontSize: { xs: "11px", lg: "17px" }, fontWeight: 700, color: "#B3A87A" }}>
          Beds: {property.beds} Baths: {property.baths} Sqft: {property.sqft}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);

const NearbyProperties = () => (
  <Box p={3}>
    <Box
      sx={{
        padding: { xs: "20px", lg: "30px" },
        borderRadius: "8px",
        border: "2px solid #D8D8D8",
        bgcolor: "background.paper",
      }}
    >
      <Typography sx={{ mb: 2, fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" }, fontWeight: 700 }}>
        Nearby Properties
      </Typography>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </Box>
  </Box>
);

export default NearbyProperties;
