"use client"
import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";

export default function LookingFor() {
  const [activeTab, setActiveTab] = useState("rent"); // Default active tab is "rent"

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        mb: 3,
        mt: 6,
      }}
    >
      {/* Background Image Container */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: {
            xs: "75%", // 30% of the box height on small screens
            sm: "70%", // 40% of the box height on medium screens
            md: "70%", // 50% of the box height on larger screens
          },
          backgroundImage: "url(/Images/LookingFor.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      ></Box>

      {/* Content Overlay */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2, // Bring content above the background
          paddingTop: {
            xs: "20%", // Add space for the background on small screens
            sm: "15%", // Adjust for medium screens
            md: "5%", // Standard space for larger screens
          },
          color: "#fff",
          mt: {xs: -4,sm: -6, md: 0}
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: 2,
            fontSize: {xs:"24px", md: "40px"},
            fontWeight: 500
          }}
        >
          Available Properties Near You{" "}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginBottom: 4,
            fontSize: {xs:"12px",md: "16px"}
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Box sx={{display: "flex", justifyContent: "center", gap: "21px", mb: "41px"}}>
          <Button
            variant="contained"
            onClick={() => handleTabChange("rent")}
            sx={{
              textTransform: "none",
              backgroundColor: activeTab === "rent" ? "#E0D8C3": "#fff",
              "&:hover": {
                backgroundColor: "#E0D8C3",
              },
              color: "#4D4D4D",
              //  color: activeTab === "rent" ? "#fff" : "#000",
              minWidth: "122px",
              height: "48px",
              fontSize: "16px",
              fontWeight: 500
            }}
          >
            Rent
          </Button>
          <Button
            variant="contained"
            onClick={() => handleTabChange("buy")}
            sx={{
              backgroundColor: activeTab === "buy" ?"#E0D8C3": "#fff",
              "&:hover": {
                backgroundColor: "#E0D8C3",
              },  
              color: "#4D4D4D",
              minWidth: "122px",
              height: "48px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 500
            }}
          >
            Buy
          </Button>
        </Box>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            paddingTop: {
              xs: "50%", // Higher aspect ratio on small screens
              sm: "45%", // Adjusted for medium screens
              md: "40%", // Standard aspect ratio for larger screens
            },
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", // Box shadow
            borderRadius: 2,
            border: "5px solid #fff",
            mx: { lg: 6 },
            mb: 2,
            height: "400px",
          }}
        >
           {activeTab === "rent" && (
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.312110584377!2d-73.92965166949828!3d40.703572024094804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25eab37fd60ef%3A0x1ff34649b0a304c9!2sHouse%20of%20Yes!5e0!3m2!1sen!2sin!4v1736509838444!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: 0,
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>
           )}
           {activeTab === "buy" && (
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6049.312110584377!2d-73.92965166949828!3d40.703572024094804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25eab37fd60ef%3A0x1ff34649b0a304c9!2sHouse%20of%20Yes!5e0!3m2!1sen!2sin!4v1736509838444!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: 0,
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>
           )}
        </Box>
      </Container>
    </Box>
  );
}
