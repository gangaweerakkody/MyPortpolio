import React from 'react';
import { Typography, Box, Container, Button, Avatar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../Images/Profile.jpg';
const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: 6,
        backgroundColor: '#F0F8FF',
        color: 'text.primary',
      }}
    >
      <Container>
        {/* Optional Profile Picture */}
        <Box display="flex" justifyContent="center" mb={4}>
          <Avatar
            alt="Your Name"
            src={profile} // Replace with the profile picture URL
            sx={{
              width: 150,
              height: 150,
              border: '3px solid #BA55D3',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease-in-out',
              },
            }}
          />
        </Box>

        {/* About Section */}
        <Typography
          variant="h3"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#BA55D3' }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', textAlign: 'center', mb: 3 }}
        >
          I’m a <b>software engineering student</b> passionate about web development.
          My focus is on building <b>user-friendly</b>, <b>efficient web applications</b>. 
          I love exploring <span> new technologies
          and finding</span> <span style={{ fontStyle: 'italic' }}>creative solutions</span> for 
          <b>complex problems</b>.
        </Typography>

        {/* Social Links Section */}
        <Box display="flex" justifyContent="center" gap={2} mt={4}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
            href="https://github.com/gangaweerakkody" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              '&:hover': {
                backgroundColor: '#333',
                color: '#FFF',
              },
            }}
          >
            GitHub
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/ganga-weerakkody-1587a92a9/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              '&:hover': {
                backgroundColor: '#0077B5',
                color: '#FFF',
              },
            }}
          >
            LinkedIn
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
