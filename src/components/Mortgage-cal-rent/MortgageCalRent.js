"use client";
import React from "react";
import { Box } from "@mui/material";
import Heading from "./components/Heading";
import RentCalculator from "./components/RentCalculator";
import HeroSection from "./components/HeroContent";
import RentalCostsSection from "./components/RentalCostsSection";

export default function MortgageCalRent() {
  return (
    <Box sx={{
      backgroundColor: '#F7F7F7',
      // minHeight: '100vh',
      minWidth: '51px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: { 
        xs: '24px',
        sm: '32px',
        md: '40px',
        lg: '48px' 
      },
      overflow: 'hidden',
      // position: 'relative'
    }}>
      {/* Heading Section - Adjusted left padding */}
      <Box sx={{
        // paddingLeft: { 
        //   xs: '20px',
        //   sm: '40px',
        //   md: '80px',
        //   lg: '50px' 
        // },
        // paddingRight: { 
        //   xs: '20px',
        //   sm: '40px',
        //   md: '80px',
        //   lg: '120px' 
        // },
        paddingTop: { 
          xs: '16px',
          sm: '24px',
          md: '32px' 
        },
        marginBottom: { 
          xs: '0',
          sm: '0',
          md: '0',
          // lg: '-140px' 
        },
        // zIndex: 2,
        // width: '100%',
        // boxSizing: 'border-box'
      }}>
        <Heading />
      </Box>

      {/* Hero Section - Adjusted left padding */}
      <Box sx={{
        // zIndex: 1,
        // width: '100%',
        // paddingLeft: { 
        //   xs: '20px',
        //   sm: '40px',
        //   md: '50px',
        //   lg: '0px' 
        // },
        // paddingRight: { 
        //   xs: '20px',
        //   sm: '40px',
        //   md: '80px',
        //   lg: '120px' 
        // },
        // paddingTop: { 
        //   md: '10px' 
        // },

        // transition: 'padding 0.3s ease',
        // boxSizing: 'border-box'
      }}>
        <HeroSection />
      </Box>

      {/* Rent Calculator Section - Adjusted left padding */}
      <Box sx={{
        width: '100%',
        // paddingLeft: { 
        //   xs: '20px',
        //   sm: '40px',
        //   md: '80px',
        //   lg: '60px' 
        // },
        // paddingRight: { 
        //   xs: '20px',
        //   sm: '40px',
        //   md: '80px',
        //   lg: '120px' 
        // },
        boxSizing: 'border-box'
      }}>
        <RentCalculator />
      </Box>

      {/* Rental Costs Section - Adjusted margins and width */}
      <Box sx={{
        // paddingLeft: { 
        //   xs: '20px',
        //   sm: '0' 
        // },
        // paddingRight: { 
        //   xs: '20px',
        //   sm: '0' 
        // },
        // marginLeft: { 
        //   xs: '0',
        //   sm: '-40px',
        //   md: '-80px',
        //   lg: '-173px' 
        // },
        // width: { 
        //   xs: 'auto',
        //   sm: 'calc(100% + 80px)',
        //   md: 'calc(100% + 160px)',
        //   lg: 'calc(100% + 240px)' 
        // },
        transition: 'all 0.3s ease',
        // boxSizing: 'border-box',
        // maxWidth: { 
        //   xs: '100%',
        //   sm: 'calc(100% + 80px)',
        //   md: 'calc(100% + 160px)',
        //   lg: 'calc(100% + 240px)' 
        // }
      }}>
        <RentalCostsSection />
      </Box>
    </Box>
  );
}