import React, { Component } from 'react';
import './Pictureslide.css';
import Image1 from './img1.jpg';
import Image2 from './img2.jpg';
import Image3 from './img3.jpg';
import Image4 from './img4.jpg';
import Image5 from './img5.jpg';
import Image6 from './img6.jpg';
import Image7 from './img7.jpg';

export default class extends Component {
  render() {
    return <div>
      <div className="slide">
        <h2 className="who">Who’s Using Next.js</h2>
        <p>We’re honored some of the most talented creatives out there build with Next.js</p>
      </div>
      <div className="picture">
            <img src={Image1} alt="image" className="image1" />
            <img src={Image2} alt="image" className="image2" />
            <img src={Image3} alt="image" className="image3" />
            <img src={Image7} alt="image" className="image7" />
            <img src={Image6} alt="image" className="image6" />
            <img src={Image5} alt="image" className="image5" />
            <img src={Image4} alt="image" className="image4" />
        </div>
      {/* <div className="picture">
        <div className="container">
          <img src={Image1} alt="image" className="image1" />
          <div className="content1"><p className="content2">Netflix Jobs</p></div>
        </div>
        <div className="container">
          <img src={Image2} alt="image" className="image2" />
          <div className="content1"><p className="content2">Twitch</p></div>
        </div>
        <div className="container">
          <img src={Image3} alt="image" className="image3" />
          <div className="content1"><p className="content2">GitHub Copilot</p></div>
        </div>
        <div className="container">
          <img src={Image7} alt="image" className="image7" />
          <div className="content1"><p className="content2">Hulu</p></div>
        </div>
        <div className="container">
          <img src={Image6} alt="image" className="image6" />
          <div className="content1"><p className="content2">Nike</p></div>
        </div>
        <div className="container">
          <img src={Image5} alt="image" className="image5" />
          <div className="content1"><p className="content2">realtor.com</p></div>
        </div>
        <div className="container">
          <img src={Image4} alt="image" className="image4" />
          <div className="content1"><p className="content2">AT&T</p></div>
        </div> 
      </div>*/}
      <div className="picturemedia">
        <img src={Image1} alt="image" className="imagemedia" />
        <img src={Image2} alt="image" className="imagemedia" />
        <img src={Image3} alt="image" className="imagemedia" />
        <img src={Image4} alt="image" className="imagemedia2" />
        <img src={Image5} alt="image" className="imagemedia1" />
        <img src={Image6} alt="image" className="imagemedia1" />
        <img src={Image7} alt="image" className="imagemedia1" />
      </div>
      <p className="viewshow">View Showcase</p>
    </div>;
  }
}
