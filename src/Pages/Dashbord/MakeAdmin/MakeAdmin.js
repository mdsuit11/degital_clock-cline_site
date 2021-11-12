import { Alert, AlertTitle, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAddminSubmit = e => {
        const user = {email};
        fetch('https://mighty-thicket-37002.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.modifiedCount) {
                setSuccess(true);
                
                console.log(data)
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            <h2>this is admin page</h2>
            <form onSubmit={handleAddminSubmit}>
            <TextField 
            sx={{width:'30%'}}
            label="Email"
            type="email"
            required
            onBlur={handleOnBlur}
             variant="standard" 
             /> 
             <br /> <br />
            <Button type='submit' variant="contained">Make Admin</Button>
            </form>
            {
        success && <Alert severity="success">
        <AlertTitle>Make Admin Successfully</AlertTitle>
        
      </Alert>

      };
        </div>
    );
};

export default MakeAdmin;