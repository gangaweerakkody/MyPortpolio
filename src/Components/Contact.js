import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container, Alert, Snackbar } from '@mui/material';

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
        <Container id="contact" sx={{ py: 5, textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom>Contact Me</Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    label="Message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    sx={{ mb: 2 }}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ px: 4, py: 1 }}
                >
                    Send Message
                </Button>
                <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    sx={{ ml: 2, px: 4, py: 1 }}
                    onClick={() => setFormData({ name: '', email: '', message: '' })}
                >
                    Reset
                </Button>
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
    );
};

export default Contact;
