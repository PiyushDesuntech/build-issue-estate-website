import React, { useState } from "react";
import { Box, Typography, TextField, Checkbox, FormControlLabel, Button, Grid, useTheme, useMediaQuery } from "@mui/material";

const StarRating = ({ label, value, onChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: "space-between",
        marginBottom: { xs: '16px', sm: '12px' },
        paddingRight: { xs: '0', sm: '30%', md: '65%' },
        gap: { xs: '8px', sm: '4px' },
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: { xs: '14px', sm: '15px', md: '16px' },
          fontWeight: "400",
          color: "#484848",
          minWidth: { xs: 'auto', sm: '140px' },
        }}
      >
        {label}
      </Typography>
      <Box sx={{ display: "flex", gap: "4px" }}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            style={{
              color: value > i ? "#FFB903" : "transparent",
              fontSize: isMobile ? "22px" : isTablet ? "23px" : "25px",
              cursor: "pointer",
              WebkitTextStroke: "1px #FFB903",
            }}
            onClick={() => onChange(i + 1)}
          >
            ★
          </span>
        ))}
      </Box>
    </Box>
  );
};

const ReviewForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const [overallRating, setOverallRating] = useState(5);
  const [localKnowledge, setLocalKnowledge] = useState(0);
  const [processExpertise, setProcessExpertise] = useState(0);
  const [responsiveness, setResponsiveness] = useState(0);
  const [responsiveness1, setResponsiveness1] = useState(0);
  const [recommendation, setRecommendation] = useState(0);
  // Add new state variables for form data
  const [review, setReview] = useState("");
  const [address, setAddress] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    alert("Link clicked!");
  };

  // Add submit handler
  const handleSubmit = async () => {
    // Validate required fields
    if (!overallRating || !recommendation || !localKnowledge || 
        !processExpertise || !responsiveness || !review || !address) {
      alert("Please fill in all required fields");
      return;
    }

    const reviewData = {
      overallRating,
      recommendation,
      localKnowledge,
      processExpertise,
      responsiveness,
      responsiveness1,
      review,
      address,
      isVisible,
      timestamp: new Date().toISOString()
    };

    try {
      // Replace with your API endpoint
      const response = await fetch('/api/submit-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      alert('Review submitted successfully!');
      
      // Reset form
      setOverallRating(5);
      setLocalKnowledge(0);
      setProcessExpertise(0);
      setResponsiveness(0);
      setResponsiveness1(0);
      setRecommendation(0);
      setReview("");
      setAddress("");
      setIsVisible(true);

    } catch (error) {
      alert('Failed to submit review: ' + error.message);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        // maxWidth: "800px",
        margin: "auto",
        textAlign: "left",
        padding: { xs: '16px 10px', sm: '18px 12px', md: '20px 14px' },
        backgroundColor: "#FFFFFF",
        border: "1px solid #EBEBEB",   
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",     
        borderRadius: "8px",
      }}
    >
      <Grid container spacing={{ xs: 1.5, sm: 2 }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={{ xs: 1, sm: 1 }}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="body1"
                sx={{
                  width: "100%",
                  fontSize: { xs: '16px', sm: '17px', md: '18px' },
                  fontWeight: "400",
                  color: "#777777",
                  marginBottom: { xs: '10px', sm: '0' },
                }}
              >
                Tom Willson ratings for Colonial Reality World
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} container justifyContent={{ xs: 'flex-start', md: 'flex-end' }} alignItems="center">
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "4px",
                marginLeft: { xs: '-4px', md: '0' }
              }}>
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      color: overallRating > i ? "#FFB903" : "transparent",
                      fontSize: isMobile ? "22px" : isTablet ? "23px" : "25px",
                      cursor: "pointer",
                      WebkitTextStroke: "1px #FFB903",
                    }}
                    onClick={() => setOverallRating(i + 1)}
                  >
                    ★
                  </span>
                ))}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '22px', sm: '23px', md: '25px' },
                    fontWeight: "400",
                    color: "#484848",
                    marginLeft: "8px",
                  }}
                >
                  {overallRating}.0
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              fontSize: { xs: '16px', sm: '17px', md: '18px' },
              fontWeight: "400",
              color: "#777777",
              marginBottom: { xs: '8px', sm: '12px' },
            }}
          >
            How would you like to recommend the service?
          </Typography>
          <Box sx={{ 
            display: "flex", 
            gap: "4px", 
            marginBottom: { xs: '12px', sm: '16px' },
            marginLeft: { xs: '-4px', sm: '0' }
          }}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                style={{
                  color: recommendation > i ? "#FFB903" : "transparent",
                  fontSize: isMobile ? "22px" : isTablet ? "23px" : "25px",
                  cursor: "pointer",
                  WebkitTextStroke: "1px #FFB903",
                }}
                onClick={() => setRecommendation(i + 1)}
              >
                ★
              </span>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ maxWidth: { xs: '100%', sm: '600px' } }}>
          <StarRating
            label="Local Knowledge"
            value={localKnowledge}
            onChange={setLocalKnowledge}
          />
          <StarRating
            label="Process Expertise"
            value={processExpertise}
            onChange={setProcessExpertise}
          />
          <StarRating
            label="Responsiveness"
            value={responsiveness}
            onChange={setResponsiveness}
          />
          <StarRating
            label="Responsiveness"
            value={responsiveness1}
            onChange={setResponsiveness1}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{
              width: "100%",
              fontSize: { xs: '16px', sm: '17px', md: '18px' },
              fontWeight: "400",
              color: "#777777",
              marginBottom: { xs: '8px', sm: '12px' },
            }}
          >
            How was your experience working with Patrick?
          </Typography>
          <TextField
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write Your review here..."
            multiline
            rows={isMobile ? 8 : 12}
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              height: { xs: '250px', sm: '280px', md: '310px' },
              marginBottom: { xs: '8px', sm: '12px' },
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px',
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant="body1"
            sx={{
              width: "100%",
              fontSize: { xs: '22px', sm: '24px', md: '26px' },
              fontWeight: "400",
              color: "#484848",
              marginBottom: { xs: '16px', sm: '20px' },
            }}
          >
            Complete Address:
          </Typography>
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address Here..."
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              marginBottom: { xs: '8px', sm: '12px' },
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderRadius: '10px',
              },
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox 
                checked={isVisible}
                onChange={(e) => setIsVisible(e.target.checked)}
                defaultChecked 
              />
            }
            label={
              <Box sx={{ 
                display: "flex", 
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: { xs: '4px', sm: '0' }
              }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '13px', sm: '14px' },
                    color: "#777777",
                  }}
                >
                  Make this review visible in the profile.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '13px', sm: '14px' },
                    color: "#1E22EC",
                    marginLeft: { xs: '0', sm: '4px' },
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={handleClick}
                >
                  Agree to Terms & Conditions
                </Typography>
              </Box>
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: { xs: '100%', sm: '220px', md: '240px' },
              height: { xs: '45px', sm: '46px', md: '48px' },
              borderRadius: "4px",
              backgroundColor: "#E8E1C4",
              color: "#777777",
              fontWeight: "400",
              fontSize: { xs: '14px', sm: '14px', md: '15px' },
              boxShadow: "none",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#E8E1C4",
              },
            }}
          >
            Submit Review
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewForm;