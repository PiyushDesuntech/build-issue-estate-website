"use client"
import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, Button , Accordion,
  AccordionSummary,
  AccordionDetails} from "@mui/material";

  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Dropdowns() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <Box>
      <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
        sx={{
          
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
        
          boxShadow: "none",
          // border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          // expandIcon={
          //   <ExpandMoreIcon
          //     sx={{
                // border: "2px solid #EBEBEB",
          //       borderRadius: "50%",
          //       color: "#EBEBEB",
          //       fontSize: "24px",
          //       "&:hover": { color: "#484848", background: "#BFBDBD" },
          //     }}
          //   />
          // }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{border: "1.53px solid",
            borderColor: expanded === "panel1" ? "#484848" : "#EBEBEB",
            borderRadius: "8px",}}
        >
          <Typography
            sx={{ color: "#484848", fontSize: {xs: "16px",sm: "18px", lg: "22px"  }, fontWeight: 700 }}
          >
            There are many variations of passages  of lorem
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "17px"}, fontWeight: 400, color: "#484848" }}
          >
            Evans Tower very high demand corner junior one bedroom plus a large
            balcony boasting full open NYC views. You need to see the views to
            believe them. Mint condition with new hardwood floors. Lots of
            closets plus washer and dryer.
            <br />
            <br />
            Fully furnished. Elegantly appointed condominium unit situated on
            premier location. PS6. The wide entry hall leads to a large living
            room with dining area. This expansive 2 bedroom and 2 renovated
            marble bathroom apartment has great windows. Despite the interior
            views, the apartments Southern and Eastern exposures allow for
            lovely natural light to fill every room. The master suite is
            surrounded by handcrafted milkwork and features incredible walk-in
            closet and storage space.
          
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
        sx={{
          
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
        
          boxShadow: "none",
          // border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          // expandIcon={
          //   <ExpandMoreIcon
          //     sx={{
                // border: "2px solid #EBEBEB",
          //       borderRadius: "50%",
          //       color: "#EBEBEB",
          //       fontSize: "24px",
          //       "&:hover": { color: "#484848", background: "#BFBDBD" },
          //     }}
          //   />
          // }
           aria-controls="panel2-content"
          id="panel2-header"
          sx={{border: "1.53px solid",
            borderColor: expanded === "panel2" ? "#484848" : "#EBEBEB",
            borderRadius: "8px",}}
        >
          <Typography
            sx={{ color: "#484848", fontSize: {xs: "16px",sm: "18px", lg: "22px"  }, fontWeight: 700 }}
          >
         Model sentence structres to generate
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "17px"}, fontWeight: 400, color: "#484848" }}
          >
            Evans Tower very high demand corner junior one bedroom plus a large
            balcony boasting full open NYC views. You need to see the views to
            believe them. Mint condition with new hardwood floors. Lots of
            closets plus washer and dryer.
            <br />
            <br />
            Fully furnished. Elegantly appointed condominium unit situated on
            premier location. PS6. The wide entry hall leads to a large living
            room with dining area. This expansive 2 bedroom and 2 renovated
            marble bathroom apartment has great windows. Despite the interior
            views, the apartments Southern and Eastern exposures allow for
            lovely natural light to fill every room. The master suite is
            surrounded by handcrafted milkwork and features incredible walk-in
            closet and storage space.
          
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
      expanded={expanded === "panel3"}
      onChange={handleChange("panel3")}
        sx={{
          
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
        
          boxShadow: "none",
          // border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          // expandIcon={
          //   <ExpandMoreIcon
          //     sx={{
                // border: "2px solid #EBEBEB",
          //       borderRadius: "50%",
          //       color: "#EBEBEB",
          //       fontSize: "24px",
          //       "&:hover": { color: "#484848", background: "#BFBDBD" },
          //     }}
          //   />
          // }
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ border: "1.53px solid",
            borderColor: expanded === "panel3" ? "#484848" : "#EBEBEB",
            borderRadius: "8px",}}
        >
          <Typography
            sx={{ color: "#484848", fontSize: {xs: "16px",sm: "18px", lg: "22px"  }, fontWeight: 700 }}
          >
          The first line of Lorem ipsum
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "17px"}, fontWeight: 400, color: "#484848" }}
          >
            Evans Tower very high demand corner junior one bedroom plus a large
            balcony boasting full open NYC views. You need to see the views to
            believe them. Mint condition with new hardwood floors. Lots of
            closets plus washer and dryer.
            <br />
            <br />
            Fully furnished. Elegantly appointed condominium unit situated on
            premier location. PS6. The wide entry hall leads to a large living
            room with dining area. This expansive 2 bedroom and 2 renovated
            marble bathroom apartment has great windows. Despite the interior
            views, the apartments Southern and Eastern exposures allow for
            lovely natural light to fill every room. The master suite is
            surrounded by handcrafted milkwork and features incredible walk-in
            closet and storage space.
          
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
      expanded={expanded === "panel4"}
      onChange={handleChange("panel4")}
        sx={{
          
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
        
          boxShadow: "none",
          // border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          // expandIcon={
          //   <ExpandMoreIcon
          //     sx={{
                // border: "2px solid #EBEBEB",
          //       borderRadius: "50%",
          //       color: "#EBEBEB",
          //       fontSize: "24px",
          //       "&:hover": { color: "#484848", background: "#BFBDBD" },
          //     }}
          //   />
          // }
           aria-controls="panel4-content"
          id="panel4-header"
          sx={{border: "1.53px solid",
            borderColor: expanded === "panel4" ? "#484848" : "#EBEBEB",
            borderRadius: "8px",}}
        >
          <Typography
            sx={{ color: "#484848", fontSize: {xs: "16px",sm: "18px", lg: "22px"  }, fontWeight: 700 }}
          >
          Letrasheet sheets containing lorem ipsum pages

          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "17px"}, fontWeight: 400, color: "#484848" }}
          >
            Evans Tower very high demand corner junior one bedroom plus a large
            balcony boasting full open NYC views. You need to see the views to
            believe them. Mint condition with new hardwood floors. Lots of
            closets plus washer and dryer.
            <br />
            <br />
            Fully furnished. Elegantly appointed condominium unit situated on
            premier location. PS6. The wide entry hall leads to a large living
            room with dining area. This expansive 2 bedroom and 2 renovated
            marble bathroom apartment has great windows. Despite the interior
            views, the apartments Southern and Eastern exposures allow for
            lovely natural light to fill every room. The master suite is
            surrounded by handcrafted milkwork and features incredible walk-in
            closet and storage space.
            <br />
            
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
       expanded={expanded === "panel5"}
       onChange={handleChange("panel5")}
        sx={{
          
          marginBottom: "px",
          borderRadius: "8px",
          overflow: "hidden",
        
          boxShadow: "none",
          // border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          // expandIcon={
          //   <ExpandMoreIcon
          //     sx={{
                // border: "2px solid #EBEBEB",
          //       borderRadius: "50%",
          //       color: "#EBEBEB",
          //       fontSize: "24px",
          //       "&:hover": { color: "#484848", background: "#BFBDBD" },
          //     }}
          //   />
          // }
          aria-controls="panel5-content"
          id="panel5-header"
          sx={{border: "1.53px solid",
            borderColor: expanded === "panel5" ? "#484848" : "#EBEBEB",
            borderRadius: "8px",}}
        >
          <Typography
            sx={{ color: "#484848", fontSize: {xs: "16px",sm: "18px", lg: "22px"  }, fontWeight: 700 }}
          >
            what are the houses review
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{ fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "17px"}, fontWeight: 400, color: "#484848" }}
          >
            Evans Tower very high demand corner junior one bedroom plus a large
            balcony boasting full open NYC views. You need to see the views to
            believe them. Mint condition with new hardwood floors. Lots of
            closets plus washer and dryer.
            <br />
            <br />
            Fully furnished. Elegantly appointed condominium unit situated on
            premier location. PS6. The wide entry hall leads to a large living
            room with dining area. This expansive 2 bedroom and 2 renovated
            marble bathroom apartment has great windows. Despite the interior
            views, the apartments Southern and Eastern exposures allow for
            lovely natural light to fill every room. The master suite is
            surrounded by handcrafted milkwork and features incredible walk-in
            closet and storage space.
           
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
