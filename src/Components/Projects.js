import React from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import toolImage from '../Images/ToolSystem.png';
import BiddingSystem from '../Images/bidding.png'
const projectsData = [
  {
    title: 'Tool Management System',
    description: 'A tool tracking app for construction sites.',
    image: toolImage,
    link: '#',
  },
  {
    title: 'Bidding System',
    description: 'A online bidding platform with seamless user experience.',
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
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
      },
    }}
  >
    <CardMedia component="img" height="180" image={image} alt={title} />
    <CardContent>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
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
        sx={{ mt: 2 }}
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
        background: 'linear-gradient(to bottom, #BA55D3, #8A2BE2)',
        color: 'white',
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{ mb: 5 }}
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
