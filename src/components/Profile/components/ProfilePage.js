"use client";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Box, Paper, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useRef } from 'react';

const StyledButton = styled(Button)({
  backgroundColor: '#E8E1C4',
  color: '#777777',
  '&:hover': {
    backgroundColor: '#d8d0c0',
  },
  textTransform: 'none',

  padding: '8px 16px',
  borderRadius: '6px',
  fontWeight: 500,
  fontSize: '14px',
  minWidth: 'auto'
});

const ImageContainer = styled(Box)(({ theme }) => ({
  width: 220,
  height: 220,
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#F3F4F6',
  border: '4px solid #fff',
  [theme.breakpoints.down('md')]: {
    width: 180,
    height: 180,
  },
  [theme.breakpoints.down('sm')]: {
    width: 140,
    height: 140,
  },
}));

const CameraButton = styled(IconButton)({
  position: 'absolute',
  bottom: 10,
  right: 10,
  backgroundColor: '#E8E1C4',
  padding: '12px',
  width: 50,
  height: 50,
  zIndex: 2,
  '&:hover': {
    backgroundColor: '#d8d0c0',
  },
});

const EditProfileButton = styled(IconButton)({
  padding: 0,
  '&:hover': {
    backgroundColor: 'transparent',
  },
  width: '55px',
  height: '55px',
});

// Desktop order
const desktopDetails = [
  { label: "Email Address:", value: "infomail@exaple.com" },
  { label: "Communication preference", value: "Call, Email" },
  { label: "Phone no.:", value: "123 456 7890" },
  { label: "New Listing Frequency", value: "Daily" },
  { label: "Default Search City:", value: "Pleasant Hill" },
];

// Mobile order
const mobileDetails = [
  { label: "Email Address:", value: "infomail@exaple.com" },
  { label: "Phone no.:", value: "123 456 7890" },
  { label: "Default Search City:", value: "Pleasant Hill" },
  { label: "Communication preference", value: "Call, Email" },
  { label: "New Listing Frequency", value: "Daily" },
];

export default function ProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState("/api/placeholder/220/220");
  const isClient = typeof window !== "undefined";
const detailsToShow = isClient && window.innerWidth < 900 ? mobileDetails : desktopDetails;


  const handleEditProfile = () => {
    router.push('/edit-profile');
  };

  const handleChangePassword = () => {
    router.push('/change-password');
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <Box sx={{ 
      // minHeight: { xs: 'auto', md: '100vh' }, 
      // bgcolor: '#F7F7F7', 
      // py: { xs: 2, sm: 3, md: 4 },
      px: { xs: 1, sm: 1, md: 1 },
      pb: 8
    }}>
      <Box sx={{ maxWidth: '100%', margin: '0' }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: '12px',
            height: { xs: 'auto', md: '380px' },
            minHeight: { xs: '500px', sm: '450px', md: '380px' },
            width: '100%',
            // maxWidth: { xs: '100%', md: '1250px' },
            overflow: 'hidden'
          }}
        >
          <Box sx={{ p: { xs: 3, sm: 4, md: 6 } }}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              mb: { xs: 4, md: -5 },
              gap: { xs: 3, md: 0 }
            }}>
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: { xs: 3, md: 4 }
              }}>
                <Box
                  position="relative"
                  sx={{
                    mt: { xs: 0, md: -3 },
                    position: 'relative',
                    top: { xs: 0, md: '65px' },
                    ml: { xs: 0, md: 5 },
                  }}
                >
                  <ImageContainer>
                    <Image
                      src={profileImage}
                      alt="Profile"
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </ImageContainer>
                  <CameraButton size="small" onClick={handleImageClick}>
                    <Image
                      src="/Images/Edit-Profile-camera.svg"
                      alt="Edit Profile Picture"
                      width={24}
                      height={24}
                    />
                  </CameraButton>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                </Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    fontWeight: 600,
                    color: '#484848',
                    lineHeight: 1.2,
                    ml: { xs: 0, md: '48px' },
                    mt: { xs: 0, md: -5 },
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  John Doe
                </Typography>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mt: { xs: 2, md: 0 }
              }}>
                <EditProfileButton onClick={handleEditProfile}>
                  <Image
                    src="/Images/Edit-Profile-icon.svg"
                    alt="Edit Profile"
                    width={35}
                    height={35}
                  />
                </EditProfileButton>
                <StyledButton onClick={handleChangePassword}>
                  Change Password
                </StyledButton>
              </Box>
            </Box>

            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: 4, sm: 3, md: 2.5 },
              pl: { xs: 0, md: '346px' },
              mt: { xs: 6, md: -7 },
              mb: { xs: 4, md: 9 }
            }}>
              {detailsToShow.map((detail, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: { xs: 1, md: 6 }
                  }}
                >
                  <Typography
                    sx={{
                      color: '#777777',
                      fontSize: { xs: '0.875rem', md: '0.875rem' },
                      fontWeight: 500,
                      width: { xs: 'auto', md: '180px' },
                      flexShrink: 0
                    }}
                  >
                    {detail.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#777777',
                      fontSize: { xs: '0.875rem', md: '0.875rem' },
                      fontWeight: 500,
                      opacity: 0.7,
                    }}
                  >
                    {detail.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}