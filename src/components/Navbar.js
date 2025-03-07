import React from 'react';
import { Box, Container, Typography, AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(122, 86, 214, 0.2)',
        boxShadow: '0 8px 32px rgba(122, 86, 214, 0.15)',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '95%',
        maxWidth: '1920px',
        borderRadius: '16px',
        padding: isMobile ? '8px 12px' : '12px 20px',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: '16px',
          border: '1px solid rgba(122, 86, 214, 0.1)',
          background: 'linear-gradient(180deg, rgba(122, 86, 214, 0.1), transparent)',
        },
      }}
    >
      <Container maxWidth={false} sx={{ width: '100%', px: { xs: 1, md: 3 } }}>
        <Toolbar sx={{ height: '70px', position: 'relative', width: '100%' }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Roxiler Logo"
            sx={{
              width: { xs: '100px', sm: '120px', md: '140px' },
              height: { xs: '90px', sm: '100px', md: '120px' },
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 8px rgba(122, 86, 214, 0.5))',
              position: 'absolute',
              left: { xs: '5px', sm: '10px', md: '20px' },
            }}
          />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: isMobile ? 'center' : 'center',
              position: 'relative',
              pl: { xs: '110px', sm: '130px', md: '160px' },
              pr: { xs: 1, sm: 2, md: 0 },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: -20,
                right: -20,
                height: '2px',
                bottom: -10,
                background: 'linear-gradient(90deg, transparent, #7a56d6, transparent)',
              },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.8rem', md: '2.5rem' },
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: 'Montserrat, sans-serif',
                background: 'linear-gradient(to right, #7a56d6, rgba(255, 255, 255, 0.8), #7a56d6)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 2px 10px rgba(122, 86, 214, 0.3)',
                letterSpacing: '0.5px',
                animation: 'gradient 5s ease infinite',
                '@keyframes gradient': {
                  '0%': { backgroundPosition: '0% 50%' },
                  '50%': { backgroundPosition: '100% 50%' },
                  '100%': { backgroundPosition: '0% 50%' },
                },
              }}
            >
              Roxiler Product Management
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
