import Box from '@mui/material/Box';
import React from 'react';
import TextField from '@mui/material/TextField';
import './conbenner.css'
import { Button, Typography } from '@mui/material';





const ContactBenner = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    return (
        <Box className="contact-container" sx={{ flexGrow: 1}}>
          <Typography sx={{mb:10}} variant="h4" gutterBottom component="div">
            Contact Our Team
      </Typography>
          
        <TextField
         sx={{width: '30%'}}
          id="outlined-multiline-flexible"
          label="Your Email"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        /> <br />
        <TextField
          id="outlined-textarea"
          label="Subject"
          placeholder="Subject"
          multiline
          sx={{my:2, width: '30%'}}
        /> <br />
        <TextField
          sx={{width: '30%'}}
          id="outlined-multiline-static"
          label="Your Messeg"
          multiline
          rows={2}
          placeholder="your messeg"
        /> <br />
      <Button sx={{mt:3}} variant="contained">Send</Button>
    </Box>
    );
};

export default ContactBenner;