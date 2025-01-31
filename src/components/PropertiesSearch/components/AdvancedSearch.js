"use client"
import React, { useState } from "react";
import {
  Box,
  TextField,
  Slider,
  Select,
  MenuItem,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AdvancedSearch = () => {
  const [distance, setDistance] = useState(50);
  const [price, setPrice] = useState([0, 8000]);
  const [region, setRegion] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [type, setType] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [pets, setPets] = useState("");

  const handleSliderChange = (event, newValue) => {
    setPrice(newValue);
  };

  return (
   <Box p={3}>
     <Box
      sx={{
        // width: "300px",
        padding: {xs: "20px", lg: "30px"},
        borderRadius: "8px",
        // boxShadow: 1,
        border: "2px solid #D8D8D8",
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Advanced Search
      </Typography>

      {/* Keyword Field */}
      <Box display="flex" alignItems="center" >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Keyword"
        sx={{ mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </Box>

      {/* Location Field */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Location"
        sx={{ mb: 2 }}
      />

      {/* Distance Slider */}
      {/* <Typography gutterBottom>Distance: {distance} miles</Typography>
      <Slider
        value={distance}
        onChange={(e, value) => setDistance(value)}
        min={0}
        max={100}
        sx={{
          color: '#B3A87A', 
          '& .MuiSlider-thumb': {
            borderRadius: '1px', 
            backgroundColor: '#24324A', 
            border: '2px solid white', 
          },
          '& .MuiSlider-rail': {
            color: 'grey.300', 
          },
          '& .MuiSlider-track': {
            color: '#B3A87A', 
          },
          '& .MuiSlider-mark': {
            backgroundColor: 'black',
            width: '8px', 
          },
          mb: 2
        }}
      /> */}

      {/* Dropdown Menus */}
      <Select
        fullWidth
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        displayEmpty
        variant="outlined"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Regions</MenuItem>
        <MenuItem value="region1">Region 1</MenuItem>
        <MenuItem value="region2">Region 2</MenuItem>
      </Select>

      <Select
        fullWidth
        value={moveInDate}
        onChange={(e) => setMoveInDate(e.target.value)}
        displayEmpty
        variant="outlined"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Move-in Date</MenuItem>
        <MenuItem value="date1">Date 1</MenuItem>
        <MenuItem value="date2">Date 2</MenuItem>
      </Select>

      <Select
        fullWidth
        value={type}
        onChange={(e) => setType(e.target.value)}
        displayEmpty
        variant="outlined"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Type</MenuItem>
        <MenuItem value="apartment">Apartment</MenuItem>
        <MenuItem value="house">House</MenuItem>
      </Select>

      <Select
        fullWidth
        value={beds}
        onChange={(e) => setBeds(e.target.value)}
        displayEmpty
        variant="outlined"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Beds</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
      </Select>

      <Select
        fullWidth
        value={baths}
        onChange={(e) => setBaths(e.target.value)}
        displayEmpty
        variant="outlined"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Baths</MenuItem>
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
      </Select>

      <Select
        fullWidth
        value={pets}
        onChange={(e) => setPets(e.target.value)}
        displayEmpty
        variant="outlined"
        sx={{ mb: 2 }}
      >
        <MenuItem value="">Pets</MenuItem>
        <MenuItem value="dogs-okay">Dogs Okay</MenuItem>
        <MenuItem value="cats-okay">Cats Okay</MenuItem>
        <MenuItem value="other-pets">Other pets</MenuItem>
      </Select>

      {/* Price Range Slider */}
      <Typography gutterBottom>
        From ${price[0]} to ${price[1]}
      </Typography>
      <Slider
        value={price}
        onChange={handleSliderChange}
        min={0}
        max={8000}
        sx={{
          color: '#B3A87A', 
          '& .MuiSlider-thumb': {
            borderRadius: '1px', 
            backgroundColor: '#24324A', 
            border: '2px solid white', 
          },
          '& .MuiSlider-rail': {
            color: 'grey.300', 
          },
          '& .MuiSlider-track': {
            color: '#B3A87A', 
          },
          '& .MuiSlider-mark': {
            backgroundColor: 'black',
            width: '8px', 
          },
          mb: 2
        }}
      />

      {/* Advanced Options */}
      {/* <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body2">Advanced</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box> */}

      {/* Find Property Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "#E8E1C4",
          color: "#484848",
          boxShadow: "none",
          py:2,
          "&:hover": {
            backgroundColor: "#3E4C66",
            color: "#fff",
          },
          fontSize: "20px",
          textTransform: "none",
          borderRadius: "8px"
        }}
      >
        Find Property
      </Button>
    </Box>
   </Box>
  );
};

export default AdvancedSearch;
