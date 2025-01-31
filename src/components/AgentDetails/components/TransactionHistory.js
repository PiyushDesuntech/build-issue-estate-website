"use client";
import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  " 1 Year": {
    title: "1 Year",
    seller: {
      totalDeals: 20,
      totalValue: "$8,500,000",
      avgPrice: "$425,000",
      range: "$150K - $1M",
    },
    buyer: {
      totalDeals: 15,
      totalValue: "$7,800,000",
      avgPrice: "$520,000",
      range: "$175K - $1.2M",
    },
    chart: [14, 10, 9, 12],
  },
  " 2 Year": {
    title: "2 Year",
    seller: {
      totalDeals: 50,
      totalValue: "$21,000,000",
      avgPrice: "$420,000",
      range: "$120K - $1M",
    },
    buyer: {
      totalDeals: 45,
      totalValue: "$20,500,000",
      avgPrice: "$455,000",
      range: "$140K - $1.3M",
    },
    chart: [10, 15, 12, 18],
  },
  "5 Year": {
    title: "5 Year",
    seller: {
      totalDeals: 83,
      totalValue: "$38,871,485",
      avgPrice: "$468,331",
      range: "$127K - $1.3M",
    },
    buyer: {
      totalDeals: 68,
      totalValue: "$35,504,731",
      avgPrice: "$522,128",
      range: "$135K - $1.4M",
    },
    chart: [12, 27, 15, 22],
  },
};

const TransactionHistory = () => {
  const [selectedTab, setSelectedTab] = useState("5 Year");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const chartData = {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Production Over Time",
        data: data[selectedTab].chart,
        fill: false,
        backgroundColor: "#00488A",
        borderColor: "#00488A)",
        pointRadius: 0,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        position: "right",
        grid: {
          drawBorder: false,
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          callback: function (value) {
            return `$${value}M`;
          },
          stepSize: 4,
        },
        beginAtZero: false,
        min: 8,
      },
    },
  };

  return (
    <Box sx={{}}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#EB7100",
            height: "3px",
          },
        }}
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: "12.86px",
            fontWeight: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
          },
          "& .Mui-selected:before": {
            backgroundColor: "#EB7100",
          },
          "& .Mui-selected": {
            color: "#000000 !important",
            fontWeight: 500,
          },
        }}
      >
        {Object.keys(data).map((key) => (
          <Tab label={key} value={key} key={key} />
        ))}
      </Tabs>
        <Divider/>

      <Grid container spacing={1} sx={{ marginTop: 1 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ border: "0.71px solid #D2D2D2", borderRadius: "8.57px" }}>
            <Typography
              sx={{
                fontSize: "12.86px",
                fontWeight: 500,
                background: "#FAFAFA",
                p: 1,
                borderRadius: "8.57px 8.57px 0px 0px",
              }}
            >
              Seller Deals
            </Typography>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
            >
              <Typography sx={{ fontSize: "11.43px", fontWeight: 300 }}>
                Total Deals:
              </Typography>
              <Typography sx={{ fontSize: "11.43px", fontWeight: 500 }}>
                {data[selectedTab].seller.totalDeals}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
            >
              <Typography sx={{ fontSize: "11.43px", fontWeight: 300 }}>
                Total Value:
              </Typography>
              <Typography sx={{ fontSize: "11.43px", fontWeight: 500 }}>
                {data[selectedTab].seller.totalValue}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
            >
              <Typography sx={{ fontSize: "11.43px", fontWeight: 300 }}>
                Average Sale Price:
              </Typography>
              <Typography sx={{ fontSize: "11.43px", fontWeight: 500 }}>
                {data[selectedTab].seller.avgPrice}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
            >
              <Typography sx={{ fontSize: "11.43px", fontWeight: 300 }}>
                Price Range: {data[selectedTab].seller.range}
              </Typography>
              <Typography sx={{ fontSize: "11.43px", fontWeight: 500 }}>
                {data[selectedTab].seller.range}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ border: "0.71px solid #D2D2D2", borderRadius: "8.57px" }}>
            <Typography
              sx={{
                fontSize: "12.86px",
                fontWeight: 500,
                background: "#FAFAFA",
                p: 1,
                borderRadius: "8.57px 8.57px 0px 0px",
              }}
            >
              Buyer Deals
            </Typography>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
            >
              <Typography sx={{ fontSize: "11.43px", fontWeight: 300 }}>
                Total Deals:
              </Typography>
              <Typography sx={{ fontSize: "11.43px", fontWeight: 500 }}>
                {data[selectedTab].seller.totalDeals}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
            >
              <Typography sx={{ fontSize: "11.43px", fontWeight: 300 }}>
                Total Value:
              </Typography>
              <Typography sx={{ fontSize: "11.43px", fontWeight: 500 }}>
                {data[selectedTab].seller.totalValue}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
            >
              <Typography sx={{ fontSize: "11.43px", fontWeight: 300 }}>
                Average Sale Price:
              </Typography>
              <Typography sx={{ fontSize: "11.43px", fontWeight: 500 }}>
                {data[selectedTab].seller.avgPrice}
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
            >
              <Typography sx={{ fontSize: "11.43px", fontWeight: 300 }}>
                Price Range: {data[selectedTab].seller.range}
              </Typography>
              <Typography sx={{ fontSize: "11.43px", fontWeight: 500 }}>
                {data[selectedTab].seller.range}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{fontSize: "12.86px", fontWeight: 500}}>Production Over Time</Typography>
           
            <Typography sx={{fontSize: "11.43px", fontWeight: 400}}>{data[selectedTab].title} View</Typography>
          <Box sx={{ height: "200px", width: "100%" }}>
            <Line
              data={chartData}
              options={chartOptions}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionHistory;
