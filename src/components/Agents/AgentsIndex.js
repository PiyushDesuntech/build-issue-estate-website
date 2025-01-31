"use client"
import { Box, Container, IconButton, } from "@mui/material";
import React, { useState } from "react";
import Heading from "./components/Heading";
import GridViewIcon from "@mui/icons-material/GridView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AgentsGridView from "./components/AgenttsGridView";
import AgentListView from "./components/AgentListView";


export default function AgentsIndex() {
    const [viewMode, setViewMode] = useState("grid");
  return (
    <Container maxWidth="xl" sx={{ px: { lg: 7, xs: 2 } }}>
      <Heading />
      {/* <Box
        sx={{
          width: "100%",
          display: {xs: "none", md: "flex"},
          gap: {xs: 1, md: 2},
          justifyContent: "flex-end",
          mt: -7,
          mb: 1,
        }}
      >
        <IconButton
          onClick={() => setViewMode("grid")}
          sx={{
            borderRadius: "8px",
            border: `2px solid #E3E3E3`,
            color: "#4D4D4D",
            "&:hover": {
              background: "#E3E3E3",
              color: "#4D4D4D",
            },
              background:`${
                viewMode === "grid" ? "#E3E3E3" : "#fff"
              }`,
            height: "50px",
            width: "50px",
          }}
        >
          <GridViewIcon />
        </IconButton>
        <IconButton
          onClick={() => setViewMode("list")}
          sx={{
            borderRadius: "8px",
            border: `2px solid #E3E3E3`,
            color: "#4D4D4D",
            "&:hover": {
              background: "#E3E3E3",
              color: "#4D4D4D",
            },
              background:`${
                viewMode === "list" ? "#E3E3E3" : "#fff"
              }`,
            height: "50px",
            width: "50px",
          }}
        >
          <FormatListBulletedIcon />
        </IconButton>
      </Box> */}
      {/* {viewMode === "grid" ? ( */}
            <AgentsGridView  />
          {/* ) : ( */}
            {/* <AgentListView  view="list" /> */}
          {/* )} */}
          
    </Container>
  );
}
