import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/Header';
import Bodycomponent from './Bodycomponent/Bodycomponent';
import Grid from './Gridcomponent/Grid';
import Marquee from './Marqueecomponent/Marquee';
import Pictureslide from './Pictureslidecomponent/Pictureslide';
import Bottom from './Bottomcomponent/Bottom';
import Footer from './Footercomponent/Footer';
ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Bodycomponent/>
    <Grid/>
    <Marquee/>
    <Pictureslide/>
    <Bottom/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
