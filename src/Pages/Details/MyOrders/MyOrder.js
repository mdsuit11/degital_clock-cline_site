import { Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowORder from '../ShowOrder/ShowORder';

const MyOrder = () => {
    const [orderDetails, setOrederDetails] = useState([]);

   useEffect(() => {
       fetch('https://evening-tor-13329.herokuapp.com/orders')
       .then(res => res.json())
       .then(data => setOrederDetails(data))
   },[])

  
    return (
        <div className="ordercontainer">
            <h2>ORDERS</h2>
            <Divider />
            <Divider sx={{mb:10,}} />
         {
             orderDetails.map(details=> <ShowORder details={details}
             key={details._id}
             
             ></ShowORder>)
         }
        </div>
    );
};

export default MyOrder;