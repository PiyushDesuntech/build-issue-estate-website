import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Heading from "./Components/Heading";

import Main_image from "./Components/Main_image";

export default function Image_viewer() {
  return (
    <Box sx={{ backgroundColor: "#F7F7F7",py: 1 }}>
      <Container maxWidth="xl" sx={{px: 1 }} >
      <Heading/>
      <Main_image/>
      </Container> 
    </Box>
  );
}
