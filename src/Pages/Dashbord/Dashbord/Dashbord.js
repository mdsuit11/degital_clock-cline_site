import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashbordHome from '../DashbordHome/DashbordHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageOrder from '../ManageOrder/ManageOrder';
import AddProducts from '../AddProducts/AddProducts';
import Payments from '../Payments/Payments';

const drawerWidth = 180;

function Dashbord(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {admin} = useAuth(); 

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      
      <Link style={{textDecoration:"none", color:"#1976d2"}} to={`${url}`}><Button  color="inherit">Dashbord</Button></Link>
      <Link style={{textDecoration:"none", color:"#1976d2"}} to='/moreproducts'><Button  color="inherit">More Products</Button></Link>
      <Link style={{textDecoration:"none", color:"#1976d2"}} to={'/home'}><Button  color="inherit">Go To  Home  </Button></Link>
      <Link style={{textDecoration:"none", color:"#1976d2"}} to={`${url}/payments`}><Button  color="inherit">Payment </Button></Link>
      
     
      {
          admin && <Box>
              <Link style={{textDecoration:"none", color:"#1976d2"}} to={`${url}/manageorder`}><Button  color="inherit">Manage Order</Button></Link>  
              <Link style={{textDecoration:"none", color:"#1976d2"}} to={`${url}/makeAdmin`}><Button  color="inherit">Make Admin</Button></Link>  
              <Link style={{textDecoration:"none", color:"#1976d2"}} to={`${url}/addproducts`}><Button  color="inherit">Add Products</Button></Link>  
              
                 </Box>
      }
      
              
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Dashbord
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
         <DashbordHome></DashbordHome>
        </Route>
        <Route path={`${path}/payments`}>
          <Payments></Payments>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageorder`}>
          <ManageOrder></ManageOrder>
        </AdminRoute>
        <AdminRoute path={`${path}/addproducts`}>
            <AddProducts></AddProducts>
        </AdminRoute>
      </Switch>
        
      </Box>
    </Box>
  );
}

Dashbord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbord;
