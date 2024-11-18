import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import CodeIcon from '@mui/icons-material/Code';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CampaignIcon from '@mui/icons-material/Campaign';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const serviceIcons = [
  <WebIcon fontSize="large" color="primary" />,
  <CodeIcon fontSize="large" color="primary" />,
  <PhotoCameraIcon fontSize="large" color="primary" />,
  <CampaignIcon fontSize="large" color="primary" />,
  <SearchIcon fontSize="large" color="primary" />,
  <ShoppingCartIcon fontSize="large" color="primary" />,
];

const Services = () => {
  return (
    <Box
      id="Services"
      sx={{
        py: 8,
        background: 'linear-gradient(to bottom, #BA55D3, #8A2BE2)',
        color: 'white',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: 'bold', mb: 4 }}
      >
        Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[
          'Web Design',
          'Web Development',
          'Photo Editing',
          'Marketing',
          'SEO & SMM',
          'E-Commerce',
        ].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                py: 4,
                px: 2,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 6px 30px rgba(0, 0, 0, 0.2)',
                },
                backgroundColor: '#ffffff',
                color: '#333',
              }}
            >
              <CardContent>
                {serviceIcons[index]}
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    mt: 2,
                    fontWeight: 'bold',
                    color: '#8A2BE2',
                  }}
                >
                  {service}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Providing high-quality {service.toLowerCase()} services to help your
                  business grow and succeed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
