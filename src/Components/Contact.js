import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container, Alert, Snackbar, Grid } from '@mui/material';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required.';
        if (!formData.email) errors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email address.';
        if (!formData.message) errors.message = 'Message is required.';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setSuccessMessage(true);
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } else {
            setErrors(formErrors);
            setErrorMessage(true);
        }
    };

    return (
        <Box id="contact" sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Contact Me
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Have a question or want to work together? Fill out the form below!
                    </Typography>
                </Box>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        backgroundColor: '#fff',
                        borderRadius: 4,
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        p: 4,
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="email"
                                variant="outlined"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Message"
                                name="message"
                                variant="outlined"
                                multiline
                                rows={5}
                                fullWidth
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{
                                    px: 5,
                                    py: 1.5,
                                    mr: 2,
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                }}
                            >
                                Send Message
                            </Button>
                            <Button
                                type="button"
                                variant="outlined"
                                color="secondary"
                                sx={{
                                    px: 5,
                                    py: 1.5,
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                }}
                                onClick={() => setFormData({ name: '', email: '', message: '' })}
                            >
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

                {/* Success Snackbar */}
                <Snackbar
                    open={successMessage}
                    autoHideDuration={3000}
                    onClose={() => setSuccessMessage(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert severity="success" onClose={() => setSuccessMessage(false)}>
                        Your message has been sent successfully!
                    </Alert>
                </Snackbar>

                {/* Error Snackbar */}
                <Snackbar
                    open={errorMessage}
                    autoHideDuration={3000}
                    onClose={() => setErrorMessage(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert severity="error" onClose={() => setErrorMessage(false)}>
                        Please correct the errors and try again.
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
};

export default Contact;
