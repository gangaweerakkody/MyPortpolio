import React from 'react';
import { Typography, Box, Button, Grid, Avatar } from '@mui/material';
import Profile from '../Images/Profile.jpg';

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#020202', // Dark gradient background
        color: 'white',
        padding: '30px', // Offset for Navbar
      }}
    >
      <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        justifyContent="center"
        sx={{ animation: 'fadeIn 1.5s ease' }}
      >
        {/* Profile Image Section */}
        <Grid 
          item 
          xs={12} 
          md={5} 
          sx={{ 
            textAlign: 'center', 
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: 250,
              height: 250,
              borderRadius: '50%',
              overflow: 'hidden', // Crop image edges
              display: 'inline-block',
              backgroundImage: `url(${Profile})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
             
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Grid>

        {/* Introduction Text Section */}
        <Grid item xs={12} md={7}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 8px rgba(0, 255, 255, 0.5)',
            }}
          >
            Hi, 
            I'm W.A.I.Ganga Weerakkody
          </Typography>
          <Typography 
            variant="h5" 
            gutterBottom 
            sx={{
              color: 'white',
              fontWeight: 400,
             
            }}
          >
            Software Engineer & Web Developer
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: 600, 
              margin: '20px 0', 
              color: 'rgba(250BFA65, 255, 255, 0.8)' 
            }}
          >
            Passionate about building digital experiences that bring ideas to life. Skilled in modern web technologies and always excited to learn and explore new technologies.
          </Typography>
          <Button 
            variant="contained" 
            href="#contact" 
            sx={{ 
              mt: 3,
              backgroundColor: '#00BFA6',
              '&:hover': {
                backgroundColor: '#00897B',
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 15px rgba(0, 255, 255, 0.5)',
              },
            }}
          >
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
