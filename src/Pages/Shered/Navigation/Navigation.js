import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user, admin, logOut, error} = useAuth();
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="contained">
            {
              user?.email &&  <Typography variant="contained"> 
              Hello---
            </Typography>
            }
            {user.displayName}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DIGITAL CLOCK 
          </Typography>
          <Link style={{textDecoration:"none", color:"white"}} to='/moreproducts'>
          <Button  color="inherit">More Products</Button>
          </Link>
          <Link style={{textDecoration:"none", color:"white"}} to='/myorder'>
          <Button  color="inherit">My Orders</Button>
          </Link>

          {/*  conditional Format */}
          {
           
           user?.email ?
           <Box>
             <NavLink style={{textDecoration:"none", color:"white"}} to='/dashbord'>
            <Button  color="inherit">Dashbord</Button>
            </NavLink>
              {/* <NavLink style={{textDecoration:"none", color:"white"}} to='/myorders'>
           <Button  color="inherit">My ORders</Button>
           </NavLink> */}
             
           <Button onClick={logOut} color="inherit">Log Out</Button>
           </Box>
           :
           <NavLink style={{textDecoration:"none", color:"white"}} to='/login'>
           <Button  color="inherit">Log In</Button>
           </NavLink>
           
         }
        </Toolbar>
      </AppBar>
    </Box>
 
        </div>
    );
};

export default Navigation;