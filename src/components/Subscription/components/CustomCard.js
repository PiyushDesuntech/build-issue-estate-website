"use client";
import React, { useState } from "react";
import { Box, Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const CustomCard = ({ title, description, radioOptions }) => {
  const [selectedValue, setSelectedValue] = useState(radioOptions[1]?.value || ""); // Default to the second option if available

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        p: 2.5,
        width: "100%",
      }}
    >
      <Typography  sx={{ fontWeight: 500, mb: 1, fontSize: "22px" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#777777", mb: 2, fontSize: "16px", fontWeight: 400, lineHeight: "30px" }}>
        {description}
      </Typography>
      <RadioGroup row value={selectedValue} onChange={handleChange} sx={{ columnGap: {xs: 0, md: 1, lg: 4} }}>
        {radioOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={
              <Radio
                sx={{
                  color: "#00000066",
                  "&.Mui-checked": { color: "#E8E1C4" },
                }}
              />
            }
            sx={{ color: "#777777",  fontSize: "17.67px", fontWeight: 400,  mt: 1}}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};

export default CustomCard;
