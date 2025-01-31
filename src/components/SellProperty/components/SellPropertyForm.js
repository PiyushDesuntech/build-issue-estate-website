"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const SellPropertyForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const onSubmit = (data) => {
    console.log("data :>> ", data);
    const { yearBuilt, bedrooms, bathrooms, expectedPrice } = data;
    if (yearBuilt && bedrooms && bathrooms && expectedPrice) {
      setOpenDialog(true); 
    }
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    router.push("/"); 
  };

  return (
    <Box sx={{ py: 3, px: {xs:1, md: 3} }}>
      <Box
        sx={{
          mx: "auto",
          my: 1,
          py: 6,
          px: {xs:2, md: 16, lg: 24},
          borderRadius: "10px",
          background: "#fff",
        }}
      >
        <Typography
          sx={{ fontWeight: 600, fontSize: {xs: "26px", sm: "34px", md: "38px", lg: "40px"} }}
          align="center"
          gutterBottom
        >
          Let’s Verify Some Home Facts
        </Typography>
        <Typography
          sx={{ fontWeight: 400, fontSize: {xs: "14px", sm: "15px", md: "16px", lg: "17.23px"}, color: "#484848" }}
          align="center"
          gutterBottom
        >
          Nulla malesuada velit ac commodo porta. Sed vulputate purus vitae
          vulputate fringilla.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={isMobile? 2 : 4} sx={{ mt: {xs: "20px", md: "50px"} }}>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{
                  fontSize: {xs: "16px", md: "20px"},
                  color: "#484848",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Finished Sq. Ft.{" "}
                <span style={{ color: "#48484880" }}>(optional)</span>
              </Typography>
              <TextField
              size={isMobile? "small" : "medium"}
                fullWidth
                {...register("finishedSqFt")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{
                  fontSize: {xs: "16px", md: "20px"},
                  color: "#484848",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Lot Size <span style={{ color: "#48484880" }}>(optional)</span>
              </Typography>
              <TextField
              size={isMobile? "small" : "medium"}
                fullWidth
                // InputProps={{
                //   endAdornment: (
                //     <Typography sx={{ whiteSpace: "nowrap", }}>
                //       Sq. Ft.
                //     </Typography>
                //   ),
                // }}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#E0D8C3",
                            "&:hover": {
                              backgroundColor: "#4D4D4D",
                              color: "#fff",
                              boxShadow: "none",
                            },
                            color: "#000",
                            minWidth:{xs: "80px", md:  "118px"},
                            height: {xs: "100%", md: "55px"},
                            mr: -1.7,
                            borderRadius: "0px 8.63px 8.63px 0px",
                            boxShadow: "none", 
                            fontSize: "16px",
                            fontWeight: 500,
                            textTransform: "none"
                          }}
                        >
                          Sq. Ft.
                        </Button>
                      </InputAdornment>
                    ),
                    style: {
                      backgroundColor: "#fff",
                      borderRadius: "8.63px",
                    },
                  }}
                {...register("lotSize")}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{
                  fontSize: {xs: "16px", md: "20px"},
                  color: "#484848",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Year Built<span style={{ color: "red" }}>*</span>{" "}
              </Typography>
              <TextField
              size={isMobile? "small" : "medium"}
                fullWidth
                {...register("yearBuilt", {
                  required: "Year Built is required",
                })}
                error={!!errors.yearBuilt}
                helperText={errors.yearBuilt?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{
                  fontSize: {xs: "16px", md: "20px"},
                  color: "#484848",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Bedrooms <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
              size={isMobile? "small" : "medium"}
                fullWidth
                {...register("bedrooms", { required: "Bedrooms are required" })}
                error={!!errors.bedrooms}
                helperText={errors.bedrooms?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{
                  fontSize: {xs: "16px", md: "20px"},
                  color: "#484848",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Bathroooms <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
              size={isMobile? "small" : "medium"}
                fullWidth
                {...register("bathrooms", {
                  required: "Bathrooms are required",
                })}
                error={!!errors.bathrooms}
                helperText={errors.bathrooms?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                sx={{
                  fontSize: {xs: "16px", md: "20px"},
                  color: "#484848",
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Expected Price <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
              size={isMobile? "small" : "medium"}
                fullWidth
                {...register("expectedPrice", {
                  required: "Expected Price is required",
                })}
                error={!!errors.expectedPrice}
                helperText={errors.expectedPrice?.message}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.63px",
                    "&:hover fieldset": {
                      borderColor: "#C0C0C0",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C0C0C0",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C0C0C0",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                px: 4,
                boxShadow: "none",
                background: "#E8E1C4",
                color: "#484848",
                "&:hover": { boxShadow: "none" },
                textTransform: "none",
                fontSize: {xs: "16px", md: "20px"},
                fontWeight: 500,
              }}
            >
              Continue
            </Button>
          </Box>
        </form>

        {/* Confirmation Dialog */}
        <Dialog open={openDialog} onClose={handleCloseDialog}  sx={{
        "& .MuiPaper-root": {
          borderRadius: "10px", 
        },
      }}>
          <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            Sell Your Property 
            <IconButton
          onClick={handleCloseDialog}
          sx={{
            color: "gray",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <Icon icon="mdi:close" />
        </IconButton>
            </DialogTitle>
          <Divider/>
          <DialogContent sx={{p: 2}}>
            <Typography sx={{fontSize: "18px", fontWeight: 500, color: "#777777", mb: 3, mt: 1}}>
            Our Agents will get you back soon. Thankyou.
            </Typography>
          </DialogContent>
          <DialogActions sx={{p: 2}}>
            <Button
            fullWidth
              onClick={handleCloseDialog}
              variant="contained"
              sx={{
                px: 4,
                boxShadow: "none",
                background: "#E8E1C4",
                color: "#484848",
                "&:hover": { boxShadow: "none" },
                textTransform: "none",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default SellPropertyForm;
