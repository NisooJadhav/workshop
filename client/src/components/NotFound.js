import React from 'react';
import { NavLink } from "react-router-dom";

export default function NotFound() {

    return (	
	<div style={{height:"90vh", background:"#000", zIndex:"-1"}}>
	<div className="404" style={{backgroundImage:`linear-gradient(to bottom, #00000050, #00000099),url("./images/4.png")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <div className="bg404" id="bg404">
		{/*
		<h1 style={{ fontSize: "10rem", color: "#eee", textShadow: "2px 2px 2px #000", fontFamily: "sharpie", margin: "0", padding: "0" }}>404 ://</h1>
		*/}
		<section style={{height:"30vh"}}></section>
		
            <p style={{ color: "#eee", fontSize: "1.5rem", textShadow:"1px 2px 2px #000" }}>
                may be you're looking for <NavLink to="/workshops" style={{ color: "#eee",fontSize:"3rem",textShadow:"1px 2px 2px #000" }}>workshops </NavLink>
            </p>
        </div>
	</div>
	</div>
    );
}

