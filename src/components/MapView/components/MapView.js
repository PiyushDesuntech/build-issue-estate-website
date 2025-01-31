import { Box } from "@mui/material";
import React from "react";

export default function MapView({ locationSrc }) {
  return (
    <Box sx={{ height: {xs: 200, md: "100%"}, width: "100%" }}>
      <Box
        sx={{
        //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", 
        //   borderRadius: 2,
        //   border: "5px solid #fff",
          height: "100%",
          width: "100%",
        }}
      >
        <iframe
          src={
            locationSrc ||
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.550029100468!2d-71.0940433240291!3d42.373427971191546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370b41ff4d93d%3A0xd01743bec9a431df!2s145%20Willow%20St%20%232%2C%20Cambridge%2C%20MA%2002141%2C%20USA!5e0!3m2!1sen!2sin!4v1737012416802!5m2!1sen!2sin"
          }
          width="100%"
          height="100%"
          style={{
            top: 0,
            left: 0,
            border: 0,
          }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
}
