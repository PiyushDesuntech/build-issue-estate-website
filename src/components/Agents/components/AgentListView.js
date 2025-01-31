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
} from "@mui/material";
import Image from "next/image";

const agents = [
  {
    id: 1,
    name: "Tom Willson",
    role: "Marketing",
    phone: "91 456 9***",
    email: "infoagent@example.com",
    image: "/Images/agentList1.svg",
  },
  {
    id: 2,
    name: "Thomas Joshe",
    role: "Sales",
    phone: "981 123 ***",
    email: "infoagent@example.com",
    image: "/Images/agentList2.svg",
  },
  {
    id: 3,
    name: "Tom Willson",
    role: "Marketing",
    phone: "91 456 9***",
    email: "infoagent@example.com",
    image: "/Images/agentList1.svg",
  },
  {
    id: 4,
    name: "Thomas Joshe",
    role: "Sales",
    phone: "981 123 ***",
    email: "infoagent@example.com",
    image: "/Images/agentList2.svg",
  },
  {
    id: 5,
    name: "Tom Willson",
    role: "Marketing",
    phone: "91 456 9***",
    email: "infoagent@example.com",
    image: "/Images/agentList1.svg",
  },
  {
    id: 6,
    name: "Thomas Joshe",
    role: "Sales",
    phone: "981 123 ***",
    email: "infoagent@example.com",
    image: "/Images/agentList2.svg",
  },
];

const ITEMS_PER_PAGE = 4;

export default function AgentListView() {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("Newest");

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
    <div style={{ paddingTop: "20px" }}>
      {/* Filter and Result Display */}
      <Box
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
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
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
            {/* <InputLabel>Sort by</InputLabel> */}
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
      </Box>

      {/* Grid Display */}
      <Grid container spacing={4} mt={3}>
        {paginatedAgents.map((agent) => (
          <Grid item xs={12} sm={12} md={12} key={agent.id}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "none",
                border: "2px solid #EBEBEB",
              }}
            >
              <Box>
                <Box p={2} sx={{ display: "flex", gap: 2, flexDirection: {xs: "column", sm: "row"}}}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: {xs: "100%", sm: "30%"},
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
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {xs: "24px", sm: "28px", md: "34px"},
                        fontWeight: 700,
                        color: "#484848",
                        mt: 3,
                      }}
                    >
                      {agent.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {xs: "18px", sm: "22px", md: "26px"},
                        fontWeight: 400,
                        color: "#6F6F6F",
                      }}
                    >
                      {agent.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {xs: "18px", sm: "22px", md: "26px"},
                        fontWeight: 400,
                        color: "#484848",
                        mt: 2,
                      }}
                    >
                      Phone: {agent.phone}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {xs: "18px", sm: "22px", md: "26px"},
                        fontWeight: 400,
                        color: "#484848",
                        mt: 1,
                      }}
                    >
                      Email: {agent.email}
                    </Typography>
                  </Box>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: " flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    py: 2,
                    px: 2,
                  }}
                >
                  <Button
                    size="large"
                    style={{
                      marginTop: "10px",
                      border: "none",
                      textTransform: "none",
                      fontSize: {xs: "18px", sm: "22px", md: "26px"},
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
    </div>
  );
}
