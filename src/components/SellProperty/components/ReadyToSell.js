import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function ReadyToSell() {
  return (
    <Box sx={{display: "flex", justifyContent: "center", width: "100%", mt: 10, mb: 10}}>
      <Box sx={{maxWidth: 1250, minHeight: 224, border: "1px solid #BD8F81", borderRadius: "12px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
        <Typography sx={{fontSize: {xs: "26px",md: "36px"}, fontWeight: 700, color: "#333333"}}>Ready to sell your home?</Typography>
        <Button  variant="contained"
          sx={{
            display: "flex",
            backgroundColor: "#E8E1C4",
            "&:hover": {
              backgroundColor: "#4D4D4D",
              color: "#fff",
            },
            color: "#333333",
            borderRadius: "8px",
            textTransform: "none",
            px: { xs: 2, sm: 2, md: 5, lg: "40px" },
            py: "10px",
            m: 2,
            fontSize: "16px",
            fontWeight: 700, 
          }}>Schedule a consultation</Button>
      </Box>
    </Box>
  )
}
