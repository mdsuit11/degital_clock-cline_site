import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Alaram from '../Alaram/Alaram';

const Alarams = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <Typography sx={{my:5}} variant="h6" component="div">
          OUR SERVICES
        </Typography>
        <Typography variant="h4" component="div" sx={{fontWeight: 600,  color: 'success.main', mb: 2}}>
          Services We Provide
        </Typography>
            <Grid container spacing={5} sx={{my:"auto", py:3}}>
            
            {
                products.map(product=> <Alaram 
                    product={product}
                    key={product._id}
                ></Alaram>)
            }
            </Grid>
            
        </div>
    );
};

export default Alarams;