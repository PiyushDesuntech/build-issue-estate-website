"use client";
import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  Divider,
  TextField,
  FormControlLabel,
  Checkbox,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons"; // Correct import for faEllipsisH
import BlogCard from "./Blogcardsformain";
import Image from "next/image";

const Main = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        // width: "80%",
        // maxWidth: "923.08px",
        minHeight: "100vh", // Make sure it fills the screen
        margin: "0 auto",
        padding: { xs: 0, lg: 3 },
        // overflowX: "hidden",  // Prevent horizontal overflow
        display: "flex",
        flexDirection: "column", // Stack elements vertically
      }}
    >
      {/* Heading */}
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "27.08px" }, // Adjust font size for mobile
            fontWeight: 700,
            lineHeight: { xs: "30px", sm: "37.91px" }, // Adjust line height for mobile
            textAlign: { xs: "center", sm: "left" }, // Center text on mobile
            overflowWrap: "break-word", // Prevent text overflow
            color: "#484848",
          }}
        >
          Housing Markets That Changed the Most This Decade
        </Typography>
      </Box>

      {/* Horizontal Icons List */}
      <Box
        mt={2}
        mb={2}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={isMobile? "unset": "center"}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src="/Images/insightAdmin.svg" sx={{ width: {xs: 40, sm: 49.23}, height: {xs: 40, sm: 49.23} }} />
            <Typography>Admin</Typography>
          </Box>

          <Box display="flex" >
            <Image
              src="/Images/calendar.svg"
              alt="Admin Icon"
              width={isMobile? 20: 25.21}
              height={isMobile? 20: 25.21}
              style={{ marginRight: "8px" }}
            />
            <Typography>Jan 20, 2025</Typography>
          </Box>

          <Box display="flex" >
            <Image
              src="/Images/comment.svg"
              alt="Admin Icon"
              width={isMobile? 20: 25.21}
              height={isMobile? 20: 25.21}
              style={{ marginRight: "8px" }}
            />
            <Typography>Comment</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Main Image */}
      <Box sx={{ width: "100%", height: "auto", maxWidth: "923.08px" }}>
        <Image
          src="/Images/InsightInnerBlog.svg"
          alt="property image"
          layout="responsive"
          width={898.46}
          height={487.38}
          style={{ borderRadius: "7.38px" }}
        />
      </Box>

      {/* Paragraph Below Image */}
      <Box sx={{ width: "100%", height: "auto", mt: 2 }}>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "14px", sm: "17.23px" },
            fontWeight: 400,
            lineHeight: {xs: "20px", sm: "30.15px"},
            color: "#484848",
          }}
        >
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet
          nisl massa, at interdum mauris sollicitudin et.
        </Typography>
      </Box>

      {/* Another Paragraph */}
      <Box sx={{ width: "100%", height: "auto", mt: 2, marginBottom: 4 }}>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "14px", sm: "17.23px" },
            fontWeight: 400,
            lineHeight: {xs: "20px", sm: "30.15px"},
            color: "#484848",
          }}
        >
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur
          massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet
          nisl massa, at interdum mauris sollicitudin et.
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "18px", sm: "22.15px" },
            my: 2,
            color: "#484848",
          }}
        >
          Housing Markets That Changed the Most This Decade
        </Typography>
      </Box>

      {/* Quote Box */}
      <Box
        sx={{
          width: "100%",
          height: "auto",
          padding: "10px",
          borderRadius: "7.38px 0px 0px 0px",
          borderLeft: "9.85px solid #E8E1C4",
          opacity: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          marginTop: 2,
        }}
      >
        {/* Quotation Icon */}
        <Box
          sx={{
            fontSize: { xs: "36px", sm: "48px" },
            color: "#E8E1C4",
            marginRight: "10px",
            position: "absolute",
            top: "-20px",
            left: "10px",
          }}
        >
          &ldquo;
        </Box>

        {/* Quote Text */}
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px" },
            fontStyle: "italic",
            color: "#333333",
            lineHeight: {xs: "20px", sm: "30.15px"},
            maxWidth: "80%",
            textAlign: "left",
          }}
        >
          "This is a sample quote. The text should be styled appropriately and
          aligned in the box. The quote box can accommodate multiple lines of
          text, and you can adjust the styling as needed to match the design."
        </Typography>
      </Box>

      {/* Another Text Box */}
      <Box sx={{ width: "100%", height: "auto", mt: 2 }}>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "14px", sm: "17.23px" },
            fontWeight: 400,
            lineHeight: {xs: "20px", sm: "30.15px"},
          }}
        >
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dict massa, at
          interdum mauris sollicitudin et.
        </Typography>
      </Box>

      <Box sx={{ width: "100%", height: "auto", mt: 2 }}>
        <Typography
          sx={{
            font: "Nunito",
            fontSize: { xs: "14px", sm: "17.23px" },
            fontWeight: 400,
            lineHeight: {xs: "20px", sm: "30.15px"},
          }}
        >
          Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin
          sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus
          egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Integer tristique elit lobortis purus bibendum, quis dictum metus
          mattis. Phasellus posuere felis sed eros porttitor mattis.
        </Typography>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      {/* Share Section */}
      <Box
        sx={{
          marginY: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" }, // Stack elements vertically on mobile
          width: "100%",
        }}
      >
        {/* Share Link Section */}
        <Box display="flex" alignItems="center" gap={2} sx={{flexWrap: "wrap"}}>
          <Typography
            sx={{ fontWeight: "700", color: "#484848", fontSize: "17.23px" }}
          >
            Share Link
          </Typography>
          <Box display="flex" gap={3}>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faFacebookF} />
            </IconButton>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faTwitter} />
            </IconButton>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </IconButton>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faPinterestP} />
            </IconButton>
            <IconButton sx={{ borderRadius: 2 }}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </IconButton>
          </Box>
        </Box>
        {/* Tags Section */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography sx={{ fontWeight: "bold", color: "#333" }}>
            Tags:
          </Typography>
          <Typography sx={{ color: "#666" }}>Apartment, Real Estate</Typography>
        </Box>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      {/* Pagination Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "923.08px",
          // margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          // px: 2,
          // flexDirection: { xs: "column", sm: "row" }, // Stack pagination vertically on mobile
        }}
      >
        {/* Previous Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              width: {xs: "30px", sm: "50px"},
              height: {xs: "30px", sm: "50px"},
              backgroundColor: "#E0E0E0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowBack fontSize={isMobile? "small": "medium"} sx={{ color: "#333" }} />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, color: "#484848", fontSize: {xs: "14px", sm: "19px"} }}>
              Prev
            </Typography>
            <Typography
              sx={{
                color: "#484848",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: {xs: "70px", sm: "200px"},
                fontWeight: 400,
                fontSize: {xs: "12px", sm: "17px"}
              }}
            >
              Redfin Unveils the Best Canadian Cities for...
            </Typography>
          </Box>
        </Box>

        {/* Next Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <Box textAlign="right">
            <Typography sx={{ fontWeight: 700, color: "#484848", fontSize: {xs: "14px", sm: "19px"} }}>
              Next
            </Typography>
            <Typography
              sx={{
                color: "#484848",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: {xs: "70px", sm: "200px"},
                fontWeight: 400,
                fontSize: {xs: "12px", sm: "17px"}
              }}
            >
              Redfin Ranks the Most Competitive
            </Typography>
          </Box>
          <Box
            sx={{
              width: {xs: "30px", sm: "50px"},
              height: {xs: "30px", sm: "50px"},
              backgroundColor: "#E0E0E0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ArrowForward fontSize={isMobile? "small": "medium"} sx={{ color: "#333" }} />
          </Box>
        </Box>
      </Box>

      <Divider sx={{ marginY: 3 }} />

      {/* Comment Section */}
      {/* <Typography
        sx={{
          fontWeight: 500,
          fontSize: { xs: "18px", sm: "22.15px" },
          marginTop: 6,
          bottom: 5,
        }}
      >
        Leave a Comment
      </Typography>

      <Box
        sx={{
          width: '100%',
          // height: '565.54px',
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "36.92px", mt: 3 }}
        >
          <TextField
            placeholder="Name"
            fullWidth
            sx={{
              // width: '443.08px',
              height: "61.54px",
              borderRadius: "7.38px",
              "& .MuiOutlinedInput-root": { border: "1.23px solid #D8D8D8", background: "#fff" },
            }}
          />
          <TextField
          fullWidth
            placeholder="Email"
            sx={{
              // width: '443.08px',
              height: "61.54px",
              borderRadius: "7.38px",
              "& .MuiOutlinedInput-root": { border: "1.23px solid #D8D8D8", background: "#fff"},
            }}
          />
        </Box>

        <FormControlLabel
        sx={{pl: 2}}
          control={
            <Checkbox
              sx={{
                width: "16px",
                height: "16px",
                borderRadius: "3.08px",
                border: "1.23px solid #D8D8D8",
                padding: "0",
                marginRight: "8px",
              }}
            />
          }
          label={
            <Typography
              sx={{
                color: "#484848",
                font: "Nunito",
                fontWeight: "400",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                maxWidth: "calc(100% - 24px)",
                overflowWrap: "break-word",
              }}
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </Typography>
          }
        />

        <TextField
          placeholder="Write Your Comment"
          multiline
          fullWidth
          rows={10}
          sx={{
            // maxWidth: "923.08px",
            // height: "307.69px",
            borderRadius: "7.38px",
            "& .MuiOutlinedInput-root": { border: "1.23px solid #D8D8D8", background: "#fff" },
          }}
        />

        <Button
          sx={{
            width: "260.11px",
            height: "64px",
            backgroundColor: "#ECE5CE",
            color: "#E8E1C4",
            fontWeight: "bold",
            border: "1.23px",
            borderColor: "#E8E1C4",
            borderRadius: "7.38px",
            marginTop: "16px",
            textTransform: "none",
          }}
        >
          <Typography
            sx={{
              color: "#00000080",
              fontSize: "19.69px",
              fontWeight: "700px",
            }}
          >
            Submit Comment
          </Typography>
        </Button>
      </Box> */}

      <Typography
        sx={{
          fontWeight: 500,
          fontSize: { xs: "18px", sm: "22.15px" },
          marginBottom: 2,
        }}
      >
        related properties
      </Typography>
      <BlogCard />
    </Box>
  );
};

export default Main;
