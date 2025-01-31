"use client";

import { Breadcrumbs, Typography, Link as MuiLink, Container, Box } from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Heading() {
  const pathname = usePathname(); // Get the current path
  const pathSegments = pathname.split("/").filter(Boolean); // Split and filter empty segments

  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const isLast = index === pathSegments.length - 1;
    const routePath = "/" + pathSegments.slice(0, index + 1).join("/");

    // Capitalize the segment for display
    const displayName = segment
      .replace(/-/g, " ") 
      .replace(/\b\w/g, (char) => char.toUpperCase()); 

    return isLast ? (
      <Typography key={routePath} sx={{ color: "#B3A87A", fontWeight: 400, fontSize: "17.68px" }}>
        {displayName}
      </Typography>
    ) : (
      <MuiLink
        key={routePath}
        component={Link}
        href={routePath}
        underline="hover"
        color="inherit"
      >
        {displayName}
      </MuiLink>
    );
  });

  return (
   <Box sx={{ py: 4, px: {xs: 1, sm: 3}}}>
     <Breadcrumbs aria-label="breadcrumb" separator={<ArrowForwardIosIcon sx={{fontSize: "10px"}}/>}>
      <MuiLink component={Link} href="/" underline="hover" sx={{ color: "#777777", fontWeight: 400, fontSize: "17.68px" }}>
        Home
      </MuiLink>
      {breadcrumbLinks}
    </Breadcrumbs>
    <Typography sx={{ fontSize: "37px", fontWeight: 600, color: "#484848" }}>FAQ</Typography>
   </Box>
  );
}

export default Heading;
