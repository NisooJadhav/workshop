import React from "react";
import Cards from "./Cards";
import Marquee from "react-fast-marquee";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/carousel";

const Home = () => {
	
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
	
  return (
  <>
  	<video src="./videos/night.mp4" autoPlay loop muted></video>
	
    <div>
	<div className="hero" style={{backgroundImage:"./images/hero.png"}}>
	<div className="row">
	<div className="col-4">
	<center>
	<h1 className='main-head' style={{fontSize:"5rem", fontFamily:"sharpie, sans-serif"}}>Workshoply</h1>
	</center>
	{/*<img src="./images/29.svg" style={{width:"55rem"}}/>*/}
	<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/29.svg"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/30.svg"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/31.svg"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
	
	</div>
	
	<div className="col-8 text-center d-flex justify-content-center">
	<div className="homeContent">
	
	<h1>
		<a href="" className="typewrite text-decoration-none !important" data-period="500" data-type='[ "learn from anywhere", "best teachers from the industry", "host workshop with confidence", "attend workshops for free" ]'>
			<span className="wrap" style={{fontSize:"10rem",color:"#eee"}}></span>
		</a>
	</h1>

	<br />
	<br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
	</div>
	</div>      
	</div>
	 
      <div style={{ height: "58vh" }}></div>
	  
    </div>
		<h2 style={{color:"#eee", zIndex:"5"}}>Hear from our students</h2>
		<br />
		<Marquee>
			<Cards />
		</Marquee>
	  <br />
	  </>
  );
};

export default Home;
