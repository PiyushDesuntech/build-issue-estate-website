import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HomeOptions = ({ totalHomes, currentView, onSortChange, onViewChange }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 2 }}>
      <Typography sx={{ fontSize: "13.83px", fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.5 }}>
        {totalHomes}{" "}
        <span style={{ color: "#676767", fontWeight: 400 }}> of </span>{" "}
        {totalHomes} homes
      </Typography>
      <Typography sx={{ fontSize: "13.83px", fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.5 }}>
        Sort: 
        <span style={{ color: "#15727A" }} onClick={() => onSortChange('recommended')}>
          {currentView.sort || 'Recommended'}
        </span>
        <ArrowDropDownIcon sx={{ color: "#15727A" }} />
      </Typography>
      <Typography sx={{ fontSize: "13.83px", fontWeight: 700, display: 'flex', alignItems: 'center', gap: 0.5 }}>
        View: 
        <span style={{ color: "#15727A" }} onClick={() => onViewChange('photos')}>
          {currentView.view || 'Photos'}
        </span>
        <ArrowDropDownIcon sx={{ color: "#15727A" }} />
      </Typography>
    </Box>
  );
};

export default HomeOptions;
