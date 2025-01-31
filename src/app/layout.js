"use client";
import React from "react";
// import { Lato } from "next/font/google";
import Box from "@mui/material/Box";
import "./globals.css";
import NavbarIndex from "@/components/Navbar/NavbarIndex";
import { useEffect, useState } from "react";
import FooterIndex from "@/components/Footer/FooterIndex";
import { ThemeProvider, createTheme } from "@mui/material/styles";



// const lato = Lato({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "700", "900"], 
// });

const theme = createTheme({
  typography: {
    fontFamily: "Lato, Arial, sans-serif",
  },
});


export default function RootLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  React.useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  
    return () => {
      document.head.removeChild(link); 
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body
      //  className={lato.className}
       >
        <ThemeProvider theme={theme}>
        <NavbarIndex />
        <Box suppressHydrationWarning>{children}</Box>
        {isMounted && <FooterIndex />}
        </ThemeProvider>
      </body>
    </html>
  );
}
