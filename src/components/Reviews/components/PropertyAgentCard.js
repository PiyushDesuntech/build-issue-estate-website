import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";

const PropertyAgentCard = () => {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleShowPhone = () => {
    setIsPhoneVisible(!isPhoneVisible);
  };

  return (
    <Box
      sx={{
        maxWidth: {
          xs: '100%',
          sm: 350,
          md: "100%"
        },
        // margin: "auto",
        //height: { xs: "auto", sm: "37%" }
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#444",
          fontWeight: 400,
          mb: 3.5,
          textAlign: "center",
          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" }
        }}
      >
        Your Property Agent
      </Typography>

      <Card
        sx={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: 2,
          bgcolor: "white",
          height: "100%",
          width: { xs: '90%', sm: '100%' },
          mx: { xs: 'auto', sm: 0 }
        }}
      >
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          p: { xs: 1, sm: 1.5, md: 2 }
        }}>
          <Image
            src="/Images/agentList1.svg"
            alt="Property Agent"
            width={isMobile ? 300 : isTablet ? 350 : 430}
            height={isMobile ? 200 : isTablet ? 250 : 300}
            style={{ 
              borderRadius: "8px", 
              objectFit: "cover",
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </Box>

        <CardContent sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          mt: { xs: -1, sm: -1.5, md: -2 },
          pl: { xs: 2, sm: 3, md: 4 }
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              mb: 0.5,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
            }}
          >
            Tom Willson
          </Typography>
          <Typography sx={{ 
            color: "#777", 
            fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }, 
            mb: 2 
          }}>
            Marketing
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              mb: 1,
              gap: { xs: 1, sm: 0 }
            }}
          >
            <Typography sx={{ 
              color: "#444", 
              minWidth: { xs: '100%', sm: 60 }
            }}>
              Phone:
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1,
              width: { xs: '100%', sm: 'auto' }
            }}>
              <Typography sx={{ marginRight: 1 }}>
                {isPhoneVisible ? "91 456 9876" : "91 456 9***"}
              </Typography>
              <Button
                variant="contained"
                onClick={handleShowPhone}
                sx={{
                  bgcolor: "#888",
                  color: "white",
                  textTransform: "none",
                  minWidth: "50px",
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  py: 0.5,
                  px: 1,
                  "&:hover": { bgcolor: "#777" },
                }}
              >
                {isPhoneVisible ? "Hide" : "Show"}
              </Button>
            </Box>
          </Box>

          <Box sx={{ 
            display: "flex", 
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' }, 
            fontSize: { xs: '0.85rem', sm: '0.9rem' },
            gap: { xs: 1, sm: 0 }
          }}>
            <Typography sx={{ 
              color: "#444", 
              minWidth: { xs: '100%', sm: 60 }
            }}>
              Email:
            </Typography>
            <Typography sx={{ 
              color: "#666",
              marginLeft: { xs: 0, sm: 1 }
            }}>
              infoagent@example.com
            </Typography>
          </Box>
        </CardContent>

        <Box
          sx={{
            p: { xs: 1, sm: 1.5 }, // Reduced padding here
            borderTop: "1px solid #eee",
            textAlign: "right",
          }}
        >
          <Button
            sx={{
              color: "#666",
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              textTransform: "none",
              "&:hover": { bgcolor: "transparent", color: "#444" },
            }}
          >
            View My Listings
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default PropertyAgentCard;