import React from 'react';
import { Typography, Box, Button, Grid, Avatar, TextField, Card, CardContent, Container } from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import ProfileImage from '../Images/Profile.jpg';

const Home = () => {
  return (
    <Box  id="home" sx={{ backgroundColor: grey[100], color: grey[800], padding: '30px 0' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" py={5}>
          <Typography variant="h3" fontWeight="bold">
            I am Isuru Ganga Weerakkody
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Freelance Web Designer & Developer
          </Typography>
          <Button variant="contained" color="warning" sx={{ mt: 2 }}>
            Hire Me
          </Button>
        </Box>

        {/* About Me Section */}
        <Box my={5} display="flex" justifyContent="space-between" alignItems="center">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <Avatar
                src={ProfileImage}
                alt="Profile"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: 300,
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" paragraph>
                Hello! I am Isuru Ganga Weerakkody, a freelance web designer and developer with a passion for crafting digital solutions. My work combines creativity and functionality, ensuring that every project I take on is not only visually appealing but also practical and user-friendly.
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

        <Box my={5} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Services
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {['Web Design', 'Web Development', 'Photo Editing', 'Marketing', 'SEO & SMM', 'E-Commerce'].map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ textAlign: 'center', padding: 3, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                  <CardContent>
                    <Typography variant="h6" color="warning.main" gutterBottom>
                      {service}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Providing high-quality {service.toLowerCase()} services to help your business grow and succeed.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

       
      
        
      </Container>
    </Box>
  );
};

export default Home;
