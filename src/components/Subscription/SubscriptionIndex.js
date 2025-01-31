import { Box, Container } from '@mui/material'
import React from 'react'
import Heading from './components/Heading'
import SavedSearches from './components/SavedSearches'
import FavouriteHomes from './components/FavouriteHomes'
import MyCompares from './components/MyCompares'
import OtherListingUpdates from './components/OtherListingUpdates'
import ColonialRiality from './components/ColonialReality'

export default function SubscriptionIndex() {
  return (
    <Box sx={{background: "#F7F7F7",}}>
      <Container maxWidth="xl" sx={{px: {xs: 1, lg: 6}}}>
        <Heading/>
        <SavedSearches/>
        <FavouriteHomes/>
        <MyCompares/>
        <OtherListingUpdates/>
        <ColonialRiality/>
      </Container>
    </Box>
  )
}
