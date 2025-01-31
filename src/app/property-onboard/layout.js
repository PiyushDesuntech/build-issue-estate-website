import TrialPack from '@/components/WelcomeOnboard/components/TrialPack'
import WelcomeOnboard from '@/components/WelcomeOnboard/components/WelcomeOnboard'
import { Box } from '@mui/material'
import React from 'react'

export default function layout({children}) {
  return (
    <Box sx={{background: "#F7F7F7"}}>
      {/* <WelcomeOnboard/> */}
      <Box>{children}</Box>
      {/* <TrialPack/> */}
    </Box>
  )
}
