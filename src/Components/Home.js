import React from 'react';
import { Typography, Box, Button, Container, Fade } from '@mui/material';
import Profile from '../Images/Profile.jpg';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        background: 'linear-gradient(to bottom, #4A148C, #8A2BE2)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: '"Poppins", sans-serif',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        {/* Profile Image with Animation */}
        <Fade in={true} timeout={2000}>
          <Box
            sx={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundImage: `url(${Profile})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '5px solid #FFFFFF',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.7)',
              margin: '0 auto',
              mb: 4,
            }}
          />
        </Fade>

        {/* Titles with Animated Gradient */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
            background: 'linear-gradient(90deg,rgb(255, 254, 250),rgb(216, 207, 204),rgb(169, 146, 191))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'moveGradient 3s infinite linear',
          }}
        >
          I'm Isuru Ganga Weerakkody
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: '#E0E0E0',
          }}
        >
          Web Developer | Frontend Developer 
        </Typography>

        {/* Action Buttons */}
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFD700',
              color: '#1E1E1E',
              px: 4,
              py: 1.5,
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              mr: 2,
              '&:hover': {
                backgroundColor: '#FFC107',
                boxShadow: '0 4px 15px rgba(255, 215, 0, 0.5)',
              },
            }}
            href="#"
          >
            Hire Me
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#8A2BE2',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#5D3FD3',
                boxShadow: '0 4px 15px rgba(138, 43, 226, 0.5)',
              },
            }}
            href="#"
          >
            Download CV
          </Button>
        </Box>
      </Container>

      {/* Keyframes for Animated Gradient */}
      <style>
        {`
          @keyframes moveGradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
