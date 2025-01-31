"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  Collapse,
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from "@mui/material";

const NotificationCard = ({ location, initialType }) => {
  const [notificationType, setNotificationType] = useState(initialType);
  const [expanded, setExpanded] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("By Hour");

  const handleChangeType = (event) => {
    setNotificationType(event.target.value);
  };

  const handleSave = () => {
    setExpanded(false);
    console.log(
      `Saved: ${notificationType}, Period: ${selectedPeriod}, Time: ${selectedTime}`
    );
  };

  const handleCancel = () => {
    setExpanded(false);
    setSelectedTime("");
    setSelectedPeriod("");
  };

  const handlePeriodChange = (event, newPeriod) => {
    if (newPeriod !== null) {
      setSelectedPeriod(newPeriod);
    }
  };

  const details = [
    {
      category: "Stats",
      items: [">20K", "2+ Beds", "2+ Bath", "> 12000 sqft"],
    },
    {
      category: "Features",
      items: ["AC", "Pool", "Family Room"],
    },
    {
      category: "Location",
      items: ["Eie. School", "< 5400 HDA", "Pet Friendly"],
    },
  ];

  return (
    <Card
      sx={{
        maxWidth: 460,
        margin: "0 auto",
        boxShadow: "none",
        borderRadius: "10px",
        pb: 3,
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontWeight: 600, fontSize: "22.63px", color: "#484848", p: 1 }}
        >
          {location}
        </Typography>
          <Collapse in={showFilter} timeout="auto" unmountOnExit>
            <Grid container spacing={4} p={2}>
              {details.map((detail, index) => (
                <Grid item xs={6} sm={4} key={index}>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      marginBottom: 1,
                      fontSize: "17.68px",
                      color: "#777777",
                    }}
                  >
                    {detail.category}
                  </Typography>
                  {detail.items.map((item, idx) => (
                    <Typography
                      key={idx}
                      sx={{
                        fontWeight: 400,
                        marginBottom: 0.5,
                        fontSize: "17.68px",
                        color: "#777777",
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Collapse>
        <Button
          onClick={() => setShowFilter(!showFilter)}
          sx={{
            fontWeight: showFilter? 700 : 400,
            fontSize: "17.68px",
            color: showFilter? "#777777":"#ABABAB",
            p: 1,
            textTransform: "none",
          }}
        >
         {showFilter ? "Hide Filters" : "Show Filters"}
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
            p: 1,
          }}
        >
          <Typography
            sx={{ fontWeight: 400, fontSize: "17.68px", color: "#777777" }}
          >
            Notification Type: <span>{notificationType}</span>
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{
              display: expanded ? "none" : "block",
              backgroundColor: "#E8E1C4",
              color: "black",
              "&:hover": { backgroundColor: "#e0e0c0", boxShadow: "none" },
              height: "51px",
              width: "115px",
              textTransform: "none",
              fontSize: "17.68px",
              color: "#777777",
              boxShadow: "none",
            }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Cancel" : "Change"}
          </Button>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box
          sx={{
            borderTop: "1px solid #ddd",
            paddingTop: 2,
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            px={3}
          >
            <FormControl component="fieldset" fullWidth>
              {/* <FormLabel component="legend">Notification Type</FormLabel> */}
              <RadioGroup
                row
                value={notificationType}
                onChange={handleChangeType}
                name={`${location}-notification`}
                sx={{ columnGap: {xs: 0, md: 1, lg: 4} }}
              >
                <FormControlLabel
                  value="Instant"
                  control={<Radio sx={{ color: "#00000066", '&.Mui-checked': { color: "#000" } }} />}
                  label="Instant"
                />
                <FormControlLabel
                  value="Daily"
                  control={<Radio sx={{ color: "#00000066", '&.Mui-checked': { color: "#000" } }} />}
                  label="Daily"
                />
                <FormControlLabel
                  value="Never"
                  control={<Radio sx={{ color: "#00000066", '&.Mui-checked': { color: "#000" } }} />}
                  label="Never"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {/* {notificationType === "Daily" && ( */}
          <Box px={3}>
            <ToggleButtonGroup
              value={selectedPeriod}
              exclusive
              onChange={handlePeriodChange}
              aria-label="Notification Period"
              sx={{ mt: 2, width: "100%" }}
            >
              <ToggleButton
                value="Morning"
                sx={{
                  textTransform: "none",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "10px",
                    lg: "14px",
                    xl: "17.63px",
                  },
                  px: 2,
                  borderRadius: "10px",
                  color: "#777777",
                  "&.Mui-selected": {
                    backgroundColor: "#E8E1C4",
                    color: "#777777",
                    "&:hover": {
                      backgroundColor: "#E8E1C4",
                    },
                  },
                  minHeight: "51px",
                }}
              >
                Morning
              </ToggleButton>
              <ToggleButton
                value="Afternoon"
                sx={{
                  textTransform: "none",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "10px",
                    lg: "14px",
                    xl: "17.63px",
                  },
                  px: 2,
                  borderRadius: "10px",
                  color: "#777777",
                  "&.Mui-selected": {
                    backgroundColor: "#E8E1C4",
                    color: "#777777",
                    "&:hover": {
                      backgroundColor: "#E8E1C4",
                    },
                  },
                  minHeight: "51px",
                }}
              >
                Afternoon
              </ToggleButton>
              <ToggleButton
                value="Evening"
                sx={{
                  textTransform: "none",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "10px",
                    lg: "14px",
                    xl: "17.63px",
                  },
                  px: 2,
                  borderRadius: "10px",
                  color: "#777777",
                  "&.Mui-selected": {
                    backgroundColor: "#E8E1C4",
                    color: "#777777",
                    "&:hover": {
                      backgroundColor: "#E8E1C4",
                    },
                  },
                  minHeight: "51px",
                }}
              >
                Evening
              </ToggleButton>
              <ToggleButton
                value="By Hour"
                sx={{
                  textTransform: "none",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "10px",
                    lg: "14px",
                    xl: "17.63px",
                  },
                  px: 2,
                  borderRadius: "10px",
                  color: "#777777",
                  "&.Mui-selected": {
                    backgroundColor: "#E8E1C4",
                    color: "#777777",
                    "&:hover": {
                      backgroundColor: "#E8E1C4",
                    },
                  },
                  minHeight: "51px",
                }}
              >
                By Hour
              </ToggleButton>
            </ToggleButtonGroup>

            {selectedPeriod === "By Hour" && (
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <FormLabel sx={{ whiteSpace: "nowrap" }}>Select Time</FormLabel>
                <TextField
                  type="time"
                  fullWidth
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  sx={{
                    mt: 1,
                    width: "251px",
                    borderRadius: "10px",
                    "& .MuiInputBase-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
              </Box>
            )}
          </Box>
          {/* )} */}
          <Divider sx={{ mt: 3 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 3,
              p: 3,
            }}
          >
            <Button
              variant="outlined"
              onClick={handleCancel}
              sx={{
                color: "#777777",
                borderColor: "#777777",
                height: "51px",
                width: "115px",
                textTransform: "none",
                fontSize: "17.68px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSave}
              sx={{
                backgroundColor: "#E8E1C4",
                color: "#777777",
                height: "51px",
                width: "115px",
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
                textTransform: "none",
                fontSize: "17.68px",
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
};

export default function SavedSearches() {
  return (
    <Box sx={{ px: { xs: 2, lg: 2 }, mt: -2 }}>
      <Box px={1} pb={3}>
      <Typography sx={{ fontSize: "26px", fontWeight: 500 }}>
        Saved Searches
      </Typography>
      <Typography
        sx={{ fontSize: "17.68px", fontWeight: 400, color: "#777777" }}
      >
        How often would you like to receive emails about each of your saved
        searches? <span style={{color: "#394560",textDecoration: "underline" }}>Edit Saved Search</span>
      </Typography>
      </Box>
      <Divider/>
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={6} md={4}>
          <NotificationCard
            location="Pleasant Hill, CA"
            initialType="Instant"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NotificationCard
            location="Pleasant Hill, CA"
            initialType="Instant"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <NotificationCard location="London" initialType="Daily" />
        </Grid>
      </Grid>
    </Box>
  );
}
