"use client";

import { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const StyledButton = styled(Button)({
  textTransform: 'none',
  borderRadius: '6px',
  padding: '12px 32px',
  fontSize: '15px',
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
  border: '1px solid #E0E0E0',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    backgroundColor: '#fff',
    height: '48px',
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
    height: '48px',
    padding: '0 16px',
    color: '#484848',
    fontSize: '15px',
    boxSizing: 'border-box',
  },
});

const StyledCheckbox = styled(Checkbox)({
  '& .MuiSvgIcon-root': {
    display: 'none', // Hide the default icon
  },
  width: '26px',
  height: '26px',
  padding: '4px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '18px',
    height: '18px',
    border: '1px solid #C0C0C0',
    borderRadius: '2px',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '&.Mui-checked': {
    '&::before': {
      backgroundColor: '#E8E1C4',
    },
    '& .custom-tick': {
      display: 'block',
    }
  },
  '& .custom-tick': {
    display: 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '12px',
    height: '12px',
    zIndex: 1,
  }
});

const StyledFormControlLabel = styled(FormControlLabel)({
  marginRight: '32px',
  '& .MuiFormControlLabel-label': {
    fontSize: '15px',
    color: '#484848',
    marginLeft: '12px',
  },
});

const StyledRadio = styled(Radio)({
  padding: '4px',
  '& .MuiSvgIcon-root': {
    display: 'none', // Hide default radio icon
  },
  width: '22px',
  height: '22px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '16px',
    height: '16px',
    border: '1px solid #C0C0C0',
    borderRadius: '50%',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  '&.Mui-checked': {
    '&::before': {
      backgroundColor: '#E8E1C4',
      border: '2px solid white',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '20px',
      height: '20px',
      border: '1px solid #C0C0C0',
      borderRadius: '50%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }
  },
});

const RequiredAsterisk = styled('span')({
  color: '#FF0000',
  marginLeft: '2px',
  fontSize: '16px',
});

const FormLabel = styled(Typography)({
  color: '#484848',
  fontSize: '15px',
  fontWeight: 400,
  marginBottom: '8px',
});

export default function EditProfileMain() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'doejohn@examplemail.com',
    location: 'Pleasant Hill',
    phone: 'Pleasant Hill',
    communication: {
      call: true,
      email: true,
      text: true,
    },
    listingFrequency: 'Daily',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCommunicationChange = (type) => (e) => {
    setFormData(prev => ({
      ...prev,
      communication: {
        ...prev.communication,
        [type]: e.target.checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/my-profile');
  };

  const handleCancel = () => {
    router.push('/my-profile');
  };

  const CustomCheckbox = ({ checked, onChange }) => (
    <StyledCheckbox
      checked={checked}
      onChange={onChange}
      icon={<span />}
      checkedIcon={
        <span>
          <Image
            src="/Images/tick.svg"
            alt=""
            width={12}
            height={12}
            className="custom-tick"
          />
        </span>
      }
    />
  );

  return (
    <Box sx={{ 
      // maxWidth: '100%',
      // margin: '0 auto',
      px: { xs: 1, sm: 2, md: 2 },
      pb: 8
    }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: { xs: 0, sm: '12px' },
          p: { xs: 3, sm: 4, md: 5 },
          // maxWidth: '1290px',
          margin: '0 auto',
          backgroundColor: '#fff',
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '24px', sm: '28px', md: '32px' },
          }}
        >
          {/* First Row */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '20px', sm: '24px' }
          }}>
            <Box>
              <FormLabel>
                First Name<RequiredAsterisk>*</RequiredAsterisk>
              </FormLabel>
              <StyledTextField
                fullWidth
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            <Box>
              <FormLabel>
                Last Name
              </FormLabel>
              <StyledTextField
                fullWidth
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            <Box sx={{ gridColumn: { xs: '1', sm: '1 / -1', md: 'auto' } }}>
              <FormLabel>
                Email Address<RequiredAsterisk>*</RequiredAsterisk>
              </FormLabel>
              <StyledTextField
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
          </Box>

          {/* Second Row */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '20px', sm: '24px' }
          }}>
            <Box>
              <FormLabel>
                Location<RequiredAsterisk>*</RequiredAsterisk>
              </FormLabel>
              <StyledTextField
                fullWidth
                name="location"
                value={formData.location}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            <Box>
              <FormLabel>
                Phone No.<RequiredAsterisk>*</RequiredAsterisk>
              </FormLabel>
              <StyledTextField
                fullWidth
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />
            </Box>
            {/* Communication Preferences */}
            <Box sx={{ 
              gridColumn: { xs: '1', sm: '1 / -1', md: 'auto' },
              mt: { xs: 1, sm: 0 }
            }}>
              <FormLabel>
                Communication Preferences
              </FormLabel>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: '16px', sm: '24px' },
                mt: { xs: '16px', sm: '32px' }
              }}>
                <StyledFormControlLabel
                  control={
                    <CustomCheckbox
                      checked={formData.communication.call}
                      onChange={handleCommunicationChange('call')}
                    />
                  }
                  label="Call"
                />
                <StyledFormControlLabel
                  control={
                    <CustomCheckbox
                      checked={formData.communication.email}
                      onChange={handleCommunicationChange('email')}
                    />
                  }
                  label="Email"
                />
                <StyledFormControlLabel
                  control={
                    <CustomCheckbox
                      checked={formData.communication.text}
                      onChange={handleCommunicationChange('text')}
                    />
                  }
                  label="Text"
                />
              </Box>
            </Box>
          </Box>

          {/* Last Row */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
            gap: { xs: '32px', md: '24px' },
            alignItems: 'flex-start',
            mt: { xs: '8px', md: '16px' }
          }}>
            {/* New Listing Frequency section */}
            <Box>
              <FormLabel>
                New Listing Frequency
              </FormLabel>
              <RadioGroup
                row
                name="listingFrequency"
                value={formData.listingFrequency}
                onChange={handleChange}
                sx={{ 
                  gap: { xs: 4, sm: 3 }, 
                  mt: '12px',
                  justifyContent: { xs: 'space-between', sm: 'flex-start' }
                }}
              >
                <StyledFormControlLabel
                  value="Instant"
                  control={<StyledRadio />}
                  label="Instant"
                />
                <StyledFormControlLabel
                  value="Daily"
                  control={<StyledRadio />}
                  label="Daily"
                />
              </RadioGroup>
            </Box>

            {/* Buttons container */}
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: '12px', sm: '16px' },
              justifyContent: { xs: 'stretch', sm: 'flex-start', md: 'flex-end' },
              alignItems: 'stretch',
              mt: { xs: '8px', sm: '24px' },
              '& > button': {
                width: { xs: '100%', sm: 'auto' }
              }
            }}>
              <SaveButton type="submit">
                Save Changes
              </SaveButton>
              <CancelButton onClick={handleCancel}>
                Cancel
              </CancelButton>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}