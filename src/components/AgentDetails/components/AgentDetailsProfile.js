"use client"
import { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Link,
  IconButton,
  Chip,
} from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

const AgentDetailsProfile = () => {
  const [show, setShow] = useState(false);
  const phone = "91 456 643";
  const hiddenPhone = phone.slice(0, -3) + "***";

  return (
    <Box
      sx={{
        // maxWidth: 600,
        margin: "auto",
        // padding: 3,
        // border: '1px solid #ddd',
        // borderRadius: 2,
        // boxShadow: 3,
        mt: 3,
      }}
    >
      {/* Header Section */}
      <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
        Tom Willson
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center"}}>
      <Typography
      sx={{ fontSize: "12.52px", fontWeight: 400, color: "#484848", display: "flex", alignItems: "center" }}
    >
      Phone: {show ? phone : hiddenPhone}
    </Typography>
        <Chip
          label={show ? "Hide" : "Show"}
          onClick={() => setShow(!show)}
          sx={{ ml: 1, backgroundColor: "#878787", cursor: "pointer", borderRadius: "2px", color: "#FFFFFF", fontSize: "10px", height: "20px" }}
        />
      </Box>
      <Typography
        sx={{ fontSize: "12.52px", fontWeight: 400, color: "#484848" }}
      >
        Email:{" "}
        <Link
          href="mailto:tomwilson@apus.com"
          sx={{
            textDecoration: "none",
            fontSize: "12.52px",
            fontWeight: 400,
            color: "#484848",
          }}
        >
          tomwilson@apus.com
        </Link>
      </Typography>

      {/* Stats Section */}
      <Divider
        sx={{
          borderWidth: "0.71px",
          borderColor: "rgba(0, 0, 0, 0.12)",
          mt: 1
        }}
      />
      <Box
        mt={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "14.29px", fontWeight: 400 }}>
            199
          </Typography>
          <Typography sx={{ fontSize: "12.86px", fontWeight: 300 }}>
            Closed Sales
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderWidth: "0.71px",
            borderColor: "rgba(0, 0, 0, 0.12)",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "14.29px", fontWeight: 400 }}>
            $95.4M
          </Typography>
          <Typography sx={{ fontSize: "12.86px", fontWeight: 300 }}>
            Total Value
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderWidth: "0.71px",
            borderColor: "rgba(0, 0, 0, 0.12)",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "14.29px", fontWeight: 400 }}>
            $224K - $1.7M
          </Typography>
          <Typography sx={{ fontSize: "12.86px", fontWeight: 300 }}>
            Price Range
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderWidth: "0.71px",
            borderColor: "rgba(0, 0, 0, 0.12)",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ fontSize: "14.29px", fontWeight: 400 }}>
            $479.3K
          </Typography>
          <Typography sx={{ fontSize: "12.86px", fontWeight: 300 }}>
            Average Price
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{ my: 2, borderWidth: "0.71px", borderColor: "rgba(0, 0, 0, 0.12)" }}
      />

      {/* About Section */}
      <Typography sx={{ fontSize: {xs: "14.29px", sm: "20.31px"}, fontWeight: 700 }}>
       About Tom Willson
      </Typography>
      <Typography sx={{ fontSize: {xs:"12.86px", sm: "18px"}, fontWeight: 500 }}>
        Home Types:{" "}
        <span style={{ fontWeight: 300 }}>
          House, MultiFamily, Lot/Land, Condo, For Rent
        </span>
      </Typography>
      <Typography sx={{ fontSize: {xs:"12.86px", sm: "18px"}, fontWeight: 500 }} mt={1}>
        Years of Experience: <span style={{ fontWeight: 300 }}> 25</span>
      </Typography>

      {/* Links Section */}
      {/* <Box mt={2} sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ fontSize: "12.86px", fontWeight: 500 }}>
          <Link
            href="#"
            underline="none"
            sx={{
              mr: 2,
              color: "#00488A",
              fontSize: "12.86px",
              fontWeight: 500,
            }}
          >
            Agent Website
          </Link>
        </Typography>
        <IconButton href="#" size="small" sx={{ color: "#00488A" }}>
          <Facebook />
        </IconButton>
        <IconButton href="#" size="small" sx={{ color: "#00488A" }}>
          <Instagram />
        </IconButton>
      </Box> */}
    </Box>
  );
};

export default AgentDetailsProfile;
