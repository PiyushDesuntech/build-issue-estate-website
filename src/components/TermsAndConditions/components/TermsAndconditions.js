import React from "react";
import { Box, Typography } from "@mui/material";

export default function TermsAndconditions() {
  return (
    <Box sx={{ px: { xs: 2, md: 3 }, pb: 5 }}>
      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "2px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "36px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Terms & Conditions
        </Typography>
      </Box>

      <Box>
        {/* First Paragraph */}
        <Box
          sx={{
            width: { xs: "100%", sm: "100%" }, // Responsive width
            margin: "40px auto 10px auto", // Center horizontally with specific margins
            textAlign: "center", // Center the text inside the box
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato, Montserrat",
              fontSize: "15.7px",
              fontWeight: "400",
              lineHeight: "36.22px",
              textAlign: "justify !important",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Curabitur et erat{" "}
            <span style={{ color: "#0D6192", fontWeight: "bold" }}>
              venenatis, bibendum lectus vel,
            </span>{" "}
            iaculis tortor.{" "}
            <span style={{ color: "#0D6192", fontWeight: "bold" }}>
              Nulla tempus diam sed,
            </span>{" "}
            convallis elementum. Nunc faciis ac lorem ut rutrum. Quisque luctus
            turpis id ullamcorper venenatis.
            <span style={{ color: "#0D6192", fontWeight: "bold" }}>
              Aenean dolor nisi,
            </span>
            tincidunt at quam scelerisque,ibs hendrerit ante. Phasellus eget
            tempus ligula, ut viverra felis. In ornare ante{" "}
            <span style={{ color: "#0D6192", fontWeight: "bold" }}>
              nibh conalvis conswquat,
            </span>
            leo condimentsuDonec commodo odio id dui suscipit, etsque orci
            fermentum. Fusce pellentesque pretium nisi at interdum. Proin fal
            tempor ex quis felis iaculis pulvinar. Maecenas metus magndhicula ut
            ex eget, blandit mollis libero. Ut eget mi mauris. Praesent sed
            tincidunt elit.
          </Typography>
        </Box>

        {/* Second Paragraph */}
        <Box
          sx={{
            width: { xs: "100%", sm: "100%" }, // Responsive width
            margin: "40px auto 10px auto", // Center horizontally with specific margins
            textAlign: "center", // Center the text inside the box
          }}
        >
          <Typography
            sx={{
              fontFamily: "Lato, Montserrat",
              fontSize: "15.7px",
              fontWeight: "400",
              lineHeight: "36.22px",

              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            <span style={{ color: "#0D6192", fontWeight: "bold" }}>
              Ut nunc erat, mollis ut vehicula varius,
            </span>
            aliquam a lectus ed dapibus.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        ></Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Nam non luctus turpis. Praesent tempor massa rhoncus, bibendum arcu
          sed, semper libero. Suspendisse eu lectus sed urna maximus sagittis
          rhoncus vel quam. Vivamus et tristique magna. Praesent scelerisque
          orci a turpis consequat, ut sfeer lorem dignissimliquam stique lacinia
          turpis.Sed non condimentum sapien.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          // top: "120.6px",
          // left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "36px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          General
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Mauris auctor tristique fermentum. Donec et diam quam. Proin suscipit
          efficitur eros sit amet convallis. Nunc sit amet elitf diam. Aliquam
          nisi purus, pellentesque sit amet magna u.{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "36px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Our Corporate Privacy
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Suspendisse ut{" "}
          <span style={{ color: "#0D6192", fontWeight: "bold" }}>
            dictum erat, non vehicula neque.
          </span>{" "}
          Nullam non purus vestibulum, aliquet ante eget, pulvinar tortor. Cras
          fgrty varius ut odio eget imperdiet. Phasellus luctus maximus
          accumsan. Mauris ante eros, efficitur nec ligula in, maximus
          ullamcodimentum arcu . Aenean urna dui, dapibus ornare magna vel,
          accumsan vehicula erat.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "36px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Statement of Practices{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Phasellus dapibus tristique sem, nec ultrices risus viverra a. Ut
          venenatis, dui quis congue facilisis, ligula lacus tempors imperdiet
          massa purus in tortor. Pellentesque hendrerit iaculis suscipit. Duis
          velit risus, faucibus quis nisl ac, porttitorum tortor. Aliquam cursus
          non lacus et consequat. Quisque enim urna, iaculis in viverra ornare,
          dictum a diam. Vestibulumddor purus urna. Donec egestas
          luctusgenatis.Vivamus posuere quam tristique, sodales sapien vitae,
          ullamcorper risus. Fusce sem nulla, tincidunt a nisl vitae, hendrerit
          semper diam. Nullam eleifend egestas hendrerit. Aenean urna dui,
          dapibus ornare magna vel, accumsan vehicula erat.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Donec egestas luctusgenatis.Vivamus posuere quam tristique, sodales
          sapien vitae, ullamcorper risus. Fusce sem nulla, tincidunt a nisl
          vitae, hendrerit semper diam. Nullam eleifend egestas hendrerit.
          Aenean urna dui, dapibus ornare magna vel, accumsan vehicula erat.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "32px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Accuracy of Personal Data
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Quisque auctor dignissim eros, vel dignissim nunc tempor vitae.
          Aliquam placerat ornare lectus sed sollicitudin. Morbidbus augue eget
          fus placerat faucibus. Cras pulvinar eros vitae nibh cursus vehicula.
          Suspendisse ultrices feugiat tortor a drices. Aenean nec orci justo.
          Fuscesrit diam eget ex posuere porttitor. In sodales purus quis mi
          egestas venenatis.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "32px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Interpretation
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          In at neque risus. Maecenas eros dolor, tempor nec bibendum sed,
          fermentum at ex. Suspendisse euismod, arcu rutrumfm hendrerit, elitfg
          ex posuere nisi, vel commodo libero diam in tellus. Sed vitae
          vulputate purus, vitae tincidunt eros.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "32px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Law enforcement
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Donec consequat, Donec pharetra id mi vitae tristique.{" "}
          <span style={{ color: "#0D6192", fontWeight: "bold" }}>
            Donec consequat,
          </span>{" "}
          magna ut dictum feugiat, tellus sem ultrices quam, varius henit fvelit
          enim eget enim. Ut scelerisque tortor metus, tempor congue felis
          accumsan sed. Curabitur et facilisis dui, semperdum eros. Integer
          nulla elit,humsan ultrices nunc id, ultricies dignissim lectus. In
          convallis, metus eu suscipit mollis, dui nisi interdum mauris, et
          dapibus diam ante vitaarcu. Sed at magna in tellus tempor varius.
          Morbi suscipit maximus libero non blandit.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Sed non condimentum sapien. Aenean urna dui, dapibus ornare magna vel,
          accumsan vehicula erat. Proin et miconsequat, convallis leodt bibendum
          nisi. In sodales purus quis mi egestas venenatis. Sed vitae vulputate
          purus, vitate tincidunt eros. Curabitur ac dolor nec sapien tempus
          consequat quis sed ipsum. Morbi suscipit maximus libero non blandit.
          Maurisus libero ut tempor fringilla. Aliquam ornare umNam vestibulum
          urna quis elit coo libero.Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "32px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Payments
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          <span style={{ color: "#0D6192", fontWeight: "bold" }}>
            Phasellus luctus maximus accumsan.
          </span>{" "}
          Mauris ante eros, efficitur nec ligula in, maximus ullamcorper diam.
          Aliquamdentum arcu eget exue sit amet ultricies risus fringilla.
          Praesent odio erat, consectetur a magna non, mollis ds nisi. Nullam
          pretium ex sit amet velit dictumeud. Phasellus dapibus tristique sem,
          nec ultrices risus viverra a. Ut venenatisrf, dui quis congue
          facilisis, ligula lacus tempor sem, at imperdijjet massa purus in
          tortor. Pellentesque hendrerit iagculis suscipit. Duis velit risus,
          faucibus quis nisl ac, porttitor interdum tortor. Nunc in lectus ut
          massa posuere ultrices quis vel ligula. Suspendisse laciniadgt lacinia
          bibendum, lacus tellus.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Vivamus posuere quam tristique, sodales{" "}
          <span style={{ color: "#0D6192", fontWeight: "bold" }}>
            sapien vitae, ullamcorper risus.
          </span>{" "}
          Fusce sem nulla, tincidunt a nisl vitae, hendreriter diam. Nullam
          eleifend egestas hendrerit. Nunc in lectus ut{" "}
          <span style={{ color: "#0D6192", fontWeight: "bold" }}>
            massa posuere ultrices quis
          </span>{" "}
          vel ligula. Suspendisse laciniadgt lacinia bibendum, lacus tell us
          lobortis nulla, eget congue lectus lectus ac nisl. Duis eros dolor,
          finibus eget vulputate euicies eget lectus. In hac habitasse
          plateafumstg Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          In at neque risus. Maecenas eros dolor, tempor nec bibendum sed,
          fermentum at ex. Suspendisse euismod, arcu rutrujkjm dictum ddreriti
          elit ex posuere nisi, vel commodo libero diam in tellus. Pellentesque
          dignissim gravida odio kvulputate. Pellentesque nunc mi, tincidunit
          amet imperdiet maximus, vestibulum at urna. Etiam auctor neque ut
          magnajlamcorper dapibus. Suspendisse aliquam quis massa eudan. Sed
          euismod, neque at varius fringilla, metus arcu ultricies ngisl, a
          luctus neque velit ac mi. Nunc blandit, mi quis congue fringilla,
          dolorfna laoreet tellus, sed posuere lacus justo nec dauris.Etiam ut
          magna vestibulum, feugiat enim eget, rhoncus turpis. Aenean id est
          enimnteger egestas tortor quis ex pharetra suscipit. In justo sapien,
          pretium a metus vel.Phasellus dapibus tristique sem, nec ultrices
          risus viverra a. Ut venenatisrf, dui quis congue facilisis.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "32px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Security of Personal Data
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Phasellus luctus maximus accumsan. Mauris ante eros, efficitur nec
          ligula in,
          <span style={{ color: "#0D6192", fontWeight: "bold" }}>
            maximus ullamcorper diam.
          </span>{" "}
          Aliquamdentum arcu egetjexsed sit amet ultricies risus fringilla.
          Praesent odio erat, consectetur a magna non, mollis ds nisi. Nullam
          pretium ex sit amet velit dictum feu giat. Phasellus dapibus tristique
          sem, nec ultrices risus viverra a. Ut venenatisrf, dui quis congue
          facilisis, ligula lacus tempor sem, atderdiet massa purus in tortor.
          Pellentesque hendrerit iagculis suscipit. Duis velit risus, faucibus
          quis nisl ac, porttitor interdum tortor.
        </Typography>
      </Box>

      <Box
        sx={{
          // width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "32px" }, // Smaller font size on small screens
            fontWeight: 700,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Access and Correction of Personal Data
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "40px auto 10px auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Phasellus luctus maximus accumsan. Mauris ante eros, efficitur nec
          ligula in, maximus ullamcorper diam. Aliquamdentum arcueget amet
          ultricies risus fringilla. Praesent odio erat, consectetur a magna
          non, mollis ds nisi. Nullam pretium ex sit amet velit dictum feus
          giat. Phasellus dapibus tristique sem, nec ultrices risus viverra a.
          Ut venenatisrf, dui quis congue facilisis, ligula lacus tempor sem,
          atderdiet massa purus in tortor. Pellentesque hendrerit iagculis
          suscipit:
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "20px auto 10px auto", // Center horizontally with specific margins
          textAlign: "left", // Align the text to the left (use justify for full width)
        }}
      >
        <Typography
          component="div" // Change the wrapper element to a <div> instead of <p>
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "left", // Align text to the left to keep numbering neat
            p: 2
          }}
        >
          <ol>
            <li>Phasellus luctus maximus accumsan.</li>
            <li>
              Mauris ante eros, efficitur nec ligula in, maximus ullamcorper
              diam.
            </li>
            <li>Aliquamdentum arcueget amet ultricies risus fringilla.</li>
            <li>
              Praesent odio erat, consectetur a magna non, mollis ds nisi.
            </li>
            <li>Nullam pretium ex sit amet velit dictum feus giat.</li>
            <li>
              Phasellus dapibus tristique sem, nec ultrices risus viverra a.
            </li>
            <li>
              Ut venenatisrf, dui quis congue facilisis, ligula lacus tempor
              sem, atderdiet massa purus in tortor.
            </li>
            <li>Pellentesque hendrerit iagculis suscipit.</li>
          </ol>
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Morbi vehicula porta risus, vel feugiat dolor accumsan in. Mauris
          vitae nunc sit amet turpis pulvinar laoreet. Proin nec dui quis
          lacusfntum sollicitudin at ut nibh. Nam vestibulum urna quis elit
          commodo porttitor. Orci varius natoque penatibus et magnis dis
          parturient montes nascetur ridiculus mus. 
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "36px" }, // Smaller font size on small screens
            fontWeight: 600,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Direct Marketings
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Donec mattis urna bibendum molestie auctor. Maecenas pulvinar turpis
          sapien, at maximus nulla varius a. Maecenas blandit at sapien
          convallis ultricies. Vivamus scelerisque velit lorem, id dictum dolor
          vulputate vitae. Nulla viverra nibh eu imperdiet ultricies. Nullam
          cursus elit eget elit sagittis, et placerat massa gravida. Sed vitae
          ante quis nibh facilisis tristique. Ut magna nulla, auctor sit amet
          arcu ac, vehicula rhoncus erat. Fusce erat diam, egestas sed nisl at,
          <span style={{ color: "#0D6192", fontWeight: "400" }}>
            {" "}
            rhoncus viverra odio.{" "}
          </span>
          In interdum orci velit, id vulputate tellus blandit eu. Aenean
          tristique tortor velit, tempor aliquam massa blandit sit amet.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "36px" }, // Smaller font size on small screens
            fontWeight: 600,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Change Policy
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Nunc ac congue nisi. Donec at ex interdum, laoreet ligula et, interdum
          lacus. Praesent ac dui ullamcorper, auctor sem id, porta orci. In hac
          habitasse platea dictumst. Morbi nec diam vitae est sagittis faucibus.
          Nulla aliquet aliquam sem at faucibus. Maecenas laoreet lectus elit,
          tincidunt consequat ex pellentesque id. Nam feugiat commodo justo eu
          volutpat. Cras vulputate aliquam nunc sit amet viverra. Curabitur a
          ligula hendrerit, vehicula libero vel, tempus nisl.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Maecenas consectetur tellus a dolor iaculis pellentesque. Curabitur a
          ex arcu. Nunc aliquet viverra eros, commodo ultricies ante egestas
          vel. Proin tincidunt purus libero, sit amet dignissim est aliquet
          hendrerit. Donec commodo odio id dui suscipit, et scelerisque
          orcientumxd. Fusce pellentesque pretium nisi at interdum. Proin tempor
          ex quis felis iaculis pulvinar. Maecenas metus magna, vehicula ut ex
          egetandit mollis libero. Nam purus ligula, ultricies vel sapien
          maximus, vehicula hendrerit arcu. Nam et mi nisi. Quisque imperdiet
          lorem at diam vulputate, at gravida velit vehicula. Nulla tempus diam
          sed convallis elementum. Nunc facilisis ac lorem ut rutrum. Quisque
          luctuspis idper venenatis. Aenean dolor nisi, tincidunt at quam
          scelerisque, finibus hendrerit ante. Phasellus eget tempus ligula, ut
          viverra felis. In ornare ante ac nibh convallis, a consequat leo
          condimentum.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "20px auto 10px auto", // Center horizontally with specific margins
          textAlign: "left", // Align the text to the left (use justify for full width)
        }}
      >
        <Typography
          component="div" // Change the wrapper element to a <div> instead of <p>
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "left", // Align text to the left to keep numbering neat
          }}
        >
          <ol
            style={{
              listStyle: "none", // Remove default list styling (numbers)
              padding: 0, // Remove default padding
              margin: 0, // Remove default margin
            }}
          >
            <li>
              Phasellus luctus maximus accumsan Mauris ante eros, efficitur nec
            </li>

            <li>Aliquamdentum arcueget amet ultricies risus fringilla.</li>
            <li
              style={{
                textTransform: "uppercase", // Makes the text uppercase
              }}
            >
              Praesent odio erat, consectetur a magna non, mollis ds nisi.
            </li>
            <li>Nullam pretium ex sit amet velit dictum feus giat.</li>

            <li>Pellentesque hendrerit iagculis suscipit.</li>
          </ol>
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",

            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          <span style={{ color: "#0D6192", fontWeight: "400" }}>
            Proin tempor ex quis felis iaculis pulvinar.
          </span>
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "32px" }, // Smaller font size on small screens
            fontWeight: 600,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Behavioral Remarketing
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          In at neque risus. Maecenas eros dolor, tempor nec bibendum sed,
          fermentum at ex. Suspendisse euismod, arcu rutrujkjm dictum ddreriti
          elit ex posuere nisi, vel commodo libero diam in tellus. Pellentesque
          dignissim gravida odio kvulputate. Pellentesque nunc mi, tincidunit
          amet imperdiet maximus, vestibulum at urna. Etiam auctor neque ut
          magnajlamcorper dapibus. Suspendisse aliquam quis massa eudan. Sed
          euismod, neque at varius fringilla, metus arcu ultricies ngisl, a
          luctus neque velit ac mi. Nunc blandit, mi quis congue fringilla,
          dolorfna laoreet tellus, sed posuere lacus justo nec dauris.Etiam ut
          magna vestibulum, feugiat enim eget, rhoncus turpis. Aenean id est
          enimnteger egestas tortor quis ex pharetra suscipit. In justo sapien,
          pretium a metus vel.Phasellus dapibus tristique sem, nec ultrices
          risus viverra a. Ut venenatisrf, dui quis congue facilisis.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "32px", sm: "32px" }, // Smaller font size on small screens
            fontWeight: 600,
            lineHeight: "64.2px",
            textAlign: "center", // Align text center
          }}
        >
          Liability Disclamer
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Cras vitae diam mattis, porttitor justo ac, scelerisque orci. Aliquam
          ut nunc tortor. Suspendisse scelerisque nisl aliquam risus dapibus
          ftate. Praesent auctor tincidunt nulla nec blandit. Fusce volutpat est
          sit amet lorem mollis, id tempor velit fringilla. Integer in viverra
          nunc, vel porta libero. Vivamus ac augue magna. Etiam viverra faucibus
          orci sit amet sodales. Fusce pharetra nibh ac mauris volutpat, eu
          mattis sapien volutpat. Donec venenatis sed mi on faucibus.
          Pellentesque pellentesque quam ut urna vehicula consectetur.
          Vestibulum tellus mi, facilisis ut fermentum a, pulvinar ut diam.
          Quisque enim lectus, rhoncus quis aliquet sed, aliquam et turpis.
          Maecenas sagittis tristique nunc id congue. Maecenas luctus bibendum
          erat ac rutrum. Nunc massa velit, euismod et ante eget, bibendum
          porttitor ligula.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Nullam ultricies, ante vitae rhoncus congue, leo nibh eleifend quam,
          ut luctus turpis elit commodo nunc. Ut varius ante a neque
          consectetur, non ullamcorper leo vestibulum. Sed dapibus, ex a
          tincidunt varius, metus purus oncus tellus, sit amet egestas felis
          magna eu erat. Sed velit diam, placerat ut nunc vitae, hendrerit
          egestas augue. Nulla elementum turpis non turpis consequat, in
          sagittis lectus vestibulum. Ut vehicula urna nec ipsum pellentesqued
          Praesent in interdum neque. Mauris egestas pharetra facilisis. Nam
          commodo tempor sodales. Vestibuslum putatep pulvinar tortor, id
          efficitur erat tempus ut. Mauris eget commodo sapien. Donec ac felis
          id ligula molestie retra. Nunc vel lorem turpis. Donec urna odio,
          fringilla et viverra eget, suscipit vel leo. Praesent mollis ac mi eu
          lacerat. Suspendisse potenti. In hac habitasse platea dictumst. Proin
          porttitor ligula eu erat fermentum tincidunt. Quisq vel ex consequat
          nisi pharetra mollis non sit amet ante. In erat lectus, lobortis quis
          commodo in, dictum quis ante.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: { xs: "24px", sm: "32px" }, // Adjust font size for smaller screens
            fontWeight: 600,
            lineHeight: { xs: "40px", sm: "64.2px" }, // Adjust line height for smaller screens
            textAlign: "center",
            whiteSpace: { xs: "normal", sm: "nowrap" }, // Allow wrapping on smaller screens
            paddingX: { xs: 2, sm: 0 }, // Add horizontal padding for smaller screens
          }}
        >
        Termination/Access Restriction
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Pellentesque metus dolor, placerat id sollicitudin pellentesque,
          tempor et magna. Nunc sed dui ut dui volutpat vulputate vitae commodo
          orci. Fusce dapibus nulla ut risus vulputate, vel maximus lacus
          vehicula. Sed rhoncus, ligula vel dignissim pretium, mi erat aliquam
          nisl, eget egestas enim purus sed nisl. Morbi faucibus erat enim, quis
          dignissim enim eleifend non. Ut a malesuada nisl, at tristique mi.
          Aenean eu sollicitudin urna. Nulla sit amet gravida enim, at fringilla
          dolor. Vivamus eget consectetur nunc, non bibendum nibh. Aliquam quis
          diam massa. Sed rhoncus risus eu elit porttitor, id tristique eros
          pharetra. Nulla sit amet sagittis leo. Nunc lectus arcu, consectetur
          sit amet elit eu, fermentum sollicitudin risus. Suspendisse ultricies
          nunc ac nibh egestas sagittis. Praesent id turpis finibus,
          sollicitudin nibh non, hendrerit ante. Nunc ullamcorper nisl non
          lectus volutpat facilisis.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Vestibulum suscipit arcu nec felis mattis sollicitudin. Ut at justo in
          erat malesuada hendrerit. Pellentesque id mauris ornare, consequatdio
          non, dictum velit. In in ante mauris. Nam vel est lorem. Duis bibendum
          nulla sed lectus viverra, porttitor sodales metus vetis. Integer
          volutpat, arcu eu condimentum dictum, augue ipsum finibus quam, nec
          congue purus justo at sapien. Curabitur ut consectetur felis, nec
          volutpat turpis. Donec blandit leo sed arcu placerat, malesuada mattis
          velit pulvinar. Pellentesque facilisis vehicula ligula, ut malesuada
          ipsum convallis pharetra. Maecenas eget lacus in magna hendrerit
          viverra. Praesent ultrices dapibus est nec mollis. Etiam placerat
          intum sapien, sed facilisis sem porttitor eu. Etiam turpis quam,
          ornare id commodo at, vehicula non dolor. In in arcu tortor. Sed
          commodo dmsan varius. Curabitur semper, justo ut porta auctor, enim
          quam venenatis justo, eu auctor ligula nisi at quam. Morbi sagittis
          congue faucibus. Etiam posuere a quam sit amet tempus. Nullam iaculis
          rhoncus tellus, et sodales arcu facilisis quis. Ut pretium suscierat
          id sagittis. Donec vestibulum mi non tempus imperdiet. Donec vitae
          faucibus leo, in finibus est. Cras pharetra lobortis tellus nec
          elementum.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "401.53px" }, // 100% width on small screens, fixed width on larger screens
          // height: "61.2px",
          top: "120.6px",
          left: { xs: "0", sm: "570.05px" }, // Full width on small screens, specific left value on larger screens

          margin: "3px auto",
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
       <Typography
  sx={{
    fontFamily: "Lato",
    fontSize: { xs: "24px", sm: "32px" }, // Adjust font size for smaller screens
    fontWeight: 600,
    lineHeight: { xs: "40px", sm: "64.2px" }, // Adjust line height for smaller screens
    textAlign: "center",
    whiteSpace: { xs: "normal", sm: "nowrap" }, // Allow wrapping on smaller screens
    paddingX: { xs: 2, sm: 0 }, // Add horizontal padding for smaller screens
  }}
>
  Termination/Access Restriction
</Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", sm: "100%" }, // Responsive width
          margin: "auto", // Center horizontally with specific margins
          textAlign: "center", // Center the text inside the box
        }}
      >
        <Typography
          sx={{
            fontFamily: "Lato, Montserrat",
            fontSize: "15.7px",
            fontWeight: "400",
            lineHeight: "36.22px",
            textAlign: "justify !important",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Fusce ut molestie tellus, eu lacinia est. Praesent ut blandit arcu.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          perptos himenaeos. Morbi id erat vel nibh feugiat vehicula eget ut
          risus. Morbi at nisl magna. Proin vel ante in ipsum faucibus ultricies
          a sed dui. Cras tempor gravida posuere. Cras commodo risus turpis, id
          cursus urna pellentesque a. Cras aliquam urna et turpis hendrerit, eu
          placerat elit viverra. In vulputate commodo massa eu fermentum.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Duis eleifend, ligula id consequat dignissim, turpis
          sapien aliquam enim, vitae hendrerit purus libero sed erat
        </Typography>
      </Box>
    </Box>
  );
}
