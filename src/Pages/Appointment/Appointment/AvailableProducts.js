import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));



const AvailableProducts = ({more}) => {
     const {name, picture, price, description} = more; 

     const [expanded, setExpanded] = React.useState(false);

     const handleExpandClick = () => {
       setExpanded(!expanded);
     };
    return (
            <Grid item xs={12} md={4} sm={6}>
                    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // title={name}
        
      />
      <CardMedia
        component="img"
        height="180"
        image={picture}
        
      />
      <CardContent>
      <Typography variant="h6" gutterBottom component="div">
        Name : {name}
      </Typography>
      <Typography variant="h5" gutterBottom component="div">
       Price :  {price}
      </Typography>
      
        <Typography variant="body2" color="text.secondary">
        An alarm system will help to protect them from intruders. In the even that someone...........,
        </Typography>
        <NavLink style={{textDecoration:"none"}} to="/ordernow">
        <Button sx={{mt:2}} variant="contained">Place Order</Button>
        </NavLink>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography variant="h6" gutterBottom component="div">
        Learn more
      </Typography>
        <ExpandMore
        
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
        >
           
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="h6" gutterBottom component="div">
        Product Details
        </Typography>
          <Typography paragraph>
           {description} 
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
            </Grid>
            // <Grid  >
            // <
            // </Grid>
       
    );
};

export default AvailableProducts;