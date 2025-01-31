"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Icon } from "@iconify/react";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";

export default function OurMission() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        px: { lg: 7, md: 3, xs: 2 },
        mt: { xs: "20px", md: "40px", lg: "60px" },
      }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "28px", md: "30px", lg: "40px" },
            fontWeight: 500,
            color: "#484848",
          }}
        >
          Our Mission Is To Find House
        </Typography>

        <Grid
          container
          spacing={isMobile ? 1 : 4}
          sx={{ mt: { xs: "20px", md: "30px", lg: "47px" } }}
        >
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "20px", sm: "30px", md: "40px", lg: "70px" },
                p: 1,
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "19px", color: "#484848" }}
              >
                Mauris ac consectetur ante, dapibus gravida tellus. Nullam
                aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia
                tempor.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "13px", sm: "15px", lg: "17px" },
                  color: "#484848",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                quis ligula eu lectus vulputate porttitor sed feugiat nunc.
                Mauris ac consectetur ante, dapibus gravida tellus. Nullam
                aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia
                tempor, lectus orci elementum augue, eget auctor metus ante sit
                amet velit.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "13px", sm: "15px", lg: "17px" },
                  color: "#484848",
                }}
              >
                Maecenas quis viverra metus, et efficitur ligula. Nam congue
                augue et ex congue, sed luctus lectus congue. Integer convallis
                condimentum sem. Duis elementum tortor eget condimentum tempor.
                Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
                libero ligula. Vivamus semper at orci at placerat.Placeat Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Quod libero
                amet, laborum qui nulla quae alias tempora.
              </Typography>
              <Box sx={{ pt: { xs: 1, sm: 2, md: 0, lg: 2 }, }}>
                <Box sx={{display: "flex", flexWrap: "wrap", gap: {xs: 2,sm: 3, md: 3, lg: 3}, justifyContent: {xs: "center", sm: "unset"}}} >
                  <Box
                    textAlign="center"
                    sx={{ display: "flex", gap: {xs: 2, sm: 2, md: 1}, alignItems: "center", }}
                  >
                    <Box
                      sx={{
                        width: {xs: "30px", sm: "40px", md: "50px", lg: "68px"},
                        height: {xs: "30px", sm: "40px", md: "50px", lg: "68px"},
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/Images/UserIcon.svg"
                        // layout="responsive"
                        alt="User"
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                          fontSize: {
                            xs: "22px",
                            sm: "24px",
                            md: "24px",
                            lg: "27px",
                          },
                          color: "#484848",
                        }}
                      >
                        14,768
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", sm: "15px", lg: "17px" },
                          fontWeight: 400,
                          color: "#484848",
                        }}
                      >
                        Customers to date
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    textAlign="center"
                    sx={{ display: "flex", gap: {xs: 2, sm: 2, md: 1}, alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: {xs: "30px", sm: "40px", md: "50px", lg: "68px"},
                        height: {xs: "30px", sm: "40px", md: "50px", lg: "68px"},
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/Images/HomeIcon.svg"
                        alt="Home"
                        // layout="responsive"
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                          fontSize: {
                            xs: "22px",
                            sm: "24px",
                            md: "24px",
                            lg: "27px",
                          },
                          color: "#484848",
                        }}
                      >
                        $13 Billion
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", sm: "15px", lg: "17px" },
                          fontWeight: 400,
                          color: "#484848",
                        }}
                      >
                        In home sales
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    textAlign="center"
                    sx={{ display: "flex", gap: {xs: 2, sm: 2, md: 1}, alignItems: "center" }}
                  >
                    <Box
                      sx={{
                        width: {xs: "30px", sm: "40px", md: "50px", lg: "68px"},
                        height: {xs: "30px", sm: "40px", md: "50px", lg: "68px"},
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/Images/DollarIcon.svg"
                        alt="Dollar"
                        // layout="responsive"
                        width={50}
                        height={50}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                          fontSize: {
                            xs: "22px",
                            sm: "24px",
                            md: "24px",
                            lg: "27px",
                          },
                          color: "#484848",
                        }}
                      >
                        $85 Million
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", sm: "15px", lg: "17px" },
                          fontWeight: 400,
                          color: "#484848",
                        }}
                      >
                        In Savings
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              p: { xs: 0, lg: 2 },
              mt: {xs: 2, md: 0}
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: {
                  xs: "290px",
                  sm: "400px",
                  md: "450px",
                  lg: "598px",
                },
                display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                position: "relative",
              }}
            >
              {isVideoPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/JnTmPSswgzs?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url(/Images/ourmissions.svg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      background: "#B3A87A",
                      color: "#fff",
                      width: 86,
                      height: 86,
                      "&:hover": {
                        background: "#fff",
                        color: "#B3A87A",
                      },
                    }}
                    onClick={handlePlayVideo}
                  >
                    <PlayArrowOutlinedIcon sx={{ fontSize: 48 }} />
                  </IconButton>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
