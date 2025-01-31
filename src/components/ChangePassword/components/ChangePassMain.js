"use client";

import { useState } from 'react';
import { Box, Paper, Typography, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const StyledButton = styled(Button)({
  textTransform: 'none',
  borderRadius: '6px',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 500,
  boxShadow: 'none',
  minWidth: '140px',
  '&:hover': {
    boxShadow: 'none',
  },
});

const SaveButton = styled(StyledButton)({
  backgroundColor: '#E8E1C4',
  color: '#777777',
  '&:hover': {
    backgroundColor: '#d8d0c0',
  },
});

const CancelButton = styled(StyledButton)({
  backgroundColor: '#fff',
  color: '#777777',
  border: '1px solid #838383',
  '&:hover': {
    backgroundColor: '#f5f5f5',
    border: '1px solid #E0E0E0',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#fff',
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#B0B0B0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#777777',
    },
  },
  '& .MuiInputBase-input': {
    padding: '16px',
    color: '#484848',
    fontSize: '16px',
  },
});

export default function ChangePassMain() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password change logic here
    router.push('/my-profile');
  };

  const handleCancel = () => {
    router.push('/my-profile');
  };

  return (
    <Box sx={{ 
      maxWidth: '100%',
      margin: '0 auto',
      px: { xs: 1, sm: 2, md: 4 },
      pb: 4
    }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: { xs: 0, sm: '12px' },
          p: { xs: 2, sm: 4, md: 6 },
          maxWidth: '550px',
          margin: '0 auto',
          boxShadow: { xs: 'none', sm: '0px 1px 3px rgba(0, 0, 0, 0.1)' }
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Box sx={{ mb: { xs: 1, sm: 2 } }}>
            <Typography
              sx={{
                color: '#484848',
                fontSize: { xs: '16px', sm: '18px' },
                fontWeight: 500,
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              Enter Your Current Password
            </Typography>
            <StyledTextField
              fullWidth
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
            />
          </Box>

          <Box sx={{ mb: { xs: 1, sm: 2 } }}>
            <Typography
              sx={{
                color: '#484848',
                fontSize: { xs: '16px', sm: '18px' },
                fontWeight: 500,
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              Enter Your New Password
            </Typography>
            <StyledTextField
              fullWidth
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
            />
          </Box>

          <Box sx={{ mb: { xs: 3, sm: 4 } }}>
            <Typography
              sx={{
                color: '#484848',
                fontSize: { xs: '16px', sm: '18px' },
                fontWeight: 500,
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              Re-enter Your New Password
            </Typography>
            <StyledTextField
              fullWidth
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter new password"
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 2 },
              justifyContent: 'center',
              mt: { xs: 1, sm: 2 },
              '& > button': {
                width: { xs: '100%', sm: 'auto' }
              }
            }}
          >
            <SaveButton type="submit">
              Save Changes
            </SaveButton>
            <CancelButton onClick={handleCancel}>
              Cancel
            </CancelButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}