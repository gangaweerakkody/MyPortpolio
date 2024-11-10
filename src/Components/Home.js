import React from 'react';
import { Typography, Box, Button, Grid, Avatar, TextField, Card, CardContent, Container } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import Profile from '../Images/Profile.jpg';

const Home = () => {
  return (
    <Box  id="home" sx={{ backgroundColor:'#BA55D3', padding: '30px 0' }}>
      <Container maxWidth="lg">
       

        <Box my={15} display="flex" justifyContent="space-between" alignItems="center">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
            <Box
            sx={{
              width: 250,
              height: 250,
              borderRadius: '50%',
              overflow: 'hidden', 
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
            <Grid item xs={15} md={8} color='white'>
            <Typography variant="h3" fontWeight="bold">
            I'm Isuru Ganga Weerakkody
          </Typography>
              <Typography variant="h5" color="textSecondary">
            Freelance Web Designer & Developer
          </Typography>
              <Button variant="outlined" color="#BA55D3" sx={{ mr: 2 }}>
                Hire Me
              </Button>
              <Button variant="outlined" color="#BA55D3">
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
