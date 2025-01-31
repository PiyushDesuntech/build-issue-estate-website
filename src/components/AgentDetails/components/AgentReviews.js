"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Rating,
  Pagination,
  Stack,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

// Sample reviews data
const reviewsData = [
  {
    id: 1,
    recommendation: "Highly likely to recommend",
    rating: 5.0,
    date: "1/10/2024",
    reviewer: "cmarieKirk",
    details: "Helped me rent a home.",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam odio, hendrerit vitae arcu non, suscipit elementum purus.",
  },
  {
    id: 2,
    recommendation: "Highly likely to recommend",
    rating: 5.0,
    date: "6/30/2023",
    reviewer: "Pixie Medeiros",
    details: "Helped me rent a Single Family home in Back bay, Boston, MA.",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam odio, hendrerit vitae arcu non, suscipit elementum purus.",
  },
];

const AgentReviews = () => {
  const [sortBy, setSortBy] = useState("newest");
  const [page, setPage] = useState(1);
  const reviewsPerPage = 2;

  
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);
  const paginatedReviews = reviewsData.slice(
    (page - 1) * reviewsPerPage,
    page * reviewsPerPage
  );

  return (
    <Box>
      <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 1}}>
      <Typography sx={{ fontWeight: 700,
          fontSize: "22.07px",
          color: "#2A2A33",}}  gutterBottom>
        Tom Willson's reviews ({reviewsData.length})
      </Typography>
      <Button sx={{border: "1.13px solid #A7A6AB", fontSize: "15.87px", fontWeight: 700, color: "#2A2A33", textTransform:"none", width: {xs: "100%", sm: "263px"}}}>
        Write a Review
      </Button>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        mb={3}
        mt={2}
      >
        <Box sx={{width: "100%"}}>
            <Typography sx={{fontWeight: 700, fontSize: "15.18px", color: "#2A2A33"}}>Filter by</Typography>
        <FormControl size="small" fullWidth sx={{ minWidth: 150 }}>
          <Select value="all"  sx={{
            background: "#F6F6FA",
                "& fieldset": {
                  border: "1.12px solid #949494",
                },
                borderRadius: "4.54px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494",
                },
                "& .MuiInputLabel-root": {
                  color: "#222222", 
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#222222", 
                },
              }}>
            <MenuItem value="all">All reviews ({reviewsData.length})</MenuItem>
          </Select>
        </FormControl>
        </Box>

       <Box sx={{width: "100%"}}>
       <Typography sx={{fontWeight: 700, fontSize: "15.18px", color: "#2A2A33"}}>Sort by</Typography>
       <FormControl size="small" fullWidth sx={{ minWidth: 150 }}>
          <Select value={sortBy} onChange={handleSortChange} sx={{
             background: "#F6F6FA",
                "& fieldset": {
                  border: "1.12px solid #949494",
                },
                borderRadius: "4.54px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494", 
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#949494",
                },
                "& .MuiInputLabel-root": {
                  color: "#222222", 
                },
                "& .Mui-focused .MuiInputLabel-root": {
                  color: "#222222", 
                },
              }}>
            <MenuItem value="newest">Newest first</MenuItem>
            <MenuItem value="oldest">Oldest first</MenuItem>
          </Select>
        </FormControl>
       </Box>
      </Stack>

      <Box>
        {paginatedReviews.map((review) => (
          <Box
            key={review.id}
            sx={{ marginBottom: "20px", borderTop: "1.13px solid #D1D1D5" }}
          >
            <Box sx={{pt: 1}}>
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Typography
                  sx={{
                    fontSize: {xs: "16px", sm: "20px", md: "27.21px"},
                    fontWeight: 700,
                    color: "#2A2A33",
                  }}
                >
                  {review.recommendation}
                </Typography>
                <Box sx={{display: "flex", flexDirection: {xs: "column", sm: "row"}, alignItems: {xs: "flex-end", sm: "center"}, width: "50%", justifyContent: "space-between"}}>
                <Typography
                  sx={{
                    fontSize: {xs: "16px", sm: "20px", md: "27.21px"},
                    fontWeight: 700,
                    color: "#2A2A33",
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  5.0 <StarIcon sx={{ color: "#FFB903", fontSize: {xs: "16px", sm: "20px", md: "27.21px"} }} />
                </Typography>
                <Typography
                  sx={{
                    fontSize: {xs: "12px", sm: "14px", md: "15.21px"},
                    fontWeight: 400,
                    color: "#393939",
                    whiteSpace: "nowrap"
                  }}
                >
                  Report a problem
                </Typography>
                </Box>
              </Stack>

              <Typography
                sx={{ fontSize: {xs: "12px", sm: "14px", md: "15.21px"}, fontWeight: 400, color: "#596B82" }}
              >
                {review.date} - {review.reviewer}
              </Typography>
              <Typography
                sx={{ fontSize: {xs: "12px", sm: "14px", md: "15.21px"}, fontWeight: 400, color: "#596B82" }}
              >
                {review.details}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Rating value={review.rating} readOnly precision={0.5} sx={{fontSize: {xs: "16px", sm: "18px", md: "24.21px"},}} />{" "}
                  <Typography
                    sx={{
                      color: "#2A2A33",
                      fontWeight: 400,
                      fontSize: {xs: "10px", sm: "12px", md: "13.62px"},
                    }}
                  >
                    Local knowledge
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Rating value={review.rating} readOnly precision={0.5} sx={{fontSize: {xs: "16px", sm: "18px", md: "24.21px"},}}/>{" "}
                  <Typography
                    sx={{
                      color: "#2A2A33",
                      fontWeight: 400,
                      fontSize: {xs: "10px", sm: "12px", md: "13.62px"},
                    }}
                  >
                    Process expertise
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Rating value={review.rating} readOnly precision={0.5} sx={{fontSize: {xs: "16px", sm: "18px", md: "24.21px"},}}/>{" "}
                  <Typography
                    sx={{
                      color: "#2A2A33",
                      fontWeight: 400,
                      fontSize: {xs: "10px", sm: "12px", md: "13.62px"},
                    }}
                  >
                    Responsiveness
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Rating value={review.rating} readOnly precision={0.5} sx={{fontSize: {xs: "16px", sm: "18px", md: "24.21px"},}}/>{" "}
                  <Typography
                    sx={{
                      color: "#2A2A33",
                      fontWeight: 400,
                      fontSize: {xs: "10px", sm: "12px", md: "13.62px"},
                    }}
                  >
                    Negotiation skills
                  </Typography>
                </Box>
              </Box>

              <Typography
                mt={2}
                sx={{ fontSize: {xs: "14px", sm: "16px", md: "17.21px"}, fontWeight: 400, color: "#2A2A33" }}
              >
                {review.feedback}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Pagination */}
      {totalPages && (
        <Stack direction="row" justifyContent="center" mt={3}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#484848",
                border: "2px solid #E6E6E6",
                fontSize: "17.68px",
                width: "56.84px",
                height: "56.84px",
                borderRadius: "50%",
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: "#E8E1C4",
                border: "2px solid #E6E6E6",
                color: "#484848",
              },
              "& .MuiPaginationItem-previousNext": {
                color: "#484848",
                border: "2px solid #E6E6E6",
                fontSize: "17.68px",
                width: "56.84px",
                height: "56.84px",
                borderRadius: "50%",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "#E8E1C4",
                border: "2px solid #E6E6E6",
              },
            }}
          />
        </Stack>
      )}
    </Box>
  );
};

export default AgentReviews;
