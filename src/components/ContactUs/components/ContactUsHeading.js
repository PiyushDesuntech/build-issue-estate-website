"use client";

import {
  Breadcrumbs,
  Typography,
  Link as MuiLink,
  Container,
  Box,
} from "@mui/material";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ContactUsHeading() {
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
      <Typography key={routePath} color="#B3A87A">
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
    <Box
      sx={{
        width: "100%",
        height: {
          xs: "290px",
          sm: "290px",
          md: "290px",
        },
        backgroundImage: "url(/Images/contactus.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ px: { xs: 1, lg: 7 }, position: "relative", height: "100%" }}
      >
        <Box  sx={{
            position: "absolute",
            top: "30%",
            // left: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 2,
          }}>
            <Typography sx={{fontSize: {xs: "36px", sm: "46px", md: "52px", lg: "56px"}, fontWeight: 700, color: "#ffffff"}}>
              Contact
            </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: {xs: "none", md: 10, lg: 50},
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "baseline",
            padding: 2,
          }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            separator={<ArrowForwardIosIcon sx={{ fontSize: "10px" }} />}
            sx={{ color: "#fff" }}
          >
            <MuiLink
              component={Link}
              href="/"
              underline="hover"
              sx={{ color: "#fff" }}
            >
              Home
            </MuiLink>
            {breadcrumbLinks}
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUsHeading;
