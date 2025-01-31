import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
} from "@mui/material";
import Image from "next/image";

const AddPropertyDetails = ({ onNext }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // height: "100vh",
        background: "#fff",
        p: 3,
        borderRadius: "20px",
      }}
    >
      {/* Sidebar */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              // width: "25%",
              bgcolor: "#f7f8fc",
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid #0000001A",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Post Your Property
            </Typography>
            <Stepper
              orientation="vertical"
              activeStep={0}
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
        </Grid>
        <Grid item xs={12} md={9}>
          <Box
            sx={{ p: 4, border: "1px solid #0000001A", borderRadius: "10px" }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Add Property Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField label="Your Name" fullWidth variant="standard" />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Search City" fullWidth variant="standard" />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  sx={{ fontSize: "17px", fontWeight: 700, color: "#6C6C6C" }}
                  gutterBottom
                >
                  Property Type
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  <Box
                    sx={{
                      border: "1px solid #D9D9D9",
                      width: "131px",
                      borderRadius: "12px",
                      height: "124px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/Images/ApartmentIcon.svg"
                      alt="apartment"
                      width={36}
                      height={36}
                    />
                    <Typography
                      sx={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#393939",
                        lineHeight: "21px",
                      }}
                    >
                      Apartment
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #D9D9D9",
                      width: "131px",
                      borderRadius: "12px",
                      height: "124px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/Images/IndependentHouseIcon.svg"
                      alt="apartment"
                      width={36}
                      height={36}
                    />
                    <Typography
                      sx={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#393939",
                        textAlign: "center",
                        lineHeight: "21px",
                      }}
                    >
                      Independent House
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #D9D9D9",
                      width: "131px",
                      borderRadius: "12px",
                      height: "124px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/Images/IndependentFloorIcon.svg"
                      alt="apartment"
                      width={36}
                      height={36}
                    />
                    <Typography
                      sx={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#393939",
                        textAlign: "center",
                        lineHeight: "21px",
                      }}
                    >
                      Independent Floor
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #D9D9D9",
                      width: "131px",
                      borderRadius: "12px",
                      height: "124px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/Images/VillaIcon.svg"
                      alt="apartment"
                      width={36}
                      height={36}
                    />
                    <Typography
                      sx={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#393939",
                        lineHeight: "21px",
                      }}
                    >
                      Villa
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <RadioGroup row>
                  <FormControlLabel
                    value="buy"
                    control={<Radio />}
                    label="Buy"
                  />
                  <FormControlLabel
                    value="rent"
                    control={<Radio />}
                    label="Rent"
                  />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Building/Project/Society (Optional)"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Locality" fullWidth variant="standard" />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  sx={{ fontSize: "17px", fontWeight: 700, color: "#6C6C6C" }}
                  gutterBottom
                >
                  BHK
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  <Button
                    sx={{
                      border: "1px solid #D9D9D9",
                      borderRadius: "6px",
                      p: 2,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      textTransform: "none",
                    }}
                  >
                    1 BHK
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid #D9D9D9",
                      borderRadius: "6px",
                      p: 2,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      textTransform: "none",
                    }}
                  >
                    2 BHK
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid #D9D9D9",
                      borderRadius: "6px",
                      p: 2,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      textTransform: "none",
                    }}
                  >
                    3 BHK
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid #D9D9D9",
                      borderRadius: "6px",
                      p: 2,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      textTransform: "none",
                    }}
                  >
                    4 BHK
                  </Button>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Built-Up Area (Sq. ft.)"
                  fullWidth
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  sx={{ fontSize: "17px", fontWeight: 700, color: "#6C6C6C" }}
                  gutterBottom
                >
                  Furnish Type
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  <Button
                    sx={{
                      border: "1px solid #D9D9D9",
                      borderRadius: "6px",
                      p: 2,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      textTransform: "none",
                      width: "200px",
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    <Image
                      src="/Images/FullyFurnishedIcon.svg"
                      alt="apartment"
                      width={30}
                      height={30}
                    />
                    Fully Furnished
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid #D9D9D9",
                      borderRadius: "6px",
                      p: 2,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      textTransform: "none",
                      width: "200px",
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    <Image
                      src="/Images/SemiFurnishedIcon.svg"
                      alt="apartment"
                      width={30}
                      height={30}
                    />
                    Semi Furnished
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid #D9D9D9",
                      borderRadius: "6px",
                      p: 2,
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#2B2B2B",
                      textTransform: "none",
                      width: "200px",
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    <Image
                      src="/Images/unfurnishedIcon.svg"
                      alt="apartment"
                      width={30}
                      height={30}
                    />
                    unfurnished
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox />
                  <Typography
                    sx={{ fontSize: "15px", color: "#2B2B2B", fontWeight: 700 }}
                  >
                    Share these listing informations
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={onNext}
                  sx={{
                    bgcolor: "#E8E1C4",
                    color: "#777777",
                    "&:hover": {
                      bgcolor: "#777777",
                      color: "#E8E1C4",
                      boxShadow: "none",
                    },
                    height: "70px",
                    borderRadius: "10px",
                    textTransform: "none",
                    fontSize: "18px",
                    fontWeight: 700,
                    boxShadow: "none",
                  }}
                >
                  Next, add price details
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>

      {/* Main Form */}
    </Box>
  );
};

export default AddPropertyDetails;
