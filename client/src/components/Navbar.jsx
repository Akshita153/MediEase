import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {imgUrl} from '../assets/images/imgUrl';

const navItems = [
  { label: 'Home', active: true },
  { label: 'Find Doctors', active: false },
  { label: 'How It Works', active: false },
  { label: 'About', active: false }
];

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      className="navbar"
        position="static" 
        component="nav" 
        elevation={0} // Removes the shadow
        sx={{ 
          backgroundColor: '#ffffff', 
          borderBottom: '1px solid #f0f0f0',
          py: 0.5 
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', px: '0px !important' }}>
            
            {/* 1. LOGO SECTION */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box 
                sx={{ 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  p: 0.5
                }}
              >
                <img src={imgUrl.logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
              </Box>
              <Typography
                className="logo-text"
                variant="h6"
                component="div"
                sx={{ 
                  color: '#2C3E35', 
                  fontWeight: 600, 
                  fontFamily: 'sans-serif',
                  fontSize: '20px'
                }}
              >
                MediEase
              </Typography>
            </Box>

            {/* 2. NAVIGATION LINKS */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  className="nav-button"
                  key={item.label}
                  sx={{
                    color: item.active ? '#2C3E35' : '#6A7E74',
                    textTransform: 'none', // Prevents automatic uppercase styling
                    fontWeight: 500,
                    fontSize: '14px',
                    px: 2,
                    py: 0.8,
                    borderRadius: '8px',
                    backgroundColor: item.active ? '#E4F2EE' : 'transparent',
                    '&:hover': {
                      backgroundColor: item.active ? '#D5EBE5' : '#f5f5f5',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* 3. AUTH BUTTONS SECTION */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} className="auth-buttons">
              <Button 
                className="login-button"
                sx={{ 
                  color: '#2C3E35', 
                  textTransform: 'none', 
                  fontWeight: 500,
                  fontSize: '14px'
                }}
              >
                Login
              </Button>
              <Button 
                variant="contained"
                sx={{ 
                  backgroundColor: '#426c65', 
                  color: '#ffffff', 
                  textTransform: 'none', 
                  fontWeight: 500,
                  fontSize: '14px',
                  borderRadius: '8px',
                  px: 2.5,
                  py: 1,
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#2D4E45',
                    boxShadow: 'none',
                  }
                }}
              >
                Sign Up
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
