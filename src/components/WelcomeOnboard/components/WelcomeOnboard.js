"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import StraightIcon from "@mui/icons-material/Straight";
import React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    background: "#E8E8E8",
    borderRadius: "4px",
    // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  stepTag: {
    background: "#909090",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    padding: "10px 28px",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%)",
    width: "101px",
  },
}));

export default function WelcomeOnboard() {
  const classes = useStyles();

  const steps = [
    {
      step: "Step 1",
      title: "Post Your Property",
      description:
        "Lorem ipsum dolor sit ametnsectetur adipiscing elitn ultricies interd.",
      image: "/Images/step1.svg",
    },
    {
      step: "Step 2",
      title: "Add Genuine Photo & Info",
      description:
        "Lorem ipsum dolor sit ametnsectetur adipiscing elitn ultricies interd.",
      image: "/Images/step2.svg",
    },
    {
      step: "Step 3",
      title: "Self-Verify Your Property",
      description:
        "Lorem ipsum dolor sit ametnsectetur adipiscing elitn ultricies interd.",
      image: "/Images/step3.svg",
    },
  ];

  return (
    <Box sx={{ px: { xs: 2,  }, mt: 2 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "37px", fontWeight: 600, color: "#484848" }}
            >
              Property Onboard!
            </Typography>
            <Typography
              sx={{ fontSize: "18px", fontWeight: 500, color: "#616161" }}
            >
              {" "}
              50K Owners & 12 Lac Buyers are Waiting for You!
            </Typography>
            {/* <Button
              endIcon={
                <StraightIcon
                  sx={{ transform: "rotate(90deg)"}}
                />
              }
              sx={{color: "#BDB38B", textTransform: "none", fontSize: "18px", fontWeight: 500, textDecoration: "underline"}}
            >
              Go To My Dashboard
            </Button> */}
            {/* <Typography
              // component="a"
              // href="#"
              sx={{
                color: "#BDB38B",
                // textTransform: "none",
                fontSize: "18px",
                fontWeight: 700,
                // textDecoration: "underline",
                // display: "flex",
                // alignItems: "center",
                gap: "11px",
                mt: "26px",
              }}
            >
              Welcome to My Dashboard
            </Typography> */}
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image
              src="/Images/WelcomOnboard.svg"
              alt="agent"
              layout="responsive"
              width={406}
              height={207}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
      </Grid>
      {/* <Box sx={{ flexGrow: 1, padding: "20px" }}>
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#484848",
            mb: "40px",
          }}
        >
          Maximize Your Leads With 4 Simple Steps
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box className={classes.card}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Box className={classes.stepTag}>{step.step}</Box>
                </Box>
                <Box sx={{ display: "flex", gap: 2, px: 2, pt: 2, pb: 4 }}>
                  <Box
                    style={{
                      width: "10%",
                    }}
                  >
                    <Image
                      src={step.image}
                      alt="agent"
                      layout="responsive"
                      width={406}
                      height={207}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Box sx={{ maxWidth: 350 }}>
                    <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {step.description}
                    </Typography>
                    <Typography
                      component="a"
                      href="#"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#3E3E3E",
                        textDecoration: "underline",
                        textUnderlineOffset: "2px",
                      }}
                    >
                      Buy Now
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box> */}
    </Box>
  );
}
