import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Filter = ({ filters, setFilters }) => {
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for small screens

  const handleFilterChange = (field) => (event) => {
    setFilters({ ...filters, [field]: event.target.value });
  };

  return (
    <Box >
      <Grid container spacing={1}>
        {/* Individual Filters */}
        <Grid item xs={6} sm={6} md={1.2}>
          <FormControl fullWidth size="small">
            <InputLabel
              sx={{
                color: "#222222", 
                "&.Mui-focused": {
                  color: "#222222", 
                },
              }}
            >
              For Sale
            </InputLabel>
            <Select
              value={filters.type || ""}
              onChange={handleFilterChange("type")}
              label="For Sale"
              sx={{
                "& fieldset": {
                  border: "1.12px solid #949494",
                },
                borderRadius: "6.72px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494",
                },
                "& .MuiInputLabel-root": {
                  color: "#222222", 
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#222222", 
                },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="For Sale">For Sale</MenuItem>
              <MenuItem value="For Rent">For Rent</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={6} md={1.2}>
          <FormControl fullWidth size="small">
            <InputLabel  sx={{
                color: "#222222", 
                "&.Mui-focused": {
                  color: "#222222", 
                },
              }}>Price</InputLabel>
            <Select
              value={filters.price || ""}
              onChange={handleFilterChange("price")}
              label="Price"
              sx={{
                "& fieldset": {
                  border: "1.12px solid #949494",
                },
                borderRadius: "6.72px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494",
                },
                "& .MuiInputLabel-root": {
                  color: "#222222", 
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#222222", 
                },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="<3000">Less than $3000</MenuItem>
              <MenuItem value="3000-5000">$3000 - $5000</MenuItem>
              <MenuItem value=">5000">More than $5000</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={6} md={1.2}>
          <FormControl fullWidth size="small">
            <InputLabel  sx={{
                color: "#222222", 
                "&.Mui-focused": {
                  color: "#222222", 
                },
              }}>Beds/Baths</InputLabel>
            <Select
              value={filters.bedsBaths || ""}
              onChange={handleFilterChange("bedsBaths")}
              label="Beds/Baths"
              sx={{
                "& fieldset": {
                  border: "1.12px solid #949494",
                },
                borderRadius: "6.72px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494",
                },
                "& .MuiInputLabel-root": {
                  color: "#222222", 
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#222222", 
                },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="1-1">1 Bed, 1 Bath</MenuItem>
              <MenuItem value="2-2">2 Beds, 2 Baths</MenuItem>
              <MenuItem value="3-3">3 Beds, 3 Baths</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6} sm={6} md={1.2}>
          <FormControl fullWidth size="small">
            <InputLabel  sx={{
                color: "#222222", 
                "&.Mui-focused": {
                  color: "#222222", 
                },
              }}>Home Type</InputLabel>
            <Select
              value={filters.homeType || ""}
              onChange={handleFilterChange("homeType")}
              label="Home Type"
              sx={{
                "& fieldset": {
                  border: "1.12px solid #949494",
                },
                borderRadius: "6.72px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494",
                },
                "& .MuiInputLabel-root": {
                  color: "#222222", 
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#222222", 
                },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Apartment">Apartment</MenuItem>
              <MenuItem value="Condo">Condo</MenuItem>
              <MenuItem value="House">House</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* All Filters Button */}
        {/* <Grid item xs={6} sm={6} md={1.2}>
          <Button
            // onClick={() => setFilterDialogOpen(true)}
            fullWidth
            variant="contained"
            sx={{
              //  mt: 2,
              bgcolor: "#fff",
              color: "#484848",
              boxShadow: "none",
              // py: 0.85,
              "&:hover": {
                bgcolor: "#fff",
                color: "#484848",
                boxShadow: "none",
              },
              textTransform: "none",
              borderRadius: "6.72px",
              whiteSpace: "nowrap",
              border: "1.12px solid #949494",
              fontSize: {xs: "14px", md: "12px", lg: "16px"}, 
              fontWeight: 500,
              py: {xs: 1, md: 1, lg: 0.6}
            }}
          >
            All Filters
          </Button>
        </Grid> */}
        <Grid item xs={12} sm={6} md={1.2}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              //  mt: 2,
              bgcolor: "#E8E1C4",
              color: "#484848",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#3E4C66",
                color: "#fff",
                boxShadow: "none",
              },
              //  fontSize: "20px",
              textTransform: "none",
              borderRadius: "6.72px",
              whiteSpace: "nowrap",
              fontSize: {xs: "14px", md: "12px", lg: "16px"},
              fontWeight: 500,
              py: {xs: 1, md: 1, lg: 0.8}
            }}
          >
            Save Search
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{mb: {xs: 2, md: 0}, pl: {xs: 0, md: 1}}}>
          <TextField
            size="small"
            label="Search by Address"
            variant="outlined"
            value={filters.address || ""}
            onChange={handleFilterChange("address")}
            fullWidth
            sx={{ mb: 2,  color: "#3E4C66",
              "& .MuiInputLabel-root": {
                color: "#3E4C66",
                fontSize: "16px",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#3E4C66",
                fontSize: "16px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "5px", 
                "& fieldset": {
                  borderColor: "#00000066", 
                },
                "&:hover fieldset": {
                  borderColor: "#00000066", 
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#00000066", 
                },
              }, }}
          />
        </Grid>
      </Grid>

      {/* All Filters Dialog */}
      <Dialog
        open={isFilterDialogOpen}
        onClose={() => setFilterDialogOpen(false)}
        fullScreen={isSmallScreen} // Dialog is fullscreen on small screens
      >
        <DialogTitle>All Filters</DialogTitle>
        <DialogContent>
          <TextField
            label="Search by Address"
            variant="outlined"
            value={filters.address || ""}
            onChange={handleFilterChange("address")}
            fullWidth
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFilterDialogOpen(false)}>Close</Button>
          <Button
            variant="contained"
            onClick={() => setFilterDialogOpen(false)}
          >
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Filter;
