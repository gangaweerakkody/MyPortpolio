import React from 'react'
import { Typography, Box, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';


const Skills = () => {
    return (
        <Box id="skills" color='white' sx={{ py: 5, backgroundColor: '#BA55D3' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>Skills</Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <CodeIcon fontSize="large" />
              <Typography>JavaScript</Typography>
            </Grid>
            <Grid item>
              <StorageIcon fontSize="large" />
              <Typography>SQL</Typography>
            </Grid>
            <Grid item>
              <DevicesIcon fontSize="large" />
              <Typography>React</Typography>
            </Grid>
          </Grid>
        </Box>
      );
    };

export default Skills
