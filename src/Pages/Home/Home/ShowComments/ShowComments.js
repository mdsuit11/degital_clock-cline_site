import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Comments from '../Comments/Comments';

const ShowComments = () => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/comments')
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    return (
        <>
        <h2 className="review-title">Show our Chustomer Review</h2>
        <Grid container spacing={2} sx={{mb:10, mx:5}}>
            
           {
               comment.map(com => <Comments 
                com={com}
                key={com._id}
               ></Comments>)
           }
        </Grid>
        </>
    );
};

export default ShowComments;
