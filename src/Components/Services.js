import React from 'react'
import { Typography, Box, Button, Grid, Avatar, TextField, Card, CardContent, Container } from '@mui/material';
const Services = () => {
  return (
    <Box id="Services" my={5} textAlign="center">
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
  )
}

export default Services
