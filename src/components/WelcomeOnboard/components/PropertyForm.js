import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Card,
  CardMedia,
  IconButton,
  LinearProgress,
  Container,
  Dialog,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Chip,
} from "@mui/material";
import { Delete, Add } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import { useForm, Controller } from "react-hook-form";
import PropertyTypeSelector from "./PropertyTypeSelector";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const steps = ["Property Details", "Price Details", "Post Your Property"];
const bhkOptions = [1, 2, 3, 4];
const SecurityDepositOptions = ["None", "1 Month", "2 Month", "Custom"];
const furnishOptions = [
  { label: "Fully Furnished", icon: "/Images/FullyFurnishedIcon.svg" },
  { label: "Semi Furnished", icon: "/Images/SemiFurnishedIcon.svg" },
  { label: "Unfurnished", icon: "/Images/unfurnishedIcon.svg" },
];
const initialFacilities = [
  { label: "City Center", value: "4" },
  { label: "Hospital", value: "2" },
  { label: "Shop", value: "2.5" },
];

const customTheme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: "#CDCDCD",
          "&:before": {
            borderBottomColor: "#CDCDCD !important", // Default border
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottomColor: "#CDCDCD !important", // Hover state
          },
          "&:after": {
            borderBottomColor: "#CDCDCD !important", // Focus state
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#CDCDCD !important",
          "&.Mui-focused": {
            color: "#CDCDCD !important",
          },
        },
      },
    },
  },
});

const PropertyForm = () => {
  const { control, handleSubmit } = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [selectedSecurity, setSelectedSecurity] = useState(null);
  const [selectedFurnish, setSelectedFurnish] = useState(null);
  const [facilities, setFacilities] = useState(initialFacilities);
  const [open, setOpen] = useState(false);
  const [customMonths, setCustomMonths] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleChange = (index, newValue) => {
    if (/^\d*\.?\d*$/.test(newValue)) {
      // Allow only numbers & decimal
      setFacilities((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, value: newValue } : item
        )
      );
    }
  };

  const handleSelect = (security) => {
    if (security === "Custom") {
      setOpen(true);
    } else {
      setSelectedSecurity(security);
      setCustomMonths(null);
    }
  };

  const handleCustomChange = (event) => {
    const monthCount = event.target.value;
    setCustomMonths(`${monthCount} Month${monthCount > 1 ? "s" : ""}`);
    setSelectedSecurity(`${monthCount} Month${monthCount > 1 ? "s" : ""}`);
    setOpen(false);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
    handleSubmit((data) => console.log(data));
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedImages((prev) => [...prev, ...files]);
  };

  const handleImageRemove = (index) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "20px",
        px: { xs: 2 },
        width: "100%",
        mt: 4,
      }}
    >
      <Grid container spacing={2}>
        {/* Left Sidebar - Stepper & Progress */}
        <Grid item md={3} xs={12} pb={2}>
          <Box
            sx={{
              background: "linear-gradient(180deg, #F3F4FF 0%, #FFFFFF 100%)",
              p: { xs: 2, md: 3 },
              borderRadius: "10px",
              border: "1px solid #0000001A",
              height: "100%",
            }}
          >
            {/* {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleBack}
                startIcon={<NavigateBeforeIcon />}
                sx={{
                  mb: 2,
                  textTransform: "none",
                  color: "#78787C",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                Return To Dashboard
              </Button>
            ) : (
              // <Button
              //   onClick={() => router.back()}
              //   startIcon={<NavigateBeforeIcon />}
              //   sx={{
              //     mb: 2,
              //     textTransform: "none",
              //     color: "#78787C",
              //     fontWeight: 700,
              //     fontSize: "18px",
              //   }}
              // >
              //   Go Back
              // </Button>
              <Box></Box>
            )} */}
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "22px", lg: "24px" },
                fontWeight: 700,
                color: "#4B4343",
              }}
            >
              Post Your Property
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px", lg: "17px" },
                fontWeight: 700,
                color: "#6C6C6C",
              }}
            >
              Sell or rent your property
            </Typography>

            {/* Progress Bar */}
            <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1 }}>
              <LinearProgress
                variant="determinate"
                value={(activeStep / (steps.length - 1)) * 100}
                sx={{
                  flexGrow: 1,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#f0f0f0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#FCD26E",
                    borderRadius: 5,
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", minWidth: 35 }}
              >
                {Math.round((activeStep / (steps.length - 1)) * 100)}%
              </Typography>
            </Box>

            {/* Stepper */}
            <Stepper
              activeStep={activeStep}
              orientation="vertical"
              sx={{
                mt: 3,
                backgroundColor: "transparent",
                "& .MuiStepConnector-root": {
                  color: "#55434E",
                },
                "& .MuiStepLabel-label": {
                  color: "#000 !important",
                },
                "& .MuiStepIcon-root": {
                  color: "#6E6E6E !important",
                },
                "& .MuiStepIcon-root.Mui-active": {
                  color: "#E8E1C4 !important",
                },
                "& .MuiStepIcon-root.Mui-completed": {
                  color: "#E8E1C4 !important",
                },
              }}
            >
              {activeStep === steps.length - 1 ? (
                <Step
                  completed
                  sx={{
                    "& .MuiStepIcon-root": { color: "#E8E1C4 !important" },
                    "& .MuiStepLabel-label": { color: "#6E6E6E !important" },
                  }}
                >
                  <StepLabel sx={{ color: "#6E6E6E !important" }}>
                   <Box>
                    <Typography sx={{}}> Property Posted</Typography>
                    <Chip label="Completed" size="small" sx={{background: "#EAE4FF", color: "#A3A3A3", fontWeight: 400}} />
                   </Box>
                  </StepLabel>
                   
                </Step>
              ) : (
                steps.map((label, index) => (
                  <Step
                    key={index}
                    sx={{
                      "& .MuiStepIcon-root": {
                        color:
                          activeStep === index || activeStep > index
                            ? "#E8E1C4"
                            : "#6E6E6E",
                      },
                      "& .MuiStepIcon-root.Mui-completed": {
                        color: "#E8E1C4",
                      },
                      "& .MuiStepLabel-label": {
                        color:
                          activeStep === index || activeStep > index
                            ? "#6E6E6E"
                            : "inherit",
                      },
                    }}
                  >
                    <StepLabel sx={{ color: "#6E6E6E" }}>{label}</StepLabel>
                  </Step>
                ))
              )}
            </Stepper>
          </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid item xs={12} md={9} sx={{ pb: 2 }}>
          <Box
            sx={{
              p: { xs: 2, md: 3 },
              border: "1px solid #0000001A",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            {/* Step 1: Property Details */}
            {activeStep === 0 && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "22px", lg: "24px" },
                      fontWeight: 700,
                      color: "#4B4343",
                    }}
                  >
                    Add Property Details
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Your Name"
                        fullWidth
                        variant="standard"
                        sx={{
                          "& .MuiInputBase-root": { color: "#CDCDCD" },
                          "& .MuiInputLabel-root": { color: "#ABABAB" },
                          "& .MuiInput-underline:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:hover:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#CDCDCD",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <ThemeProvider theme={customTheme}>
                    <Controller
                      name="city"
                      control={control}
                      render={({ field }) => (
                        <FormControl fullWidth variant="standard">
                          <InputLabel sx={{display: "flex", alignItems: "center"}}>
                            <SearchIcon
                              sx={{ marginRight: 1, color: "#CDCDCD" }}
                            />
                            Search City
                          </InputLabel>
                          <Input {...field} />
                        </FormControl>
                      )}
                    />
                  </ThemeProvider>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px", lg: "17px" },
                      fontWeight: 700,
                      color: "#6C6C6C",
                      mb: 2,
                      mt: 1,
                    }}
                  >
                    Property Type
                  </Typography>
                  <PropertyTypeSelector
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                  />
                </Grid>

                <Grid item xs={12}>
                  {/* <Typography sx={{fontSize: {xs: "14px", md: "16px", lg: "17px"}, fontWeight: 700, color: "#6C6C6C"}}>Transaction Type</Typography> */}
                  <RadioGroup row>
                    <FormControlLabel
                      value="Sell"
                      control={
                        <Radio
                          sx={{
                            color: "#484848",
                            "&.Mui-checked": { color: "#484848" },
                          }}
                        />
                      }
                      label="Sell"
                    />
                    <FormControlLabel
                      value="Rent"
                      control={
                        <Radio
                          sx={{
                            color: "#484848",
                            "&.Mui-checked": { color: "#484848" },
                          }}
                        />
                      }
                      label="Rent"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="building"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Building/ Project/ Society (Optional)"
                        fullWidth
                        variant="standard"
                        sx={{
                          "& .MuiInputBase-root": { color: "#CDCDCD" },
                          "& .MuiInputLabel-root": { color: "#ABABAB" },
                          "& .MuiInput-underline:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:hover:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#CDCDCD",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="Locality"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Locality"
                        fullWidth
                        variant="standard"
                        sx={{
                          "& .MuiInputBase-root": { color: "#CDCDCD" },
                          "& .MuiInputLabel-root": { color: "#ABABAB" },
                          "& .MuiInput-underline:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:hover:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#CDCDCD",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                {/* BHK Selection */}
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px", lg: "17px" },
                      fontWeight: 700,
                      color: "#6C6C6C",
                      mb: 1,
                    }}
                  >
                    BHK
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "grid", sm: "flex" },
                      gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(4, 1fr)",
                      },
                      gap: 2,
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", sm: "unset" },
                      width: "100%",
                    }}
                  >
                    {bhkOptions.map((bhk) => (
                      <Button
                        key={bhk}
                        onClick={() => setSelectedBHK(bhk)}
                        variant={selectedBHK === bhk ? "contained" : "outlined"}
                        sx={{
                          borderRadius: "8px",
                          fontWeight: 700,
                          textTransform: "none",
                          width: { xs: "100%", sm: "80px" },
                          height: "50px",
                          borderColor:
                            selectedBHK === bhk ? "#E0D8C3" : "#D9D9D9",
                          backgroundColor:
                            selectedBHK === bhk ? "#E0D8C3" : "transparent",
                          color: selectedBHK === bhk ? "#393939" : "#000",
                          "&:hover": {
                            backgroundColor: "#E0D8C3",
                            borderColor: "#E0D8C3",
                          },
                          boxShadow: selectedBHK === bhk ? "none" : "none",
                        }}
                      >
                        {bhk} BHK
                      </Button>
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="Built Up Areqa"
                    control={control}
                    render={({ field }) => (
                      <TextField
                      fullWidth
                      variant="standard"
                      label={
                        <Typography sx={{ color: "rgba(0, 0, 0, 0.5)" }}>Built Up Area</Typography>
                      }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: 18 }}>
                              Sq. ft.
                            </Typography>
                          </InputAdornment>
                        ),
                        
                      }}
                      sx={{
                        "& .MuiInputBase-root": { color: "#CDCDCD" },
                        "& .MuiInputLabel-root": { color: "#ABABAB" },
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "#CDCDCD",
                        },
                        "& .MuiInput-underline:hover:before": {
                          borderBottomColor: "#CDCDCD",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#CDCDCD",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: "#CDCDCD",
                        },
                      }}
                    />
                    )}
                  />
                </Grid>

                {/* Furnish Type */}
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px", lg: "17px" },
                      fontWeight: 700,
                      color: "#6C6C6C",
                      mb: 2,
                    }}
                  >
                    Furnish Type
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "grid", sm: "flex" },
                      gridTemplateColumns: {
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(4, 1fr)",
                      },
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >
                    {furnishOptions.map(({ label, icon }) => (
                      <Button
                        key={label}
                        onClick={() => setSelectedFurnish(label)}
                        sx={{
                          border: "1px solid",
                          borderColor:
                            selectedFurnish === label ? "#E0D8C3" : "#D9D9D9",
                          borderRadius: "6px",
                          p: 2,
                          fontSize: "15px",
                          fontWeight: 700,
                          color: "#2B2B2B",
                          textTransform: "none",
                          width: { xs: "100%", sm: "200px" },
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          backgroundColor:
                            selectedFurnish === label
                              ? "#E0D8C3"
                              : "transparent",
                          "&:hover": {
                            backgroundColor: "#E0D8C3",
                            borderColor: "#E0D8C3",
                          },
                        }}
                      >
                        <Image src={icon} alt={label} width={30} height={30} />
                        {label}
                      </Button>
                    ))}
                  </Box>
                </Grid>

                {/* Amenities */}
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px", lg: "17px" },
                      fontWeight: 700,
                      color: "#6C6C6C",
                      mb: 1,
                    }}
                  >
                    Amenities
                  </Typography>
                  <Grid container spacing={1}>
                    {[
                      "Air Conditioning",
                      "Gym",
                      "Microwave",
                      "Swimming Pool",
                      "WiFi",
                      "Barbeque",
                      "Laundry",
                      "Refrigerator",
                      "TV Cable",
                      "Window Coverings",
                      "Dryer",
                      "Lawn",
                      "Sauna",
                      "Washer",
                    ].map((amenity) => (
                      <Grid item xs={6} md={4} key={amenity}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{
                                color: "#484848",
                                "&.Mui-checked": { color: "#484848" },
                              }}
                            />
                          }
                          label={amenity}
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: { xs: "12px", sm: "15px" },
                              fontWeight: 400,
                              color: "#484848",
                            },
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px", lg: "17px" },
                        fontWeight: 700,
                        color: "#6C6C6C",
                        mb: 1,
                      }}
                    >
                      Facilities
                    </Typography>
                    <Grid container spacing={4}>
                      {facilities.map((facility, index) => (
                        <Grid item key={facility.label} xs={12} sm={4}>
                          <Box
                            display="flex"
                            alignItems="center"
                            gap={1}
                            sx={{
                              borderBottom: "1px solid #CDCDCD",
                              justifyContent: "space-between",
                              px: 2,
                            }}
                          >
                            <Typography
                              sx={{ fontWeight: "bold", color: "#393939" }}
                            >
                              {facility.label} -
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <TextField
                                variant="standard"
                                value={facility.value}
                                onChange={(e) =>
                                  handleChange(index, e.target.value)
                                }
                                inputProps={{
                                  style: {
                                    textAlign: "center",
                                    width: "40px",
                                  },
                                }}
                                sx={{
                                  "& .MuiInputBase-root": { color: "#555555" },
                                  "& .MuiInputLabel-root": { color: "#555555" },
                                  "& .MuiInput-underline:before": {
                                    borderBottomColor: "transparent",
                                  },
                                  "& .MuiInput-underline:hover:before": {
                                    borderBottomColor: "transparent",
                                  },
                                  "& .MuiInput-underline:after": {
                                    borderBottomColor: "transparent",
                                  },
                                  "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#CDCDCD",
                                  },
                                }}
                              />
                              <Typography sx={{ color: "#393939" }}>
                                Km
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid container spacing={1} mt={2}>
                      {[
                        "Air Conditioning",
                        "Gym",
                        "Microwave",
                        "Swimming Pool",
                        "WiFi",
                        "Barbeque",
                        "Laundry",
                        "Refrigerator",
                        "TV Cable",
                        "Window Coverings",
                        "Dryer",
                        "Lawn",
                        "Sauna",
                        "Washer",
                      ].map((amenity) => (
                        <Grid item xs={6} md={4} key={amenity}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  color: "#484848",
                                  "&.Mui-checked": { color: "#484848" },
                                }}
                              />
                            }
                            label={amenity}
                            sx={{
                              "& .MuiTypography-root": {
                                fontSize: { xs: "12px", sm: "15px" },
                                fontWeight: 400,
                                color: "#484848",
                              },
                            }}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleNext}
                    sx={{
                      backgroundColor: "#E0D8C3",
                      "&:hover": {
                        backgroundColor: "#3E4C66",
                        color: "#fff",
                      },
                      color: "#777777",
                      height: "40px",
                      borderRadius: "10px",
                      fontWeight: 700,
                      fontSize: "18px",
                      textTransform: "none",
                    }}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            )}

            {activeStep === 1 && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", md: "22px", lg: "24px" },
                      fontWeight: 700,
                      color: "#4B4343",
                      mt: 3,
                    }}
                  >
                    Add Price Details
                  </Typography>
                  <Controller
                    name="monthlyRent"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Monthly Rent"
                        fullWidth
                        variant="standard"
                        sx={{
                          "& .MuiInputBase-root": { color: "#CDCDCD" },
                          "& .MuiInputLabel-root": { color: "#ABABAB" },
                          "& .MuiInput-underline:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:hover:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#CDCDCD",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="availablefrom"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Available From"
                        type="date"
                        fullWidth
                        variant="standard"
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          "& .MuiInputBase-root": { color: "#CDCDCD" },
                          "& .MuiInputLabel-root": { color: "#ABABAB" },
                          "& .MuiInput-underline:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:hover:before": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInput-underline:after": {
                            borderBottomColor: "#CDCDCD",
                          },
                          "& .MuiInputLabel-root.Mui-focused": {
                            color: "#CDCDCD",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px", lg: "17px" },
                      fontWeight: 700,
                      color: "#6C6C6C",
                      mb: 2,
                    }}
                  >
                    Security Deposit
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "grid", sm: "flex" },
                      gridTemplateColumns: {
                        xs: "repeat(2, 1fr)",
                        sm: "repeat(4, 1fr)",
                      },
                      gap: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    {SecurityDepositOptions.map((security) => (
                      <Button
                        key={security}
                        onClick={() => handleSelect(security)}
                        variant={
                          selectedSecurity === security ||
                          (security === "Custom" && customMonths)
                            ? "contained"
                            : "outlined"
                        }
                        sx={{
                          borderRadius: "8px",
                          fontWeight: 700,
                          textTransform: "none",
                          width: { xs: "100%", sm: "140px" },
                          height: "50px",
                          borderColor:
                            selectedSecurity === security ||
                            (security === "Custom" && customMonths)
                              ? "#E0D8C3"
                              : "#D9D9D9",
                          backgroundColor:
                            selectedSecurity === security ||
                            (security === "Custom" && customMonths)
                              ? "#E0D8C3"
                              : "transparent",
                          color:
                            selectedSecurity === security ||
                            (security === "Custom" && customMonths)
                              ? "#393939"
                              : "#000",
                          "&:hover": {
                            backgroundColor: "#E0D8C3",
                            borderColor: "#E0D8C3",
                          },
                          boxShadow: "none",
                        }}
                      >
                        {security === "Custom" && customMonths
                          ? customMonths
                          : security}
                      </Button>
                    ))}

                    {/* Dialog for Custom Month Selection */}
                    <Dialog
                      open={open}
                      onClose={() => setOpen(false)}
                      fullWidth
                    >
                      <DialogContent sx={{ pb: dropdownOpen ? 6 : 2 }}>
                        {" "}
                        {/* Extend height dynamically */}
                        <Typography variant="h6" gutterBottom>
                          Select Months
                        </Typography>
                        <Select
                          value={customMonths ? parseInt(customMonths) : ""}
                          onChange={handleCustomChange}
                          fullWidth
                          onOpen={() => setDropdownOpen(true)}
                          onClose={() => setDropdownOpen(false)}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                maxHeight: 200, // Shows 4 items before scrolling
                                overflowY: "auto",
                              },
                            },
                          }}
                        >
                          {[...Array(12).keys()].map((month) => (
                            <MenuItem key={month + 1} value={month + 1}>
                              {month + 1} Month{month + 1 > 1 ? "s" : ""}
                            </MenuItem>
                          ))}
                        </Select>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                      </DialogActions>
                    </Dialog>
                  </Box>
                </Grid>
                {/* Upload Images */}
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px", lg: "17px" },
                      fontWeight: 700,
                      color: "#6C6C6C",
                      mb: 1,
                    }}
                  >
                    Upload Images
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {uploadedImages.map((image, index) => (
                      <Card
                        key={index}
                        sx={{
                          width: { xs: 50, sm: 70, md: 80, lg: 90 },
                          height: { xs: 50, sm: 70, md: 80, lg: 90 },
                          position: "relative",
                          borderRadius: "7px",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={URL.createObjectURL(image)}
                        />
                        <IconButton
                          size="small"
                          sx={{ position: "absolute", top: 0, right: 0 }}
                          onClick={() => handleImageRemove(index)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </Card>
                    ))}
                    <Button
                      variant="outlined"
                      component="label"
                      sx={{
                        backgroundColor: "#F5F5F5",
                        color: "black",
                        borderColor: "grey.500",
                        "&:hover": {
                          backgroundColor: "#F5F5F5",
                        },
                        height: {
                          xs: "50px",
                          sm: "70px",
                          md: "80px",
                          lg: "90px",
                        },
                        width: {
                          xs: "50px",
                          sm: "70px",
                          md: "80px",
                          lg: "90px",
                        },
                        borderRadius: "7px",
                      }}
                    >
                      <UploadOutlinedIcon />
                      <input
                        type="file"
                        hidden
                        multiple
                        onChange={handleImageUpload}
                      />
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#484848",
                          "&.Mui-checked": { color: "#484848" },
                        }}
                      />
                    }
                    label="Share these listing informations"
                    sx={{
                      "& .MuiTypography-root": {
                        fontSize: { xs: "12px", sm: "15px" },
                        fontWeight: 700,
                        color: "#484848",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleNext}
                    sx={{
                      backgroundColor: "#E0D8C3",
                      "&:hover": {
                        backgroundColor: "#3E4C66",
                        color: "#fff",
                      },
                      color: "#777777",
                      height: "45px",
                      borderRadius: "10px",
                      fontWeight: 700,
                      fontSize: "18px",
                      textTransform: "none",
                    }}
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            )}

            {/* Step 2: Final Step */}
            {activeStep === 2 && (
              <Box
                textAlign="center"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px", lg: "17px" },
                    fontWeight: 700,
                    color: "#6C6C6C",
                    mb: 1,
                  }}
                >
                  Your property is now posted to viewers for Rent / Sell
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => router.push("/")}
                  sx={{
                    backgroundColor: "#E0D8C3",
                    "&:hover": {
                      backgroundColor: "#3E4C66",
                      color: "#fff",
                    },
                    color: "#777777",
                    height: "45px",
                    borderRadius: "10px",
                    fontWeight: 700,
                    fontSize: "18px",
                    textTransform: "none",
                    width: { xs: "100%", sm: "30%" },
                  }}
                >
                  Back To Home
                </Button>
              </Box>
            )}

            {/* Back Button */}
            {/* {activeStep > 0 && (
                <Button sx={{ mt: 2 }} onClick={handleBack}>
                  Back
                </Button>
              )} */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PropertyForm;
