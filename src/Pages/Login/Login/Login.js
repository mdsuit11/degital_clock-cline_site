import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState} from 'react';
import { Link} from 'react-router-dom';
import {useHistory , useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {
  
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, loding, signInWithGoogle, error} =useAuth();

    const location = useLocation();
    const history = useHistory(); /* useNavigate() */

    const handleOncheng = e => {
            const fild = e.target.name;
            const value = e.target.value;
            const newLoginData = {...loginData};
            newLoginData[fild] = value;
            setLoginData(newLoginData)
    }
    const hendleLoginSubmit = e => {
      e.preventDefault();
      loginUser(loginData.email, loginData.password, location, history );
        
    }
    // google sign in
    const handleGoogleSignIn = () => {
      signInWithGoogle( location, history );
    }
    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item sx={{mt:10}} xs={12} md={6}>
        <Typography variant="h6" gutterBottom>
        Log in
      </Typography>
      <form onSubmit={hendleLoginSubmit}>
      <TextField
      sx={{width:"75%", m:1}}
       id="standard-basic"
        label="your email" 
        name="email"
        type='email'
        onBlur={handleOncheng}
        variant="standard" />
        <TextField
        sx={{width:"75%", m:1}}
          id="standard-password-input"
          label="Password"
          type="password"
          name="password"
          onBlur={handleOncheng}
          autoComplete="current-password"
          variant="standard"
        />
        <Button type='submit' sx={{width:"75%", m:1}} variant="contained">Login</Button>

        {/* {
        error && <Alert severity="error">{error}</Alert>
      } */}
      <Link to='/ragistation'>
        <Button sx={{mt:3}}>New User? Please Ragistasion</Button>
      </Link>
      {loding &&  <CircularProgress />}
      {
        user.email && <Alert severity="success">
        <AlertTitle>Login Successfully</AlertTitle>
        
      </Alert>

      };
      {
        error && <Alert severity="error">{error}</Alert>
      }
      </form>
      <p>--------------------------------------------</p>
      <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
      
        </Grid>
        <Grid item xs={12} md={6}>
            <img style={{width:'100%'}} src={login} alt="" />
        </Grid>
        </Grid>
        </Container>
    );
};

export default Login;