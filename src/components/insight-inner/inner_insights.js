"use client";
import React from "react";
import Main from "./components/inner_insight_main";
import Side from "./components/inner_insight_side";
import { Box, Container, Grid, useTheme, useMediaQuery, } from "@mui/material";
import Heading from "./components/Heading";
import SearchBar from "../Insights/components/SearchBar";
import CategoriesSidebar from "../Insights/components/CategoriesSidebar";
import LatestProperties from "../Insights/components/LatestProperties";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito, Arial, sans-serif",
  },
});

export default function InnerInsights() {
  const theme = useTheme();
      const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  React.useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // Clean up after component unmount
    };
  }, []);
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 3, lg: 6 } }}>
        <Heading />
        <ThemeProvider theme={theme}>
          <Grid container spacing={isMobile? 2 : 8}>
            {/* Main Content */}
            <Grid item xs={12} md={8}>
              <Main />
            </Grid>
            {/* Side Content */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", flexDirection: "column", gap: 4, pb: 3 }}
            >
              {/* <Side /> */}
              <SearchBar />
              <CategoriesSidebar />
              <LatestProperties />
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
    </Box>
  );
}
