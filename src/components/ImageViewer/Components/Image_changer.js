import Image from "next/image";
import { Box, Typography, Divider, Modal, Button } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Image_changer() {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "auto",
        // border: "1px solid black ",
        display: "flex",
        // justifyContent: "space-between",
        mt: "30px",
        alignItems: "center",
        gap: "20px",
        px: "20px",
      }}
    >
      {/*left side */}
      <Box
        sx={{
          // border: "1px  solid black",
          width: "30%",
          // height: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: { sm: "30px", sx: "30px", md: "40px" },
            fontWeight: "500",
          }}
        >
          $5500
        </Typography>

        <Box
          sx={{
            width: "100%",
            border: "1px  ",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              width: { xs: "20px", sm: "20px", md: "40px" }, // Adjust size for mobile, tablet, and desktop
              height: { xs: "20px", sm: "20px", md: "40px" },

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocationOnOutlinedIcon />
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "10px", md: "22px" },
              fontFamily: "Lato",
              fontWeight: "400",
              color: "#484848",
            }}
          >
            22-05 Astoria Blvd, Astoria
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            border: "1px  ",
            display: "flex",
            alignItems: "center",
            //    justifyContent:"space-between"
            gap: { xs: "20px", sm: "20px", md: "35px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "15px", md: "22px" },
              fontFamily: "Lato",
              fontWeight: "400",
              color: "#484848",
            }}
          >
            Beds: 4
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "15px", md: "22px" },
              fontFamily: "Lato",
              fontWeight: "400",
              color: "#484848",
            }}
          >
            Baths: 2
          </Typography>
        </Box>
      </Box>

      {/* right side */}
      <Box
        sx={{
          // border: "1px  solid red",
          // width: "70%",
          // height: "200px",
          display: "flex",
          alignItems: "center",
          flex: "wrap",
          gap: "15px",
        }}
      >
        {/* Previous Button */}
        <Box
          sx={{
            width: { xs: "15px", sm: "15px", md: "33px" }, // Adjust size for mobile, tablet, and desktop
            height: { xs: "15px", sm: "15px", md: "33px" },
            border: "1px solid #ADADAD",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src="/Images/preview_prev.png"
            alt="Previous"
            width={10} // Smaller icon for mobile
            height={14}
          />
        </Box>

        <Box
          sx={{
            height: "127px",
            width: "167px",
            border: "1px solid ",
            position: "relative", // This helps for positioning the image inside the box
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/Images/imageviewmain.png"
            alt="Previous"
            layout="fill" // This makes the image fill the parent container
            objectFit="cover" // Ensures the image covers the container without distorting
          />
        </Box>
        <Box
          sx={{
            height: "127px",
            width: "167px",
            border: "1px solid ",
            position: "relative", // This helps for positioning the image inside the box
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/Images/view_imagechanger2.png"
            alt="Previous"
            layout="fill" // This makes the image fill the parent container
            objectFit="cover" // Ensures the image covers the container without distorting
          />
        </Box>
        <Box
          sx={{
            height: "127px",
            width: "167px",
            border: "1px solid",
            position: "relative", // This helps for positioning the image inside the box
            borderRadius: "4px", // Box has rounded corners
            overflow: "hidden", // Ensures the image corners are also rounded
          }}
        >
          <Image
            src="/Images/Popular3.svg"
            alt="Previous"
            layout="fill" // This makes the image fill the parent container
            objectFit="cover" // Ensures the image covers the container without distorting
          />
        </Box>

        {/* Previous Button */}
        <Box
          sx={{
            width: { xs: "15px", sm: "15px", md: "33px" }, // Adjust size for mobile, tablet, and desktop
            height: { xs: "15px", sm: "15px", md: "33px" },
            border: "1px solid  #ADADAD",
            background: "#E8E1C4",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <Image
            src="/Images/preview_next.png"
            alt="Previous"
            width={10} // Smaller icon for mobile
            height={14}
          />
        </Box>

        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          1/30
        </Typography>
      </Box>
    </Box>
  );
}
