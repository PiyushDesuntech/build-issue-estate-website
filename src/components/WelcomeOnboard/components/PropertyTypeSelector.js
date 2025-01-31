import { Box, Typography } from "@mui/material";
import Image from "next/image";

const propertyTypes = [
  { label: "Apartment", icon: "/Images/ApartmentIcon.svg" },
  { label: "Independent House", icon: "/Images/IndependentHouseIcon.svg" },
  { label: "Independent Floor", icon: "/Images/IndependentFloorIcon.svg" },
  { label: "Villa", icon: "/Images/VillaIcon.svg" },
];

const PropertyTypeSelector = ({ selectedType, setSelectedType }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" },
        gap: { xs: 1, md: 2 },
      }}
    >
      {propertyTypes.map((type) => (
        <Box
          key={type.label}
          onClick={() => setSelectedType(type.label)}
          sx={{
            border:
              selectedType === type.label
                ? "2px solid #E0D8C3"
                : "1px solid #D9D9D9",
            backgroundColor:
              selectedType === type.label ? "#E0D8C3" : "transparent",
            width: "100%", // Full width within grid
            borderRadius: "12px",
            height: { xs: "100px", md: "124px" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <Image src={type.icon} alt={type.label} width={36} height={36} />
          <Typography
            sx={{
              fontSize: {xs:"12px", sm: "15px"},
              fontWeight: 700,
              color: "#2B2B2B",
              textAlign: "center",
              lineHeight: "21px",
            }}
          >
            {type.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PropertyTypeSelector;
