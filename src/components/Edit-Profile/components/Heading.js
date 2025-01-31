"use client";

import { Breadcrumbs, Typography, Link as MuiLink, Box, Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';

const AgentButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#E8E1C4',
  color: '#777777',
  textTransform: 'none',
  padding: '8px 16px',
  fontSize: '14px',
  fontWeight: 500,
  minWidth: '120px',
  height: 'fit-content',
  '&:hover': {
    backgroundColor: '#d8d0c0',
  },
  [theme.breakpoints.down('md')]: {
    padding: '6px 14px',
    fontSize: '14px',
    minWidth: '90px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '6px 12px',
    fontSize: '13px',
    minWidth: '80px',
  },
}));

function Heading() {
  const pathname = usePathname();
  const router = useRouter();
  const pathSegments = pathname.split("/").filter(Boolean);

  const handleAgentClick = () => {
    router.push('/agents');
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 2, sm: 3, md: 4 }, 
        px: { xs: 1, sm: 2, md: 2 },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Breadcrumbs 
        aria-label="breadcrumb" 
        separator={<ArrowForwardIosIcon sx={{fontSize: "10px"}}/>}
        sx={{
          '& .MuiBreadcrumbs-li': {
            fontSize: { xs: '14px', sm: '16px' }
          }
        }}
      >
        <MuiLink component={Link} href="/profile" underline="hover" color="inherit">
          My Profile
        </MuiLink>
        <Typography color="text.primary">
          Edit Profile
        </Typography>
      </Breadcrumbs>
      <AgentButton onClick={handleAgentClick}>
        My Agent
      </AgentButton>
    </Box>
  );
}

export default Heading;