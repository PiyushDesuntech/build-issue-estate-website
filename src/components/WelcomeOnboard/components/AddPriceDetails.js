import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Card,
  CardMedia,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";

const AddPriceDetails = ({ onBack, onPost }) => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...imageUrls]);
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: "25%",
          bgcolor: "#f7f8fc",
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRight: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Post Your Property
        </Typography>
        <Stepper
          orientation="vertical"
          activeStep={1}
          sx={{ mt: 3, width: "100%" }}
        >
          <Step>
            <StepLabel>Property Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Price Details</StepLabel>
          </Step>
        </Stepper>
      </Box>

      {/* Main Form */}
      <Box sx={{ width: "75%", p: 4 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Add Price Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Monthly Rent" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              Estimated rent of your property based on price trends is around{" "}
              <strong>$3400 - $4400</strong>.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Available From"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Security Deposit
            </Typography>
            <RadioGroup row>
              <FormControlLabel
                value="none"
                control={<Radio />}
                label="None"
              />
              <FormControlLabel
                value="1month"
                control={<Radio />}
                label="1 Month"
              />
              <FormControlLabel
                value="2months"
                control={<Radio />}
                label="2 Months"
              />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" fontWeight="bold">
              Upload Images
            </Typography>
            <Grid container spacing={2}>
              {images.map((img, index) => (
                <Grid item xs={3} key={index}>
                  <Card>
                    <CardMedia component="img" image={img} />
                    <IconButton
                      onClick={() => handleRemoveImage(index)}
                      sx={{ position: "absolute", top: 0, right: 0 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Card>
                </Grid>
              ))}
              <Grid item xs={3}>
                <Button
                  variant="outlined"
                  component="label"
                  fullWidth
                  sx={{ height: "100%" }}
                >
                  <AddPhotoAlternateIcon />
                  <input type="file" hidden multiple onChange={handleImageUpload} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={onPost}
              sx={{
                bgcolor: "#d9c59e",
                color: "black",
                "&:hover": {
                  bgcolor: "#c3ac82",
                },
              }}
            >
              Post Your Property
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddPriceDetails;
