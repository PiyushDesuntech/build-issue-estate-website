"use client"
import { Box, Container } from "@mui/material";
import React from "react";
import SearchBar from "./components/SearchBar";
import Tags from "./components/Tags";
import BlogCard from "./components/Blogcards";
import LatestProperties from "./components/LatestProperties";
import CategoriesSidebar from "./components/CategoriesSidebar";
import Heading from "./components/Heading";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 51,  // Minimum width
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function Insights() {
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <Box sx={{ backgroundColor: "#F7F7F7", minHeight: "100vh", minWidth: "51px" }}>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 1, sm: 2, md: 4 },
          pb: { xs: 6, sm: 8, md: 10 }, // Added bottom padding
          minWidth: "51px",
          maxWidth: "100% !important",
          overflowX: "hidden",
          ml: { xs: 0, sm: 1, md: 2 },
        }}
      >
        <Heading />
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
              gap: { xs: 2, sm: 3, md: 4 },
              mt: -1,
              px: { xs: 1, sm: 2, md: 3 },
              minWidth: "51px",
            }}
          >
            {/* Main Content */}
            <Box sx={{ minWidth: "51px" }}>
              <BlogCard />
            </Box>

            {/* Sidebar */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 2, sm: 3, md: 4 },
                mt: { xs: 1, sm: 2, md: 3 },
                minWidth: "51px",
              }}
            >
              {/* Search */}
              <Box sx={{ minWidth: "51px" }}>
                <SearchBar />
              </Box>

              {/* Categories */}
              <Box sx={{ minWidth: "51px" }}>
                <CategoriesSidebar />
              </Box>

              {/* Latest Properties */}
              <Box sx={{ minWidth: "51px" }}>
                <LatestProperties />
              </Box>

              {/* Tags */}
              <Box sx={{ minWidth: "51px" }}>
                <Tags />
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Container>
    </Box>
  );
}