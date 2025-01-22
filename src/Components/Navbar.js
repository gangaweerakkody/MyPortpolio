import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import { Drawer, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import PortfolioChatBot from './PortfolioChatBot'; // Ensure this path is correct

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
      {/* AppBar for navigation */}
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(to right, #4A148C, #BA55D3)',
          paddingX: 2,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: 'white',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            W.A.I. Ganga
          </Typography>
          {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((section) => (
            <Button
              key={section}
              color="inherit"
              component={Link}
              to={section.toLowerCase()}
              smooth
              sx={{
                color: 'white',
                fontWeight: '500',
                textTransform: 'capitalize',
                fontSize: '14px',
                mx: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              {section}
            </Button>
          ))}
          <Button
            onClick={handleOpenChat}
            sx={{
              color: 'white',
              fontWeight: '500',
              textTransform: 'capitalize',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              px: 2,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            Chat
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer for Chat Bot */}
      <Drawer
        anchor="right"
        open={openChat}
        onClose={handleCloseChat}
        sx={{
          '& .MuiDrawer-paper': {
            width: '400px',
            backgroundColor: 'linear-gradient(to bottom, #f5f8fb, #e8eaf6)',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <IconButton onClick={handleCloseChat} sx={{ alignSelf: 'flex-end', color: '#BA55D3' }}>
          <CloseIcon />
        </IconButton>
        <PortfolioChatBot />
      </Drawer>
    </>
  );
};

export default Navbar;
