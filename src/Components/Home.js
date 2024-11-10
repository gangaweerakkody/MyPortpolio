import React from 'react';
import { Typography, Box, Button, Grid, Avatar, TextField, Card, CardContent, Container } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import Profile from '../Images/Profile.jpg';

const Home = () => {
  return (
    <Box  id="home" sx={{ backgroundColor: grey[100], color: grey[800], padding: '30px 0' }}>
      <Container maxWidth="lg">
       

        {/* About Me Section */}
        <Box my={15} display="flex" justifyContent="space-between" alignItems="center">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
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
            <Grid item xs={15} md={8}>
            <Typography variant="h3" fontWeight="bold">
            I am Isuru Ganga Weerakkody
          </Typography>
              <Typography variant="h5" color="textSecondary">
            Freelance Web Designer & Developer
          </Typography>
              <Button variant="outlined" color="warning" sx={{ mr: 2 }}>
                Hire Me
              </Button>
              <Button variant="outlined" color="warning">
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Box>    
        
      </Container>
    </Box>
  );
};

export default Home;
