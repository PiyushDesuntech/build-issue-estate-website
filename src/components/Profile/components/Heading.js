"use client";

import { Breadcrumbs, Typography, Link as MuiLink, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Heading() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
   <Box sx={{ py: 4, px: {xs: 1, sm: 1}}}>
     <Breadcrumbs aria-label="breadcrumb" separator={<ArrowForwardIosIcon sx={{fontSize: "10px"}}/>}>
      <MuiLink component={Link} href="/" underline="hover" color="inherit">
        Home
      </MuiLink>
      <MuiLink component={Link} href="/my-profile" underline="hover" color="inherit">
         My Profile
      </MuiLink>
    </Breadcrumbs>
    <Typography sx={{ fontSize: "37px", fontWeight: 600, color: "#484848" }}>My Profile</Typography>
   </Box>
  );
}

export default Heading;