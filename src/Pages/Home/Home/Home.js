import React from 'react';
import Navigation from '../../Shered/Navigation/Navigation';
import Alarams from '../Alarems/Alarams';
import Banner from '../Banner/Banner';
import ContactBenner from '../ContactBenner/ContactBenner';
import Footer from '../Footer/Footer';
import ShowComments from './ShowComments/ShowComments';

const Home = () => {
    return (
        <div>
           <Navigation />
           <Banner />
           
           <Alarams />
         
          <ShowComments />
           <ContactBenner></ContactBenner>
           <Footer></Footer>
           
           
        </div>
    );
};

export default Home;