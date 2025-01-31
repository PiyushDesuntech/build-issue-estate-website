import React from 'react'
import Heading from './components/Heading'
import MemberAgent from './components/MemberAgent'
import { Container, Grid } from '@mui/material'
import ContactAgent from './components/ContactAgent'
import AgentDetailsProfile from './components/AgentDetailsProfile'
import TransactionHistory from './components/TransactionHistory'
import ForRent from './components/ForRent'
import ListingAndSales from './components/ListingAndSales'
import AgentSell from './components/AgentSell'
import AgentReviews from './components/AgentReviews'
import ServiceAreas from './components/ServiceAreas'

export default function AgentDetailsIndex() {
  return (
    <Container maxWidth="xl" sx={{px: {xs: 3, lg: 9}, pb: 3}}>
      <Heading/>
      <MemberAgent/>
      <Grid container spacing={2} sx={{mt: 3}}>
        <Grid item xs={12} md={8.2}>
            <AgentDetailsProfile/>
            {/* <TransactionHistory/> */}
            <ForRent/>
            <ListingAndSales/>
            <AgentSell/>
            <AgentReviews/>
            <ServiceAreas/>
        </Grid>
        <Grid item xs={12} md={3.8}>
            <ContactAgent/>
        </Grid>
      </Grid>
    </Container>
  )
}
