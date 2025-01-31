"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function LoanInformation() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F7F7F7",
        padding: { xs: 1, sm: 2, lg: "40px" },
        marginTop: { xs: "24px", sm: "32px", md: "40px" },
      }}
    >
      <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ width: "100%" }}>
        <Grid item xs={12} lg={7.5}>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
              fontWeight: 800,
              color: "#314259",
              marginBottom: { xs: "16px", sm: "20px", md: "24px" },
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.3,
            }}
          >
            What is Loan Against Property EMI?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              color: "#314259",
              lineHeight: { xs: 1.6, sm: 1.8, md: 2 },
              fontFamily: "'Inter', sans-serif",
              marginBottom: { xs: "20px", sm: "24px", md: "24px" },
              opacity: 0.9,
              color: "#9092A3",
              fontWeight: 500
            }}
          >
            The loan against property is secured against an asset such as a
            residential house or a commercial premise. The loan against property
            EMIs are made up of both, the principal and the interest portions.
            The pledged asset remains as collateral with the lender until you
            repay the total loan against the property amount. The loan against
            property interest rates are lower as compared to an unsecured loan
            such as a personal loan. The loan against property has no end-use
            restrictions, and you may use the loan for individual needs. The loan
            against property is also called the mortgage loan as it is secured
            against immovable property. The calculation of the loan against the
            property schedule is based on amortization. The interest component
            would constitute a larger part of the EMIs during the initial stages
            as compared to the principal portion. However, as you continue
            repaying the EMIs, the interest portion reduces, and the principal
            component of your EMI goes up. The total value of the loan against
            property EMI will remain constant across the tenure of the loan.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={7.5}>
          <Typography
            sx={{
              fontSize: { xs: "20px", sm: "22px", md: "24px" },
              fontWeight: 800,
              color: "#314259",
              marginBottom: { xs: "16px", sm: "20px", md: "24px" },
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.3,
            }}
          >
            What is the Loan Against Property EMI Calculator?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              color: "#314259",
              lineHeight: { xs: 1.6, sm: 1.8, md: 2 },
              fontFamily: "'Inter', sans-serif",
              marginBottom: { xs: "20px", sm: "24px", md: "24px" },
              opacity: 0.9,
              color: "#9092A3",
              fontWeight: 500
            }}
          >
            The loan against property EMI calculator is a utility tool that shows
            the loan against property EMIs you must pay the lender every month.
            If you enter the loan amount, the rate of interest, and the tenure of
            the loan, the loan against property EMI calculator will show the
            monthly EMI in seconds. The loan against property EMI calculator
            consists of a formula box and three sliders showing the loan amount,
            duration, and the rate of interest. After you fill in the details,
            the calculator will display the EMI amount that you must pay the
            lender every month, to repay the loan against the property.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}