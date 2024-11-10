import React from 'react'
import { Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const ProjectCard = ({title, description, image, link}) => (
    
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography variant="h5" component="div">{title}</Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
      <Button href={link} target="_blank" sx={{ mt: 2 }}>Learn More</Button>
    </CardContent>
  </Card>

);
 

const Projects = () => {
    return (
      <Box id="projects" sx={{ py: 5 }} >
        <Typography variant="h3" fontWeight="bold" textAlign="center"  gutterBottom>Projects</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item >
            <ProjectCard 
              title="Tool Management System"
              description="A tool tracking app for construction sites."
              image="https://via.placeholder.com/300"
             
              link="#"
            />
             <Grid item >
            <ProjectCard
              title="Tool Management System"
              description="A tool tracking app for construction sites."
              image="https://via.placeholder.com/300"
             
              link="#"
            />
          </Grid>
         
        </Grid>
          
         
        </Grid>

    
         
      </Box>
    );
  };

export default Projects
