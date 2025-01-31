"use client";

import { Breadcrumbs, Typography, Link as MuiLink, Box } from "@mui/material";
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
      .replace(/-/g, " ") // Replace dashes with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

    return isLast ? (
      <Typography key={routePath} sx={{ color: "#B3A87A", fontWeight: 400, fontSize: "17.23px" }}>
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

  // Get the last segment for display in Typography
  const lastSegment = pathSegments[pathSegments.length - 1] || "Home";
  const lastSegmentDisplay = lastSegment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

  return (
    <Box sx={{ my: 4, px: 1 }}>
      <Breadcrumbs aria-label="breadcrumb" separator={<ArrowForwardIosIcon sx={{ fontSize: "10px" }} />}>
        <MuiLink component={Link} href="/" underline="hover" color="inherit" sx={{ fontWeight: 400, fontSize: "17.23px" }}>
          Home
        </MuiLink>
        {breadcrumbLinks}
      </Breadcrumbs>
      <Typography sx={{ fontWeight: 700, fontSize: "36px", color: "#484848" }}>
        {lastSegmentDisplay}
      </Typography>
    </Box>
  );
}

export default Heading;
