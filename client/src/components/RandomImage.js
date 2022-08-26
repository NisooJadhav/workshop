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
        <>
        </>
    );  
}