import React from 'react';
import { Typography, Box, Grid, Card, CardContent, Tooltip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DevicesIcon from '@mui/icons-material/Devices';
import SettingsIcon from '@mui/icons-material/Settings';

const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: <DevicesIcon fontSize="large" /> },
            { name: "HTML", icon: <CodeIcon fontSize="large" /> },
            { name: "CSS", icon: <CodeIcon fontSize="large" /> },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Java", icon: <StorageIcon fontSize="large" /> },
            { name: "C", icon: <StorageIcon fontSize="large" /> },
            { name: "SQL", icon: <StorageIcon fontSize="large" /> },
        ],
    },
    {
        category: "Frameworks",
        skills: [
            { name: "Spring Boot", icon: <SettingsIcon fontSize="large" /> },
            { name: "React", icon: <DevicesIcon fontSize="large" /> },
        ],
    },
];

const Skills = () => {
    return (
        <Box id="skills" color="white" sx={{ py: 5, backgroundColor: '#BA55D3' }}>
            <Typography variant="h3" textAlign="center" gutterBottom>
                Skills
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {skillsData.map((group, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography variant="h5" textAlign="center" sx={{ mb: 2 }}>
                            {group.category}
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {group.skills.map((skill, idx) => (
                                <Grid item key={idx}>
                                    <Tooltip title={`Learn more about ${skill.name}`} arrow>
                                        <Card
                                            sx={{
                                                width: 120,
                                                height: 140,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: '#4B0082',
                                                color: 'white',
                                                '&:hover': {
                                                    transform: 'scale(1.1)',
                                                    transition: 'transform 0.3s ease-in-out',
                                                    backgroundColor: '#7B68EE',
                                                },
                                            }}
                                        >
                                            <CardContent sx={{ textAlign: 'center' }}>
                                                {skill.icon}
                                                <Typography variant="body1" sx={{ mt: 1 }}>
                                                    {skill.name}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Tooltip>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Skills;
