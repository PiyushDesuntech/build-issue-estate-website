import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
  Chip,
  IconButton,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const HomeCards = ({ property, onCardClick }) => {
  return (
    <Box>
      <Card
        sx={{
          height: "100%",
          borderRadius: "12px",
          boxShadow: 4,
          display: "flex",
          flexDirection: "column",
        }}
        onClick={() => onCardClick(property.locationSrc)}
      >
        <Box
          sx={{
            height: { xs: "252px", md: "200px", lg: "252px" },
            width: { xs: "100%" },
            backgroundImage: `url(${property.image})`,
            borderRadius: "12px 12px 0px 0px ",
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Box>
            <Chip
               label={property.type}
              sx={{
                bgcolor: "#3E4C66",
                color: "#fff",
                width: "fit-content",
                borderRadius: 1,
                fontSize: "14px",
                "&:hover": {bgcolor: "#E8E1C4",  color: "#4D4D4D",},
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            px: 2,
            pb: 2,
            pt: 1
          }}
        >
          <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Typography
              variant="subtitle2"
              sx={{ color: "#B3A87A", fontSize: "11px" }}
            >
              {property.homeType}
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <IconButton
               sx={{
                borderRadius: "3px",
                color: "#4D4D4D",
                "&:hover": {
                  background: "#E0D8C3",
                  color: "#4D4D4D",
                },
                height: "30px",
              }}
              >
                <ReplyOutlinedIcon sx={{ transform: "scaleX(-1)", fontSize: "20px" }} />
              </IconButton>
                <IconButton
                  sx={{
                    borderRadius: "3px",
                    color: "#4D4D4D",
                    "&:hover": {
                      background: "#E0D8C3",
                      color: "#4D4D4D",
                    },
                    height: "30px",
                  }}
                >
                  <FavoriteBorderIcon sx={{fontSize: "20px"}} />
                </IconButton>
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={{ color: "#222222", fontSize: {xs: "16px", md: "14px", lg: "17px"}, fontWeight: 700 }}
          >
            {property.title}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              color: "#484848",
              fontSize: {xs: "11px", md: "9px", lg: "11px"},
            }}
          >
            <PlaceOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            {property.address}
          </Typography>
          <Box sx={{ display: "flex", gap: 2, fontSize: {xs: "13px", md: "10px", lg: "13px"}, height: "100%" }}>
            <Typography sx={{fontSize: {xs: "13px", md: "10px", lg: "13px"}, color: "#222222", fontWeight: 400}}>
              Beds: {property.beds}  
              {/* | Price: $
            {property.price} */}
            </Typography>
            <Typography sx={{fontSize: {xs: "13px", md: "10px", lg: "13px"}, color: "#222222", fontWeight: 400}}>
            Baths: {property.baths} 
              {/* | Price: $
            {property.price} */}
            </Typography>
            {property.type === "For Rent" ? (
              <Typography sx={{fontSize: {xs: "13px", md: "10px", lg: "13px"}, color: "#222222", fontWeight: 400}}>
                Available: {property.dateAvailable}
              </Typography>
            ):(
              <Typography sx={{fontSize: {xs: "13px", md: "10px", lg: "13px"}, color: "#222222", fontWeight: 400}}>
                Sqft: {property.sqft}
              </Typography>
            )}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default HomeCards;
