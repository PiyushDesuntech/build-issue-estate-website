import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export default function RecentBlog() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/Images/recentBG.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        mt: 8,
      }}
    >
      <Container maxWidth="xl" sx={{ px: {md: 3,lg: 8 }, pb: {xs: 1, lg: 5} }}>
        <Grid container spacing={2}>
          <Grid item lg={6.5} md={7} xs={12} sx={{ color: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: {xs: "flex-start", md: "center"},
                py: { xs: 2, md: 2 },
                mt: 2,
              }}
            >
              <Typography sx={{ fontSize: {xs:"18px",sm: "22px",lg: "25px"}, fontWeight: 500 }}>
                Recent Blog{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: {xs: "flex-start", md: "center"}
                }}
              >
                <Box
                  sx={{
                    height: {xs: "100%", md: "147px"},
                    width: {xs: "100%", md: "213px"},
                    overflow: "hidden",
                    mt: 2,
                    borderRadius: "5px",
                  }}
                >
                  <Image
                    src="/Images/RecentBlog.svg"
                    alt="Colonial Realty Associates"
                    layout="responsive"
                    width={283}
                    height={147}
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: {xs: "flex-start", md: "center"},
                    maxWidth: {xs: "100%", lg: "403px"},
                    // mt: 4,
                  }}
                >
                  <Typography sx={{ fontSize: {xs:"15px",sm: "18px",lg: "23px"}, fontWeight: 500 }}>
                    My Two Cents: How Tax Changes will Affect - Home Buying in
                    2019
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography sx={{ fontSize: {xs:"12px",sm: "14px",md: "16px"} }}>
                      05/17/2019
                    </Typography>
                    <Button
                      endIcon={<EastIcon />}
                      sx={{
                        color: "#fff",
                        textTransform: "none",
                        fontSize: {xs:"12px",sm: "14px",md: "16px"},
                        "&:hover": {color: "#E8E1C4"}
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={5.5} md={5} xs={12} sx={{ display: "flex" }}>
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <Divider
                sx={{
                  borderWidth: "2px",
                  borderColor: "#ffffff",
                  width: "80%",
                  opacity: "20%",
                  mt: 4,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                py: { xs: 1, md: 3 },
                pl: { xs: 0, lg: 8 },
                color: "#fff",
                gap: 3,
                flexGrow: 1,
              }}
            >
              <Typography
                sx={{ textAlign: "start", fontSize: {xs:"26px", md: "30px",lg: "40px"}, fontWeight: 500 }}
              >
                Never miss an opportunity.
              </Typography>
              <Typography
                sx={{ textAlign: "start", fontSize: {xs:"12px",md: "16px"}, fontWeight: 500 }}
              >
                Subscribeto our newsletter for all updates.
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter Your Email Address"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#E0D8C3",
                          "&:hover": {
                            backgroundColor: "#3E4C66",
                            color: "#fff",
                          },
                          color: "#4D4D4D",
                          minWidth: {xs: "fit-content", sm: "150px"},
                          height: "56px",
                          mr: -1.8,
                          borderRadius: "0px 4px 4px 0px",
                          width: "100%",
                          textTransform: "none",
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                  style: {
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    border: "none",
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    border: "none",
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#A0A0A0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#A0A0A0",
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
