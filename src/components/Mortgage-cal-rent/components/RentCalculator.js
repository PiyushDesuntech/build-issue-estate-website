"use client";
import React from "react";
import { Box, Typography, TextField, Container } from "@mui/material";

const RentRange = ({ title, percentage, amount, isHighRange, isMidRange }) => {
  const amountColor = isHighRange ? "#F8BF16" : isMidRange ? "#073E7A" : "#061C35";

  return (
    <Box sx={{ width: "100%", minWidth: "51px" }}>
      <Box
        sx={{
          borderTop: {
            xs: title !== "High Range" ? "1px solid #E5E5E5" : "none",
            sm: "none"
          },
          display: { xs: "block", sm: "none" },
          mt: { xs: 3, sm: 0 }
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "8px", sm: "10px", md: "12px", lg: "16px" },
          borderRight: {
            sm: title !== "Low Range" ? "1px solid #E5E5E5" : "none",
          },
          paddingRight: {
            sm: title !== "Low Range" ? "24px" : "0",
            lg: title !== "Low Range" ? "48px" : "0",
          },
          height: "100%",
          marginTop: { xs: 3, sm: 0 },
          paddingTop: { xs: 0, sm: "20px", lg: "29px" },
          marginBottom: { xs: "24px", sm: "16px" },
          alignItems: { xs: "center", sm: "center", lg: "flex-start" },
          maxWidth: { sm: "100%", lg: "350px" }
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "18px", md: "20px", lg: "24.44px" },
            fontWeight: "700",
            color: "#0A2540",
            textAlign: { xs: "center", lg: "left" }
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#666",
            fontSize: { xs: "14px", sm: "14px", md: "15px", lg: "17.78px" },
            textAlign: { xs: "center", lg: "left" }
          }}
        >
          {percentage}% of Gross Income
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "28px", md: "32px", lg: "44.44px" },
            fontWeight: "700",
            color: amountColor,
            mb: { xs: 1, sm: 1.5, lg: 2 },
            textAlign: { xs: "center", lg: "left" }
          }}
        >
          ${amount}
        </Typography>
        <Box
          sx={{
            // backgroundColor: "#E8E1C4",
            // color: "#777777",
            width: { xs: "200px", sm: "160px", md: "172.8px" },
            height: { xs: "36px", sm: "36px", md: "40px", lg: "43.33px" },
            borderRadius: "55.56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backgroundColor: "#E0D8C3",
                  "&:hover": {
                    backgroundColor: "#3E4C66",
                    color: "#fff",
                  },
                  color: "#000",
          }}
        >
          <Typography sx={{ 
            fontSize: { xs: "13px", sm: "13px", md: "14px", lg: "15.56px" },
            whiteSpace: "nowrap"
          }}>
            View Apartments
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default function RentCalculator() {
  const [income, setIncome] = React.useState(150000);

  const calculateRent = (percentage) => {
    return Math.floor((income * (percentage / 100)) / 12).toLocaleString();
  };

  return (
    <Container maxWidth="xl" sx={{px: {xs: 3, lg: 8}}}>
      <Box
      sx={{
        width: { 
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%" 
        },
        // maxWidth: "1300px",
        height: { xs: "auto", lg: "431px" },
        backgroundColor: "#FFFFFF",
        borderRadius: { xs: "6px", sm: "8px", md: "10px", lg: "11.11px" },
        padding: { 
          xs: "16px",
          sm: "20px",
          md: "24px",
          lg: "32px 32px 32px 24px" 
        },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        minWidth: "51px",
        overflow: "hidden"
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          mb: { xs: 2, sm: 2.5, md: 3 }
        }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "flex-start" },
              position: "relative",
              borderBottom: { xs: "1px solid #E5E5E5", sm: "none" },
              pb: { xs: 3, sm: 0 },
              gap: { xs: "16px", sm: "20px", md: "24px" },
              flexWrap: "wrap"
            }}
          >
            <Box sx={{ 
              width: { xs: "100%", sm: "auto" },
              maxWidth: { xs: "100%", sm: "60%", md: "50%" }
            }}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "26px", md: "32px", lg: "37.33px" },
                  fontWeight: "700",
                  color: "#0A2540",
                  mb: { xs: "8px", sm: "6px", md: "8px" },
                  lineHeight: { xs: 1.2, sm: 1.25, md: 1.3 },
                  whiteSpace: "nowrap"
                }}
              >
                Rent Calculator
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  fontSize: { xs: "13px", sm: "13.5px", md: "14px", lg: "16px" },
                  lineHeight: { xs: 1.4, sm: 1.45, md: 1.5 }
                }}
              >
                How much do you (or your cosigner) earn each year before taxes?
              </Typography>
            </Box>
            <Box sx={{ 
              width: { xs: "100%", sm: "200px", md: "220px", lg: "231.69px" },
              marginLeft: { sm: "auto" }
            }}>
              <TextField
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                type="number"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "24px",
                    backgroundColor: "#F8F8F8",
                    height: { xs: "36px", sm: "38px", md: "40px" },
                    border: "1px solid #061C35",
                    boxShadow: "0px 0px 4px 0px #81C76F"
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none"
                  },
                  "& .MuiInputBase-input": {
                    padding: { xs: "6px 14px", sm: "7px 15px", md: "8px 16px" },
                    fontSize: { xs: "14px", sm: "15px", md: "16px" }
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        borderTop: { sm: "1px solid #E5E5E5" },
        mt: { xs: 0, sm: 1, md: 2 },
        pt: { xs: 2, sm: 1, md: 0 }
      }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)"
            },
            gap: { xs: "24px", sm: "16px", md: "24px", lg: "40px" },
            maxWidth: { lg: "1200px" }
          }}
        >
          <RentRange
            title="High Range"
            percentage={35}
            amount={calculateRent(35)}
            isHighRange={true}
          />
          <RentRange
            title="Mid Range"
            percentage={25}
            amount={calculateRent(25)}
            isMidRange={true}
          />
          <RentRange
            title="Low Range"
            percentage={15}
            amount={calculateRent(15)}
            isHighRange={false}
          />
        </Box>
      </Box>
    </Box>
    </Container>
  );
}