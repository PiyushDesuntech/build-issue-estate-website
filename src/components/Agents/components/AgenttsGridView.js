"use client";
import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Pagination,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
  Divider,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material";
import Image from "next/image";

const agents = [
  {
    id: 1,
    name: "Tom Willson",
    role: "Marketing",
    phone: "91 456 9354",
    email: "infoagent@example.com",
    image: "/Images/agentList1.svg", 
  },
  {
    id: 2,
    name: "Thomas Joshe",
    role: "Sales",
    phone: "981 123 354",
    email: "infoagent@example.com",
    image: "/Images/agentList2.svg", 
  },
  {
    id: 3,
    name: "Isha Powell",
    role: "Marketing",
    phone: "91 456 9354",
    email: "infoagent@example.com",
    image: "/Images/agentList3.svg", 
  },
  {
    id: 4,
    name: "Agent Vinod",
    role: "Sales",
    phone: "981 123 354",
    email: "infoagent@example.com",
    image: "/Images/agentList4.svg", 
  },
  {
    id: 5,
    name: "Robert Louis",
    role: "Marketing",
    phone: "91 456 9354",
    email: "infoagent@example.com",
    image: "/Images/agentList5.svg", 
  },
  {
    id: 6,
    name: "Tuhin Powell",
    role: "Sales",
    phone: "981 123 354",
    email: "infoagent@example.com",
    image: "/Images/agentList6.svg", 
  },
];

const ITEMS_PER_PAGE = 10;

export default function AgentsGridView() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("Newest");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [visiblePhones, setVisiblePhones] = useState({});

  const handleShowPhone = (id, phone) => {
    setVisiblePhones((prev) => ({
      ...prev,
      [id]: phone,
    }));
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  // Simulate sorting (replace with actual logic if necessary)
  const sortedAgents = [...agents].sort((a, b) => {
    if (sort === "Newest") return b.id - a.id;
    if (sort === "Oldest") return a.id - b.id;
    if (sort === "Name") return a.name.localeCompare(b.name);
    return 0;
  });

  const paginatedAgents = sortedAgents.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <Box sx={{ paddingTop: "20px", px: {xs: 1,sm: 2, lg: 2}, pb: {xs:4, md: 10} }}>
      {/* Filter and Result Display */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          border: "2px solid #EBEBEB",
          borderRadius: "12px",
          px: 3,
          py: 2,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography variant="body1">
          Showing {Math.min((page - 1) * ITEMS_PER_PAGE + 1, agents.length)} -{" "}
          {Math.min(page * ITEMS_PER_PAGE, agents.length)} of {agents.length}{" "}
          results
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center"}}>
        <Typography>Sort By</Typography>
          <FormControl
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiOutlinedInput-root": {
                paddingRight: "8px",
              },
              "& .MuiSelect-icon": {
                top: "calc(50% - 12px)",
                right: "8px",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <Select
              value={sort}
              onChange={handleSortChange}
              label="Sort by"
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: "8px",
                    boxShadow: 5,
                    marginTop: "30px",
                    "& .MuiMenuItem-root": {
                      padding: "12px 16px",
                    },
                    "& .MuiDivider-root": {
                      margin: "0 16px",
                    },
                  },
                },
              }}
              sx={{
                "& .MuiSelect-select": {
                  padding: "8px 16px",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem value="Oldest">Oldest</MenuItem>
              <MenuItem value="Name">Name</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box> */}

      {/* Grid Display */}
      <Grid container spacing={isSmallScreen? 2 : 4} sx={{mt: {xs: 0, md: 0}}}>
        {paginatedAgents.map((agent) => (
          <Grid item xs={12} sm={6} md={4} key={agent.id}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "none",
                border: "2px solid #EBEBEB",
              }}
            >
              <Box>
                <Box p={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Image
                      src={agent.image}
                      alt={`${agent.name} profile`}
                      layout="responsive"
                      width={650}
                      height={500}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {xs: "20px", sm: "22px", md: "24px"},
                      fontWeight: 700,
                      color: "#484848",
                      mt: 3,
                    }}
                  >
                    {agent.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: {xs: "14px", sm: "16px", md: "18px"}, fontWeight: 400, color: "#6F6F6F" }}
                  >
                    {agent.role}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#484848" }}>
                    Phone: {visiblePhones[agent.id] || agent.phone.replace(/\d{3}$/, "***")}
                  </Typography>
                  {!visiblePhones[agent.id] && (
                    <Chip
                      label="Show"
                      clickable
                      sx={{ ml: 1, backgroundColor: "#878787", cursor: "pointer", borderRadius: "2px", color: "#FFFFFF" }}
                      onClick={() => handleShowPhone(agent.id, agent.phone)}
                    />
                  )}
                </Box>
                  <Typography
                    sx={{
                      fontSize: {xs: "14px", sm: "16px", md: "18px"},
                      fontWeight: 400,
                      color: "#484848",
                      mt: 1,
                    }}
                  >
                    Email: {agent.email}
                  </Typography>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: " flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    py: {xs: 1, md: 1},
                    px: 2,
                    mt: -1
                  }}
                >
                  <Button
                    size="large"
                    sx={{
                      marginTop: "10px",
                      border: "none",
                      textTransform: "none",
                      fontSize: {xs: "12px", sm: "14px", md: "16px"},
                      fontWeight: 400,
                      color: "#5D5D5D",
                    }}
                  >
                    View My Listings
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {/* <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <Pagination
          count={Math.ceil(sortedAgents.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handlePageChange}
        />
      </div> */}
    </Box>
  );
}
