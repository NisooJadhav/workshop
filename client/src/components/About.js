import React, { useState } from 'react';
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
        <p style={{textAlign:"center"}}>
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
              <h3>Second slide label</h3>
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
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
		
        <p style={{marginTop:"20px"}}>
			Lorem ipsum dolor sit a	met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
		</p>
      </div>

      <div style={{ height: "80px" }}></div>
    </>
  );
}
export default About;