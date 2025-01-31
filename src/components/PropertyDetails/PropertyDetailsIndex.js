import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import PropertyHero from './components/PropertyHero'
import Overview from './components/Overview'
import Request from './components/Request'

export default function PropertyDetailsIndex() {
  return (
    <Box sx={{pb:{md: 20, xs: 2}}}>
      <PropertyHero/>
      <Container maxWidth="xl" sx={{px: {lg: 7, xs: 3}, mt: 8}}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={8}>
                <Overview/>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Request/>
            </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
