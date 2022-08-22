import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TestSearch(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("/posts")
            .then((res) => {
                if (res) {
                    setPosts(res.data)
                }
                else {
                    setPosts(res.data="<p>loading...</p>")
                }
            })
            .catch(
                (err) => console.log(err)
            );
    }, []);

	const [searchTerm, setSearchTerm]=useState([]);
	
	return(
			<div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
			<input type="text" style={{height:"3rem", marginRight:"0"}} spellCheck="false" onChange={(event)=>{
				setSearchTerm(event.target.value);
			}} />
			{
				posts.filter((v)=>{
				if (searchTerm === ""){
					return v
				}	
				else if (v.title.toLowerCase().includes(searchTerm.toLowerCase())){
					return v
				}
				}).map((v,key)=>{
					return (
					<div key={posts.post._id}>
					<p>{v.post.title}</p>
					</div>
					)
				})
			}
			<button style={{fontSize:"1.5rem", padding:"5px",width:"30px", marginLeft:"1px"}}>
				<AiOutlineSearch />
			</button>
			</div>
	)
}