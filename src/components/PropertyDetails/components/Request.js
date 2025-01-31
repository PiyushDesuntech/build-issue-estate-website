import React from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Image from "next/image";

function Request() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: {xs:2, sm: 3},
        // maxWidth: 400,
        margin: "auto",
        padding: {xs: 2, sm: 4},
        borderRadius: "8px",
        border: "2px solid #EBEBEB",
      }}
    >
      <Typography sx={{fontSize: "22.15px", fontWeight: 700, color:"#484848"}}>
        Request More Information
      </Typography>
      <TextField
        label="Name"
        required
        variant="outlined"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
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
      <TextField
        label="E-mail"
        required
        variant="outlined"
        type="email"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
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
      <TextField
        label="Phone"
        variant="outlined"
        type="tel"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
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
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "1.73px",
          padding: "8px 16px",
          maxWidth: "411.88px",
          // fullWidth
          width: "100%",
          mt: {xs: 0, sm: 2},
          mb: {xs: 0, sm: 1},
        }}
      >
        {/* Checkbox and Text */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox />
          <Typography sx={{ fontSize: "14px", color: "#333" }}>
            I’m not a robot
          </Typography>
        </Box>

        {/* reCAPTCHA Logo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            src="/Images/recaptcha.svg"
            alt="reCAPTCHA"
            width={30}
            height={30}
          />
          <Typography
            sx={{
              fontSize: "12.09px",
              color: "#474444",
              fontWeight: 500,
            }}
          >
            reCAPTCHA
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              fontSize: "10.36px",
              color: "#676767",
            }}
          >
            <Typography
              component="span"
              sx={{ fontSize: "10.36px", color: "#676767" }}
            >
              Privacy
            </Typography>
            <Typography
              component="span"
              sx={{ fontSize: "10.36px", color: "#676767" }}
            >
              Terms
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: {xs: 0, sm: 2},
          bgcolor: "#E8E1C4",
          color: "#484848",
          boxShadow: "none",
          py: 2,
          "&:hover": {
            backgroundColor: "#3E4C66",
            color: "#fff",
            boxShadow: "none"
          },
          fontSize: "20px",
          textTransform: "none",
          borderRadius: "8px",
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}

export default Request;
