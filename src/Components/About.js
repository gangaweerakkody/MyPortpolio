import React from 'react'
import { Typography, Box, Container } from '@mui/material';


const About = () => {
  return (
    <Container id="about" sx={{ py: 5, mt: 8 }}>
      <Typography variant="h3" gutterBottom>About Me</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        I’m a software engineering student passionate about web development. My focus is on building user-friendly, efficient web applications. I love exploring new technologies and finding creative solutions for complex problems.
      </Typography>
    </Container>
  );
};
export default About
