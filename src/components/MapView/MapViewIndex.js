"use client";
import React, { useState } from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import HomeCards from "./components/HomeCards";
import Filter from "./components/Filter";
import MapView from "./components/MapView";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeOptions from "./components/HomeOptions";

const properties = [
  {
    id: 1,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/Images/mapview1.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 2,
    title: "Villa Bay",
    type: "For Sale",
    address: "137 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/Images/mapview2.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.8877161996699!2d-71.09211213039339!3d42.373410164426055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41fb83f01%3A0xa59eb07b5f4331e6!2s137%20Willow%20St%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737013795316!5m2!1sen!2sin",
  },
  {
    id: 3,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/Images/mapview3.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 4,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/Images/mapview4.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 5,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/Images/mapview5.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 6,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/Images/mapview6.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 7,
    title: "Diamond Manor Apartment",
    type: "For Rent",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 0,
    dateAvailable: "12/10/2025",
    price: 3000,
    homeType: "Apartment",
    image: "/Images/mapview3.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
  {
    id: 8,
    title: "Villa Bay",
    type: "For Sale",
    address: "145 Willow St #2, Cambridge, MA 02141",
    beds: 2,
    baths: 2,
    sqft: 150,
    price: 500000,
    homeType: "Condo",
    image: "/Images/mapview4.svg",
    locationSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin",
  },
];

const MapViewIndex = () => {
  const [filters, setFilters] = useState({
    type: "",
    price: "",
    beds: "",
    baths: "",
    homeType: "",
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentView, setCurrentView] = useState({
    sort: "Recommended",
    view: "Photos",
  });

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.type === "" || property.type === filters.type) &&
      (filters.price === "" ||
        (filters.price === "<3000" && property.price < 3000) ||
        (filters.price === "3000-5000" &&
          property.price >= 3000 &&
          property.price <= 5000) ||
        (filters.price === ">5000" && property.price > 5000)) &&
      (filters.beds === "" || property.beds === filters.beds) &&
      (filters.baths === "" || property.baths === filters.baths) &&
      (filters.homeType === "" || property.homeType === filters.homeType)
      //   (filters.address === "" ||
      //     property.address.toLowerCase().includes(filters.address.toLowerCase()))
    );
  });

  const handleCardClick = (locationSrc) => {
    setSelectedLocation(locationSrc);
  };
  const handleSortChange = (sortType) => {
    setCurrentView({ ...currentView, sort: sortType });
  };

  const handleViewChange = (viewType) => {
    setCurrentView({ ...currentView, view: viewType });
  };
  return (
    <Box sx={{ background: "#F7F7F7" }}>
      <Container maxWidth="xl" sx={{ px: { lg: 4, xs: 1 }, py: 3 }}>
        <Filter filters={filters} setFilters={setFilters} />
        <Grid
          container
          // spacing={3}
          sx={{
            display: "flex",
            flexWrap: "wrap-reverse",
            mt: -1,
            height: { xs: "100%", md: "100vh" },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              height: "100%",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              py: 2,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              pr:{xs: 0, md: 1}
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                sx={{ fontSize: "17.79px", fontWeight: 700, color: "#000" }}
              >
                Pleasant Hill, A
              </Typography>
              {/* <HomeOptions
                totalHomes={filteredProperties.length}
                currentView={currentView}
                onSortChange={handleSortChange}
                onViewChange={handleViewChange}
              /> */}
            </Box>
            <Grid container spacing={2}>
              {filteredProperties.map((property) => (
                <Grid item xs={12} sm={6} key={property.id}>
                  <HomeCards
                    property={property}
                    onCardClick={handleCardClick}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{
              position: "sticky",
              top: 0,
              height: "100%",
              overflow: "hidden",
              pt: { xs: 0, md: 3 },
              pl: { xs: 0, md: 1 },
            }}
          >
            <MapView locationSrc={selectedLocation} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MapViewIndex;
