"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import Heading from "./components/Heading";
import EditProfileMain from "./components/EditProfileMain";

export default function EditProfileIndex() {
  return (
    <Box
      sx={{
        backgroundColor: '#F7F7F7',
        // minHeight: '100vh',
        // width: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // gap: { xs: '8px', sm: '16px', md: '48px' },
        // overflow: 'hidden',
        // position: 'relative',
        // paddingBottom: { xs: '16px', sm: '32px', md: '200px' },
      }}
    >
      <Container maxWidth="xl" sx={{px: {xs: 2, lg: 7}}}>
      <Box
        // sx={{
        //   paddingLeft: { xs: '0px', sm: '16px', md: '50px' },
        //   paddingRight: { xs: '0px', sm: '16px', md: '32px' },
        //   paddingTop: { xs: '8px', sm: '16px', md: '32px' },
        //   width: '100%',
        //   boxSizing: 'border-box',
        // }}
      >
        <Heading />
        <EditProfileMain />
      </Box>
      </Container>
    </Box>
  );
}