import { Box } from '@mui/material'
import React from 'react'
import ContactUsHeading from './components/ContactUsHeading'
import ContactInfo from './components/ContactInfo'

export default function ContactUsIndex() {
  return (
    <Box>
      <ContactUsHeading/>
      <ContactInfo/>
    </Box>
  )
}
