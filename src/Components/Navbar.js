import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import { Drawer, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import PortfolioChatBot from './PortfolioChatBot'; // Make sure this path is correct

const Navbar = () => {
  const [openChat, setOpenChat] = useState(false);

  const handleOpenChat = () => {
    setOpenChat(true);
  };

  const handleCloseChat = () => {
    setOpenChat(false);
  };

  return (
    <>
      {/* AppBar for the navigation */}
      <AppBar position="fixed" sx={{ backgroundColor: "#BA55D3" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            W.A.I.Ganga
          </Typography>
          <Button color="inherit" component={Link} to="home" smooth>Home</Button>
          <Button color="inherit" component={Link} to="about" smooth>About</Button>
          <Button color="inherit" component={Link} to="skills" smooth>Skills</Button>
          <Button color="inherit" component={Link} to="projects" smooth>Projects</Button>
          <Button color="inherit" component={Link} to="Services" smooth>Services</Button>
          <Button color="inherit" component={Link} to="contact" smooth>Contact</Button>
          <Button color="inherit" onClick={handleOpenChat}>Chat</Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer for Chat Bot */}
      <Drawer
        anchor="right"
        open={openChat}
        onClose={handleCloseChat}
        sx={{
          width: '400px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '400px',
            backgroundColor: '#f5f8fb',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <IconButton onClick={handleCloseChat} sx={{ alignSelf: 'flex-end' }}>
          <CloseIcon />
        </IconButton>
        <PortfolioChatBot />
      </Drawer>
    </>
  );
};

export default Navbar;
