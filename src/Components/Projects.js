import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import toolImage from '../Images/ToolSystem.png';
import BiddingSystem from '../Images/bidding.png';

const projectsData = [
  {
    title: 'Tool Management System',
    description: 'A tool tracking app for construction sites.',
    image: toolImage,
    link: '#',
  },
  {
    title: 'Bidding System',
    description: 'An online bidding platform with a seamless user experience.',
    image: BiddingSystem,
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive and interactive portfolio website to showcase work.',
    image: 'https://via.placeholder.com/300',
    link: '#',
  },
];

const ProjectCard = ({ title, description, image, link }) => (
  <Card
    sx={{
      maxWidth: 345,
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: '10px',
      overflow: 'hidden',
    }}
  >
    <CardMedia component="img" height="200" image={image} alt={title} />
    <CardContent sx={{ backgroundColor: 'white' }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom color="text.primary">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={link}
        target="_blank"
        sx={{
          mt: 2,
          backgroundColor: '#8A2BE2',
          '&:hover': { backgroundColor: '#5D3FD3' },
        }}
      >
        Learn More
      </Button>
    </CardContent>
  </Card>
);

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        px: 3,
        background: 'linear-gradient(to bottom, #4A148C, #BA55D3)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        gutterBottom
        sx={{
          mb: 5,
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectsData.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
