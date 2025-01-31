import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const MoreWays = () => {
  const rows = [
    {
      text: "Curabitur vestibulum id dui id lobortis. Nulla malesuada velit ac commodo porta.",
      columns: [true, true],
    },
    {
      text: "Mauris eget ante sed nunc maximus pellentesque.",
      columns: [true, true],
    },
    {
      text: "Aliquam euismod nibh eu nisl cursus, sit amet laoreet sem congue.",
      columns: [false, true],
    },
    {
      text: "Suspendisse potenti. Sed ut pretium metus.",
      columns: [false, true],
    },
    {
      text: "Sed a magna ac nunc rhoncus tincidunt. Integer consectetur mollis enim vel aliquam.",
      columns: [true, true],
    },
    {
      text: "Aenean bibendum massa dui, eget vestibulum.",
      columns: [true, true],
    },
  ];

  return (
    <Box p={1}>
      <Box sx={{ border: "1px solid #b1b1b1", borderRadius: "10px", mt: 10 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ maxWidth: 840, mt: "69px", px: 2 }}>
            <Typography
              align="center"
              sx={{ fontSize:{xs: "26px", sm: "34px", md: "38px", lg: "40px"}, fontWeight: 500 }}
              gutterBottom
            >
              More Ways to Sell. More ways to save.
            </Typography>
            <Typography
              sx={{ fontSize: {xs: "14px", sm: "15px", md: "16px", lg: "17.23px"}, fontWeight: 400, color: "#484848" }}
              align="center"
              gutterBottom
            >
              Pellentesque odio ante, fermentum vel pharetra sed, fringilla vel
              ligula. Donec sit amet ullamcorper tortor, vitae dictum magna.
              Etiam sit amet magna maximus, feugiat diam viverra, ullamcorper
              ex.
            </Typography>
          </Box>
        </Box>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            mt: 3,
            borderRadius: "10px",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      maxWidth: 137,
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "68px",
                      }}
                    >
                      <Image
                        src="/Images/housekey.png"
                        alt="House key"
                        layout="responsive"
                        width={150}
                        height={100}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Typography sx={{fontSize: {xs: "12px", sm: "15px", md: "16px", lg: "17.23px"}, fontWeight: 700, color: "#484848"}}>Colonial Reality Listing</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      maxWidth: 147,
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "68px",
                      }}
                    >
                      <Image
                        src="/Images/househand.png"
                        alt="House Hand"
                        layout="responsive"
                        width={150}
                        height={100}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    <Typography sx={{fontSize: {xs: "12px", sm: "15px", md: "16px", lg: "17.23px"}, fontWeight: 700, color: "#484848"}}>Colonial Reality Concierge Listing</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ background: "#D9D9D933" }}>
                  <TableCell
                    sx={{
                      fontSize: {xs: "12px", sm: "15px", md: "16px", lg: "17.23px"},
                      fontWeight: 400,
                      color: "#484848",
                    }}
                  >
                    {row.text}
                  </TableCell>
                  <TableCell align="center">
                    {row.columns[0] && <CheckCircleIcon color="grey" />}
                  </TableCell>
                  <TableCell align="center">
                    {row.columns[1] && <CheckCircleIcon color="grey" />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{px: {xs: 1, md: 6}, py: 2}}>
      <Typography
        sx={{ fontSize: {xs: "12px", sm: "15px", md: "16px", lg: "17.23px"}, fontWeight: 400, color: "#484848" }}
        align="center"
        gutterBottom
      >
        Vivamus consequat lorem lacus, in mattis dui ornare ut. Sed et mollis
        leo, in malesuada erat. Maecenas id felis hendrerit, lacinia mauris
        quis, pulvinar leo. Curabitur lacinia nisi et metus mollis imperdiet.
        Vivamus a arcu a lectus vulputate semper sed et elit. Ut lorem risus,
        aliquet eget vehicula non, porta non massa.
      </Typography>
      </Box>
    </Box>
  );
};

export default MoreWays;
