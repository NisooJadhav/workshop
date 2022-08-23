import React from 'react';
//import $ from 'jquery';

export default function RandomImage() {
    document.body.style.cssText = `background-image: linear-gradient(to bottom, #112D4E99, #000)`;

    //  url("https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")

    const bgImg = [
        './images/1.jpg',
        './images/2.jpg',
        './images/3.jpg',
        './images/4.jpg',
        './images/5.jpg',
        './images/6.jpg',
        './images/7.jpg',
        './images/8.jpg',
        './images/9.jpg',
        './images/10.jpg',
        './images/11.jpg',
        './images/12.jpg',
        './images/13.jpg',
        './images/14.jpg',
        './images/15.jpg',

        // //headphone guy
        // 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

        // //guys behind glass
        // "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",

        // //guys looking at screen
        // "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",

        // //welding guy
        // "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

        // //another welding guy
        // "https://images.unsplash.com/photo-1538080204498-afe921550d75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

        // //rotating pot
        // "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",

        // //guy making belt
        // "https://images.unsplash.com/photo-1534126511673-b6899657816a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyYWZ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

        // //flower painting
        // 'https://images.unsplash.com/photo-1491245338813-c6832976196e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNyYWZ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

        // //brushes
        // 'https://images.unsplash.com/photo-1578730170902-45e5e21ffd82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNyYWZ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

        // //guy with smoking stick
        // 'https://images.unsplash.com/photo-1568259701122-d82953b2b538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNyYWZ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

        // //old blacksmith
        // 'https://images.unsplash.com/photo-1511306162219-1c5a469ab86c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNyYWZ0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

        // //old artist
        // 'https://images.unsplash.com/photo-1441471349424-351990746ff4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0aXN0fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

        // //grafitti guy
        // 'https://images.unsplash.com/photo-1504685723432-f3f005135e75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFydGlzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',

        // //guy explaining code
        // 'https://images.unsplash.com/photo-1605711285791-0219e80e43a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',

        // //guy giving lecture
        // 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',

        // //expert explaining code
        // 'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    ];

    function bgSwitch(a) {
        const randomRng =
            Math.floor(Math.random() * (a.length - 1 - 0 + 1)) + 0;
        let current = bgImg[randomRng];
        document.body.style.cssText = `background-image: linear-gradient(to bottom, #00000099 10%, #2b2b2b), url(${current})`;
    }

    setTimeout(function () {
        bgSwitch(bgImg);
    });

    return (
        <div>
  	        {/* <video src="./videos/city.mp4" autoPlay loop muted></video> */}
        </div>
    );  
}