import React, { useEffect } from "react";
import Cards from "./Cards";
import Marquee from "react-fast-marquee";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../Counter.css'

const Home = () => {

  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

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

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function type() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
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

  function stat() {
    const items = [...document.querySelectorAll('.number')];

    const updateCount = (el) => {
      const value = parseInt(el.dataset.value);
      const increment = Math.ceil(value / 1000);
      let initialValue = 0;

      const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > value) {
          el.textContent = `${value}+`;
          clearInterval(increaseCount);
          return;
        }

        el.textContent = `${initialValue}+`;
      }, 1);
    };

    items.forEach((item) => {
      updateCount(item);
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      stat();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="header">
        <div className="video-container">
          <video src="./videos/bg.mp4" autoPlay loop muted></video>
        </div>
      </div>

      <div>
        <div className="hero" style={{ backgroundImage: "./images/hero.png" }}>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <center>
                <h1 className='main-heading'>Workshoply</h1>
              </center>

              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/29.svg"
                    alt="carousel 1"
                  />
                  <Carousel.Caption>
                    Problem Solving
                  </Carousel.Caption>
                    <br />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/30.svg"
                    alt="carousel 2"
                  />
                  <Carousel.Caption>
                    Research
                  </Carousel.Caption>
                    <br />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./images/31.svg"
                    alt="carousel 3"
                  />
                  <Carousel.Caption>
                    Constant Updation
                  </Carousel.Caption>
                    <br/>
                </Carousel.Item>
              </Carousel>

            </div>

            <div className="col-md-8 col-sm-12 text-center d-flex justify-content-center">
              <div className="homeContent">

                <h1>
                  <a href="#" className="typewrite text-decoration-none !important" data-period="500" data-type='[ "learn from anywhere", "best teachers from the industry", "host workshop with confidence", "attend workshops for free" ]'>
                    <span className="wrap" style={{ fontSize: "10rem", color: "#eee" }}></span>
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

        <div style={{ height: "30vh" }}></div>


        <div className="stats">
          <br />
          <h2 style={{ color: "#eee", zIndex: "5", textShadow: "1px 3px 8px #000" }}>Statistics</h2>
          <section>
            <article>
              <div className="number" data-value="800">0</div>
              <p>Students taught</p>
            </article>
            <article>
              <div className="number" data-value="8472">0</div>
              <p>Total Hours in Teaching</p>
            </article>
            <article>
              <div className="number" data-value="500">0</div>
              <p>Happy Placements</p>
            </article>
          </section>


          <h2 style={{ color: "#eee", zIndex: "5", textShadow: "1px 3px 8px #000" }}>Hear from our students</h2>
          <br />
          <Marquee>
            <Cards />
          </Marquee>
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;
