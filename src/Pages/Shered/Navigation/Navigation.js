// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

// test 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';






const Navigation = () => {
  const {user, logOut} = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* -------------Small Device responsive start--------- */}

      <MenuItem>  
      <Link style={{textDecoration:"none", color:"black"}} to='/moreproducts'>
         <Button  color="inherit">More Products</Button>
         </Link>
      </MenuItem>
      <MenuItem>
      {     
              user?.email ?
              <Box>
                <MenuItem>
                <NavLink style={{textDecoration:"none", color:"black"}} to='/dashbord'>
               <Button  color="inherit">Dashbord</Button>
               </NavLink>
                </MenuItem>



                 <MenuItem>
                 <NavLink style={{textDecoration:"none",color:"black" }} to='/myorder'>
                  <Button  color="inherit">My Orders</Button> 
                  </NavLink>
                 </MenuItem>

              <MenuItem>
              <Button onClick={logOut} color="inherit">Log Out</Button>
              </MenuItem>
              </Box>
              :
              <MenuItem>
              <NavLink style={{textDecoration:"none", color:"black"}} to='/login'>
              <Button  color="inherit">Log In</Button>
              </NavLink>
              </MenuItem>
              
            }
      </MenuItem>
     {/*------------- Small Device responsive End ----------*/}
    </Menu>
    

  );
    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link style={{textDecoration:"none", color:"white"}} to='/moreproducts'>
           <Button  color="inherit">More Products</Button>
           </Link>
           <Link style={{textDecoration:"none", color:"white"}} to='/myorder'>
           <Button  color="inherit">My Orders</Button>
          </Link>
  
            {/*---------- Condition---------- */}
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

            {/* <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    //     <div>
    //          <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="contained">
    //         {
    //           user?.email &&  <Typography variant="contained"> 
    //           Hello---
    //         </Typography>
    //         }
    //         {user.displayName}
    //       </Typography>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       DIGITAL CLOCK 
    //       </Typography>
    //       <Link style={{textDecoration:"none", color:"white"}} to='/moreproducts'>
    //       <Button  color="inherit">More Products</Button>
    //       </Link>
    //       <Link style={{textDecoration:"none", color:"white"}} to='/myorder'>
    //       <Button  color="inherit">My Orders</Button>
    //       </Link>

    //       {/*  conditional Format */}
        //   {
           
        //    user?.email ?
        //    <Box>
        //      <NavLink style={{textDecoration:"none", color:"white"}} to='/dashbord'>
        //     <Button  color="inherit">Dashbord</Button>
        //     </NavLink>
        //       {/* <NavLink style={{textDecoration:"none", color:"white"}} to='/myorders'>
        //    <Button  color="inherit">My ORders</Button>
        //    </NavLink> */}
             
        //    <Button onClick={logOut} color="inherit">Log Out</Button>
        //    </Box>
        //    :
        //    <NavLink style={{textDecoration:"none", color:"white"}} to='/login'>
        //    <Button  color="inherit">Log In</Button>
        //    </NavLink>
           
        //  }
    //     </Toolbar>
    //   </AppBar>
    // </Box>
 
    //     </div>
    );
};

export default Navigation;