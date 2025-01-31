"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Typography } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const LoanDoughnutChart = ({ principal, interest }) => {
  const data = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        data: [principal, interest],
        backgroundColor: ["#4ade80", "#E6E6FA"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    rotation: -90,
    circumference: 180,
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw.toLocaleString("en-IN");
            return `₹${value}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "180px", sm: "220px", md: "260px" },
        height: { xs: "100px", sm: "120px", md: "140px" },
        margin: "0 auto",
        position: "relative",
        maxWidth: "100%",
      }}
    >
      <Doughnut data={data} options={options} />
    </Box>
  );
};

export default function LoanCalculator() {
  const [loanDetails] = React.useState({
    principal: 100000,
    interest: 58581,
    monthlyEMI: 1322,
    totalAmount: 158581,
  });

  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "51px",
        backgroundColor: "#fff",
        borderRadius: { xs: "6px", sm: "8px" },
        padding: { xs: "16px", sm: "24px", md: "32px" },
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 6px 24px rgb(230, 230, 230)",
        transition: "all 0.3s ease-in-out",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0px 8px 28px rgb(220, 220, 220)",
          transform: { xs: "translateY(-2px)", md: "translateY(-4px)" },
        },
      }}
    >
      <Box 
        sx={{ 
          flex: "1 0 auto",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <LoanDoughnutChart
          principal={loanDetails.principal}
          interest={loanDetails.interest}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: "16px", sm: "24px", md: "32px" },
            marginTop: { xs: "24px", sm: "32px", md: "40px" },
            marginBottom: { xs: "32px", sm: "40px", md: "48px" },
            flexWrap: "wrap",
            padding: "0 8px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: { xs: "12px", sm: "16px", md: "20px" },
                height: { xs: "12px", sm: "16px", md: "20px" },
                backgroundColor: "#4ade80",
                borderRadius: "4px",
                flexShrink: 0,
              }}
            />
            <Typography sx={{ 
              color: "#314259", 
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: "500",
              whiteSpace: "nowrap"
            }}>
              Principal
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: { xs: "12px", sm: "16px", md: "20px" },
                height: { xs: "12px", sm: "16px", md: "20px" },
                backgroundColor: "#E6E6FA",
                borderRadius: "4px",
                flexShrink: 0,
              }}
            />
            <Typography sx={{ 
              color: "#314259", 
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: "500",
              whiteSpace: "nowrap"
            }}>
              Interest
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box 
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: { xs: "16px", sm: "20px", md: "24px" },
          marginTop: { xs: "auto", md: "0" },
          flexShrink: 0,
          width: "100%",
          paddingBottom: { xs: "8px", sm: "12px", md: "16px" },
        }}
      >
        {[
          { label: "Monthly EMI Is", value: loanDetails.monthlyEMI },
          { label: "Total Amount Payable Is", value: loanDetails.totalAmount },
          { label: "Interest Component", value: loanDetails.interest }
        ].map((item, index) => (
          <Box
            key={item.label}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ebebeb",
              paddingBottom: { xs: "16px", sm: "20px", md: "24px" },
              padding: { xs: "0 12px", sm: "0 16px", md: "0 24px" },
              flexWrap: "wrap",
              gap: { xs: "8px", sm: "12px" },
            }}
          >
            <Typography sx={{ 
              color: "#314259", 
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: "500",
              minWidth: { xs: "120px", sm: "auto" },
            }}>
              {item.label}
            </Typography>
            <Typography sx={{ 
              color: "#314259", 
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: "600",
              marginLeft: "auto",
            }}>
              ₹{item.value.toLocaleString("en-IN")}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}