
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import Button from '@mui/material/Button';
import logo from '../Images/logo.png'

const Navbar = () => {
  return ( 
    <AppBar position="fixed" image={logo} sx={{backgroundColor:"#BA55D3"}}>
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
   
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
