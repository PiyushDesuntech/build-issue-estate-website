"use client";

import React, { useState } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search Query:", searchQuery);
  };

  return (
    <Box
      sx={{
        padding: { 
          xs: "12px", 
          sm: "16px", 
          md: "24px", 
          lg: "39px" 
        },
        backgroundColor: "#fff",
        borderRadius: { 
          xs: "4px", 
          sm: "5px", 
          md: "7.38px" 
        },
        width: "100%",
        minWidth: "51px",
        border: "1.5px solid #ebebeb",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "2px solid #D8D8D8",
          borderRadius: { 
            xs: "4px", 
            sm: "5px", 
            md: "7.38px" 
          },
          width: "100%",
          backgroundColor: "#fff",
          overflow: "hidden",
        }}
      >
        <InputBase
          sx={{
            flex: 1,
            padding: { 
              xs: "8px 12px", 
              sm: "12px 16px", 
              md: "16px 20px" 
            },
            fontSize: { 
              xs: "13px", 
              sm: "14px", 
              md: "16px" 
            },
            color: "#484848",
            "&::placeholder": {
              color: "#666",
              fontSize: { 
                xs: "13px", 
                sm: "14px", 
                md: "16px" 
              },
              fontWeight: 400,
            },
            "& input": {
              padding: 0,
            },
          }}
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <IconButton
          onClick={handleSearch}
          sx={{
            padding: { 
              xs: "6px 10px", 
              sm: "8px 12px", 
              md: "12px 16px" 
            },
            color: "#484848",
            "&:hover": {
              backgroundColor: "transparent",
            },
            "& .MuiSvgIcon-root": {
              fontSize: { 
                xs: "20px", 
                sm: "24px", 
                md: "28px" 
              },
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
}