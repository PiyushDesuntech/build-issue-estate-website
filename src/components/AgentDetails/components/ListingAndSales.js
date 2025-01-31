import { Box, Typography } from "@mui/material";
import React from "react";

export default function ListingAndSales() {
  return (
    <Box mt={4}>
      <Box sx={{display: "flex", justifyContent: "space-between", flexWrap: "wrap",gap: 1}}>
        <Typography
          sx={{ fontWeight: 700, fontSize: "22.07px", color: "#2A2A33" }}
        >
          Tom Wilson's listings & sales (13)
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography sx={{fontSize: "15.45px", fontWeight: 400, color: "#2A2A33"}}>
            <span style={{ color: "#FF5A50", fontWeight: "bold", fontSize:"20px" }}>●</span> For Sale
          </Typography>
          <Typography sx={{fontSize: "15.45px", fontWeight: 400, color: "#2A2A33"}}>
            <span style={{ color: "#985DFF", fontWeight: "bold", fontSize:"20px" }}>●</span> For
            Rent
          </Typography>
          <Typography sx={{fontSize: "15.45px", fontWeight: 400, color: "#2A2A33"}}>
            <span style={{ color: "#F2A619", fontWeight: "bold", fontSize:"20px" }}>●</span> Sold
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: { xs: "400px", sm: "619px" }, mt: 2 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188820.8566294344!2d-71.13483317985275!3d42.314247504110284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2C%20USA!5e0!3m2!1sen!2sin!4v1737725518497!5m2!1sen!2sin"
          width="100%"
          height="100%"
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          style={{ border: "none" }}
        ></iframe>
      </Box>
    </Box>
  );
}
