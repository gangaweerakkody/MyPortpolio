import React from 'react';
import { Typography, Box, Button, Container } from '@mui/material';
import Profile from '../Images/Profile.jpg';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        backgroundColor: '#1E1E1E', 
        color: 'white', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        {/* Profile Image */}
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundImage: `url(${Profile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mx: 'auto',
            mb: 3,
          }}
        />
     
        <Typography variant="h3" fontWeight="bold" mb={2}>
          I'm Isuru Ganga Weerakkody
        </Typography>
        <Typography variant="h5" mb={3}>
         Software Engineer
        </Typography>

       
        <Box>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              mr: 2,
              '&:hover': {
                backgroundColor: 'white',
                color: '#1E1E1E',
              },
            }}
            href="#"
          >
            Hire Me
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
                color: '#1E1E1E',
              },
            }}
            href="#"
          >
            Download CV
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
