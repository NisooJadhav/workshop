import React, { useState } from 'react';
import { BsDownload } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1 className='main-head'>About Us</h1>
      <div className="homeContent">
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div style={{ height: "80px" }}></div>

      <div className="row" width="50%">
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
          <Carousel.Item>
            <img
              className="w-75 h-25"
              src="./images/c1.jpg?text=Second slide &bg=000000"
              alt="Happy faces"
            />
            <Carousel.Caption>
              <h3>Happy Students</h3>
              <p>Every student is 100% satisfied by our teaching.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="w-75 h-25"
              src="./images/c2.jpg?text=Second slide &bg=000000"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Every doubt solved.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="w-75 h-25"
              src="./images/c3.jpg?text=Second slide &bg=000000"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Path for a bright future</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <p style={{ marginTop: "20px" }}>
          Lorem ipsum dolor sit a	met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
      </div>

      <div style={{ height: "40px" }}></div>
      <center>
        <div style={{ height: "1px", backgroundColor: "#aaa", width: "75%" }}></div>
      </center> 
      <div style={{ height: "25px" }}></div>
      <h1 className='main-head'>Video Demonstration</h1>
      <div style={{ height: "25px" }}></div>

      <iframe
        width="100%"
        height="700"
        src="https://player.vimeo.com/video/748285506?h=451d79f00c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />

      <div style={{ height: "10px" }}></div>
      <div style={{ height: "80px" }}>
        <a href="https://workshop-docs.vercel.app/" target={"_blank"}>
          <button id="submit" value="Submit" style={{ width: "20%" }}><div>Documentation site&nbsp;&nbsp; <FiExternalLink />&nbsp;</div>
          </button>
        </a>

        <a href="https://workshop-docs.vercel.app/extra/pdf" target={"_blank"}>
          <button id="submit" value="Submit" style={{ width: "20%" }}><div>Download PDF&nbsp;&nbsp; <BsDownload />&nbsp;</div>
          </button>
        </a>
      </div>
      <div style={{ height: "25px" }}></div>
    </>
  );
}
export default About;