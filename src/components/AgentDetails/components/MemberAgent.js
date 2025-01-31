import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function MemberAgent() {
  return (
    <Box >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4.7}>
          <Box
            sx={{
                width: "100%",
                height: {
                  xs: "390px",
                  sm: "589px",
                //   md: "100%",
                },
                backgroundImage: "url(/Images/AgentDetails1.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column"
              }}
          >
            <Typography sx={{fontSize: "13.76px", fontWeight: 400, color: "#000000", background: "#fff", width: "fit-content", px: 2, py: "5px"  }}>MEMBER AGENT</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3.65}>
        <Box
            sx={{
                width: "100%",
                height: {
                  xs: "290px",
                  sm: "290px",
                //   md: "100%",
                },
                backgroundImage: "url(/Images/AgentDetails2.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column"
              }}
          >
           <Typography sx={{fontSize: "13.76px", fontWeight: 400, color: "#fff", background: "#000", width: "fit-content", px: 2, py: "5px" }}>For Sale $759,000</Typography>
          </Box>
        <Box
            sx={{
                width: "100%",
                height: {
                  xs: "290px",
                  sm: "290px",
                //   md: "100%",
                },
                backgroundImage: "url(/Images/AgentDetails3.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                mt: 1
              }}
          >
         <Typography sx={{fontSize: "13.76px", fontWeight: 400, color: "#fff", background: "#000", width: "fit-content", px: 2, py: "5px" }}>Sold</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3.65} sx={{display: "flex", flexDirection: {xs:"column", sm: "row", md: "column"}, gap: {xs: 0, sm: 1, md: 0}}}>
        <Box
             sx={{
                width: "100%",
                height: {
                  xs: "290px",
                  sm: "290px",
                //   md: "100%",
                },
                backgroundImage: "url(/Images/AgentDetails2.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column"
              }}
          >
            <Typography sx={{fontSize: "13.76px", fontWeight: 400, color: "#fff", background: "#000", width: "fit-content", px: 2, py: "5px" }}>For Rent $4,500/month</Typography>
          </Box>
        <Box
            sx={{
                width: "100%",
                height: {
                  xs: "290px",
                  sm: "290px",
                //   md: "100%",
                },
                backgroundImage: "url(/Images/AgentDetails2.svg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "column",
                mt: {xs: 1, sm: 0, md: 1}
              }}
          >
        <Typography sx={{fontSize: "13.76px", fontWeight: 400, color: "#fff", background: "#000", width: "fit-content", px: 2, py: "5px" }}>For Sale $1,099,000</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
