import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from '@mui/material';



const Comments = ({com}) => {
    const {Name, Comment, rating} = com;
    return (
        <Grid xs={12} md={4} sx={{mb:5}}>
            <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            C
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
        title={Name}
       
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
         <p> <bold>Rating :</bold>{rating}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>Comment: {Comment}</p>
        </Typography>
      </CardContent>
    </Card>
        </Grid>
    );
};

export default Comments;