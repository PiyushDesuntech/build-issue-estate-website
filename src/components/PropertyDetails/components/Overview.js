"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tabs,
  Tab,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";

export default function Overview() {
  const amenities = [
    "Air Conditioning",
    "Barbeque",
    "Dryer",
    "Gym",
    "Laundry",
    "Lawn",
    "Microwave",
    "Refrigerator",
    "Sauna",
    "Swimming Pool",
    "TV Cable",
    "Washer",
    "WiFi",
    "Window Coverings",
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Accordion
        sx={{
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          boxShadow: "none",
          border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                border: "2px solid #EBEBEB",
                borderRadius: "50%",
                color: "#EBEBEB",
                fontSize: "24px",
                "&:hover": { color: "#484848", background: "#BFBDBD" },
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              color: "#484848",
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 600,
            }}
          >
            Overview
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "17px" },
              fontWeight: 400,
              color: "#484848",
            }}
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
            <br />
            The second bedroom is a corner room with double windows. The kitchen
            has fabulous space, new appliances, and a laundry area. Other
            features include rich herringbone floors, crown moldings and
            coffered ceilings throughout the apartment. 1049 5th Avenue is a
            classic pre-war building located across from Central Park, the
            reservoir and The Metropolitan Museum. Elegant lobby and 24 hours
            doorman. This is a pet-friendly building.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          boxShadow: "none",
          border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                border: "2px solid #EBEBEB",
                borderRadius: "50%",
                color: "#EBEBEB",
                fontSize: "24px",
                "&:hover": { color: "#484848", background: "#BFBDBD" },
              }}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{
              color: "#484848",
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 600,
            }}
          >
            Amenities
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {Array.from({ length: 3 }).map((_, columnIndex) => (
              <Grid item xs={12} sm={4} key={columnIndex}>
                <List>
                  {amenities
                    .slice(
                      columnIndex * Math.ceil(amenities.length / 3),
                      (columnIndex + 1) * Math.ceil(amenities.length / 3)
                    )
                    .map((item, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          boxShadow: "none",
          border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                border: "2px solid #EBEBEB",
                borderRadius: "50%",
                color: "#EBEBEB",
                fontSize: "24px",
                "&:hover": { color: "#484848", background: "#BFBDBD" },
              }}
            />
          }
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography
            sx={{
              color: "#484848",
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 600,
            }}
          >
            Location
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 4 }}>
          <Box
            sx={{
              overflow: "hidden",
              borderRadius: 2,
              height: "400px",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.540418779784!2d-73.92737312411386!3d40.77213187138456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f4f50801d99%3A0xb9f17e0423aaf8ba!2s22-05%20Astoria%20Blvd%2C%20Astoria%2C%20NY%2011102%2C%20USA!5e0!3m2!1sen!2sin!4v1736835549982!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          boxShadow: "none",
          border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                border: "2px solid #EBEBEB",
                borderRadius: "50%",
                color: "#EBEBEB",
                fontSize: "24px",
                "&:hover": { color: "#484848", background: "#BFBDBD" },
              }}
            />
          }
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography
            sx={{
              color: "#484848",
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 600,
            }}
          >
            Floor Plans
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Accordion
              sx={{
                marginBottom: "16px",
                borderRadius: "8px",
                overflow: "hidden",
                width: "100%",
                boxShadow: "none",
                border: "2px solid #EBEBEB",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#484848",
                      fontSize: { xs: "18px", md: "22px" },
                      fontWeight: 600,
                    }}
                  >
                    First Floor
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography>
                      Rooms: <strong>4</strong>
                    </Typography>
                    <Typography>
                      Baths: <strong>1</strong>
                    </Typography>
                    <Typography>
                      Size: <strong>160 Sqft</strong>
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box p={2}>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      padding: "1rem",
                    }}
                  >
                    <Image
                      src="/Images/Floor1.svg"
                      alt="Floor1"
                      layout="responsive"
                      width={890}
                      height={500}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "17px" },
                      fontWeight: 400,
                      color: "#484848",
                    }}
                  >
                    Evans Tower very high demand corner junior one bedroom plus
                    a large balcony boasting full open NYC views. You need to
                    see the views to believe them. Mint condition with new
                    hardwood floors. Lots of closets plus washer and dryer.
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                marginBottom: "16px",
                borderRadius: "8px",
                overflow: "hidden",
                width: "100%",
                boxShadow: "none",
                border: "2px solid #EBEBEB",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#484848",
                      fontSize: { xs: "18px", md: "22px" },
                      fontWeight: 600,
                    }}
                  >
                    Second Floor
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography>
                      Rooms: <strong>4</strong>
                    </Typography>
                    <Typography>
                      Baths: <strong>1</strong>
                    </Typography>
                    <Typography>
                      Size: <strong>160 Sqft</strong>
                    </Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box p={2}>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      padding: "1rem",
                    }}
                  >
                    <Image
                      src="/Images/Floor1.svg"
                      alt="Floor1"
                      layout="responsive"
                      width={890}
                      height={500}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "17px" },
                      fontWeight: 400,
                      color: "#484848",
                    }}
                  >
                    Evans Tower very high demand corner junior one bedroom plus
                    a large balcony boasting full open NYC views. You need to
                    see the views to believe them. Mint condition with new
                    hardwood floors. Lots of closets plus washer and dryer.
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          boxShadow: "none",
          border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                border: "2px solid #EBEBEB",
                borderRadius: "50%",
                color: "#EBEBEB",
                fontSize: "24px",
                "&:hover": { color: "#484848", background: "#BFBDBD" },
              }}
            />
          }
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography
            sx={{
              color: "#484848",
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 600,
            }}
          >
            Property Tour
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Box
            sx={{
              width: "100%",
              borderRadius: "8px",
              // border: "2px solid #EBEBEB",
              mb: 2,
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "grey",
                },
                "& .MuiTab-root": {
                  color: "grey",
                },
                "& .MuiTab-root.Mui-selected": {
                  color: "black",
                  fontWeight: "bold",
                },
                // p: 2,
              }}
            >
              <Tab
                label="Property Video"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "18px", md: "22px" },
                }}
              />
              <Tab
                label="Virtual Tour"
                sx={{
                  textTransform: "none",
                  fontSize: { xs: "18px", md: "22px" },
                }}
              />
            </Tabs>

            <Box sx={{ p: 2 }}>
              {activeTab === 0 && (
                <Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      // padding: "1rem",
                    }}
                  >
                    {isPlaying ? (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          paddingTop: "56.25%",
                        }}
                      >
                        <iframe
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
                            borderRadius: "8px",
                          }}
                        ></iframe>
                      </div>
                    ) : (
                      <Image
                        src="/Images/youtube.svg"
                        alt="YouTube Thumbnail"
                        layout="responsive"
                        width={16}
                        height={9}
                        style={{
                          objectFit: "contain",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                        onClick={() => setIsPlaying(true)}
                      />
                    )}
                  </Box>
                </Box>
              )}
              {activeTab === 1 && (
                <Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      // padding: "1rem",
                    }}
                  >
                    {isPlaying ? (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          paddingTop: "56.25%",
                        }}
                      >
                        <iframe
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
                            borderRadius: "8px",
                          }}
                        ></iframe>
                      </div>
                    ) : (
                      <Image
                        src="/Images/youtube.svg"
                        alt="YouTube Thumbnail"
                        layout="responsive"
                        width={16}
                        height={9}
                        style={{
                          objectFit: "contain",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                        onClick={() => setIsPlaying(true)}
                      />
                    )}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          marginBottom: "16px",
          borderRadius: "8px",
          overflow: "hidden",
          width: "100%",
          boxShadow: "none",
          border: "2px solid #EBEBEB",
          p: 1,
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                border: "2px solid #EBEBEB",
                borderRadius: "50%",
                color: "#EBEBEB",
                fontSize: "24px",
                "&:hover": { color: "#484848", background: "#BFBDBD" },
              }}
            />
          }
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography
            sx={{
              color: "#484848",
              fontSize: { xs: "18px", md: "22px" },
              fontWeight: 600,
            }}
          >
            Facilities
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "60%",
                  color: "#484848",
                  fontSize: { xs: "14px", md: "17px" },
                }}
              >
                <Typography>City center</Typography>
                <Typography sx={{ fontWeight: 600 }}>4 km</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "60%",
                  color: "#484848",
                  fontSize: { xs: "14px", md: "17px" },
                }}
              >
                <Typography>Hospital</Typography>
                <Typography sx={{ fontWeight: 600 }}>2 km</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "60%",
                  color: "#484848",
                  fontSize: { xs: "14px", md: "17px" },
                }}
              >
                <Typography>Shop</Typography>
                <Typography sx={{ fontWeight: 600 }}>2.5 km</Typography>
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
