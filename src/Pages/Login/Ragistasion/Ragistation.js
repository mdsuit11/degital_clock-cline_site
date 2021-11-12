import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState,} from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
// import React from 'react';

const Ragistation = () => {
  const [loginData, setLoginData] = useState({})
  const {user, registerUser, loding, error} = useAuth();
  const history = useHistory();
   
   

    const handleOnBlur = e => {
            const fild = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[fild] = value;
            setLoginData(newLoginData)
            
    }
    const hendleRagistasionSubmit = e => {
        if(loginData.password !== loginData.password2) {
            alert('password dont match')
            return;
        };
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault()
    };

    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item sx={{mt:10}} xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
        Ragistasion
      </Typography>
     {!loding && <form onSubmit={hendleRagistasionSubmit}>
      <TextField
      sx={{width:"75%", m:1}}
       id="standard-basic"
        label="your name" 
        name="name"
        type="text"
        onBlur={handleOnBlur}
        variant="standard" />
      <TextField
      sx={{width:"75%", m:1}}
       id="standard-basic"
        label="your email" 
        name="email"
        type="email"
        onBlur={handleOnBlur}
        variant="standard" />
        <TextField
        sx={{width:"75%", m:1}}
          id="standard-password-input"
          label="your Password"
          type="password"
          name="password"
          onBlur={handleOnBlur}
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
        sx={{width:"75%", m:1}}
          id="standard-password-input"
          label="Re Type Password"
          type="password"
          name="password2"
          onBlur={handleOnBlur}
          autoComplete="current-password"
          variant="standard"
        />
        <Button type='submit' sx={{width:"75%", m:1}} variant="contained">Creat Acount</Button>
      </form>}
      {loding &&  <CircularProgress />}
      {
        user.email && <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        User Created successFully —
      </Alert>

      };
      {
        error && <Alert severity="error">{error}</Alert>
      }
      
      {/* <Link to='/login'>
        <Button sx={{mt:3}}>Already User? Please Login</Button>
      </Link> */}
        </Grid>
        <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src={login} alt="" />
        </Grid>
        </Grid>
        </Container>
    );
};

export default Ragistation;