import React from 'react'
import { Typography, TextField, Button, Box, Container } from '@mui/material';


const Contact = () => {
    return (

        
        <Container id="contact" sx={{ py: 5, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>Contact Me</Typography>
          <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth sx={{ mb: 2 }} />
          <Button variant="contained" color="primary">Send Message</Button>
        </Container>
      );
    };
export default Contact
