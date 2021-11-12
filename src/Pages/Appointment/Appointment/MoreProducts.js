import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import AvailableProducts from './AvailableProducts';

const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/moreProducts')
        .then(res=> res.json())
        .then(data=> setMoreProducts(data))
        // console.log(moreProducts);
    },[])
    return (
        <>
        <Grid container spacing={2}>
            {
                moreProducts.map(more=> <AvailableProducts
                more={more}
                key={more._id}
                ></AvailableProducts>)
            }
        </Grid>
        </>
    );
};

export default MoreProducts;