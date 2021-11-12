import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <Box className="footer-main-container">
            <Grid container spacing={2}>
  <Grid item xs={12} md={12} sm={12}>
  <TextField className="fotter-input" sx={{width:"30%"}} id="standard-basic" label="Email" variant="standard" />
  <Button variant="contained">Subscribe</Button>
  </Grid>
  <Grid item xs={6} md={3} className='footer-container'>
    <h2>PRODUCT</h2>
    <li>Templates</li>
 <li>Explore</li>
        <li>Features</li>
 <li>Website Builder</li>
<li>Web Accessibility</li>
<li>Velo</li>
<li>Wix Playground</li>
<li>My Sites</li>
<li>Premium Plans</li>
        <li>Wix SEO</li>
<li>Logo Maker</li>
<li>Create a Blog</li>
<li>Online Store</li>
<li>Wix Bookings</li>
<li>Restaurants</li>
<li>App Market</li>
{/* <li>Domains</li>
<li>Web Hosting</li>
<li>Web Hosting</li>
<li>CX Software</li>
<li>Developers</li>
<li>Enterprise</li>
<li>Email Marketing</li>
<li>Email Marketing</li>
<li>Email Marketing</li>
<li>Website Design</li>
<li>Professional Tools</li> */}

  </Grid>
  <Grid item xs={6} md={3} className='footer-container'>
    <h2>COMPANY</h2>
    <li>About mix</li>
    <li>Design Assets</li>
    <li>Terms of Use</li>
    <li>App Market Terms</li>
    <li>Privacy Policy</li>
    <li>Privacy and Security Hub</li>
    <li>Accessibility Statement</li>
    <li>Abuse</li>
    <li>Affiliates</li>
    <li>Wix Capital</li>
    <li>Updates & Releases</li>
    <li>Contact Us</li>
    <li>Patent Notice</li>
    <li>Sitemap</li>
   
  </Grid>
  <Grid item xs={6} md={3} className='footer-container'>
    <h2>COMMUNITY</h2>
    <li>Wix Blog</li>
    <li>Wix Marketplace</li>
    <li>Student Website</li>
    <li>Wix Encyclopedia</li>
    <li>Partner Community</li>
  </Grid>
  <Grid item xs={6} md={3} className='footer-container'>
    <h2>SUPPORT</h2>
    <li>Support Center</li>
    <li>Status Page</li>
  </Grid>
  
</Grid>
        </Box>
    );
};

export default Footer;