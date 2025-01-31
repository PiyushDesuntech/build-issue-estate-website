import React from "react";
import OurMission from "./components/OurMission";
import WhyUs from "@/components/Home/compoments/WhyUs";
import { Box } from "@mui/material";
import AboutHeading from "./components/AboutHeading";
import ClientTestimonials from "../Home/compoments/ClientTestimonials";
import OurAgents from "./components/OurAgents";
import JoinUs from "../Home/compoments/JoinUs";
import HomeIndex from "../Home/HomeIndex";

export default function AboutUsIndex() {
  return (
    <Box>
      <AboutHeading />
      <OurMission />
      <WhyUs />
      <OurAgents/>
      <Box sx={{pb: {xs: 0, md: 5}}}>
      <ClientTestimonials title="Client Stories"/>
      </Box>
      <JoinUs/>
    </Box>
  )
}
