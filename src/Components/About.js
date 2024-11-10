import React from 'react';
import { Typography, Box, Container, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <Container id="about" sx={{ py: 5, mt: 8 }}>
      <Typography variant="h3" gutterBottom>About Me</Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        I’m a software engineering student passionate about web development. My focus is on building user-friendly, efficient web applications. I love exploring new technologies and finding creative solutions for complex problems.
      </Typography>
      
      {/* Social Links */}
      <Box display="flex" gap={2} mt={2}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<GitHubIcon />}
          href="https://https://github.com/gangaweerakkody" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/your-linkedin-username" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </Box>
    </Container>
  );
};

export default About;
