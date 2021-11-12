import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const ShowORder = ({details}) => {
    console.log(details);
    const {Name, _id, zipcode, } = details;
    const { reset } = useForm();
    // DELETE an user
    const handleDeleteORders = id => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url,{
            method: 'DELETE',
            headers:{
                
            }
        })
        .then(res => res.json())
        .then(data=> {
            if(data.deletedCount > 0) {
                alert('Delete Successfully')
                reset();
            }
        })
        
    }
    
    return (
      <>
        <div  className="order-border">
           <h3>Name : {Name}</h3> 
           <h5>Order Id : {_id}</h5>
           <h5>Zip Code : {zipcode}</h5>
           <Button onClick={() =>handleDeleteORders(_id)} sx={{mb:3}} variant="outlined" color="error">
               DELETE
           </Button>
        </div>
      </>
    );
};

export default ShowORder;