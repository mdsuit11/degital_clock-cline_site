import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Ragistation from './Pages/Login/Ragistasion/Ragistation';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivetRoute from './Pages/Login/Login/PrivetRoute/PrivetRoute';
import Dashbord from './Pages/Dashbord/Dashbord/Dashbord';
import OrderNow from './Pages/OrderNow/OrderNow';
import MyOrder from './Pages/Details/MyOrders/MyOrder';
import MoreProducts from './Pages/Appointment/Appointment/MoreProducts';


/* heroku : https://mighty-thicket-37002.herokuapp.com/ */

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch> {/* Routes */}
          <Route path='/moreproducts'>
            <MoreProducts></MoreProducts>
          </Route>
          <PrivetRoute path="/myorder">
         <MyOrder></MyOrder>
          </PrivetRoute>
          <PrivetRoute path="/ordernow">
            <OrderNow></OrderNow>
          </PrivetRoute>
          <PrivetRoute path="/dashbord">
           <Dashbord></Dashbord>
          </PrivetRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/Ragistation">
            <Ragistation></Ragistation>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
