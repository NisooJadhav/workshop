import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MagnifyingGlass } from "react-loader-spinner";
import { BsSearch } from 'react-icons/bs'

export default function Search() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
        setSpinner(true);

        axios
            .get("/posts")
            .then((res) => {
                setSpinner(false);
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <h1 className='main-head'>Search <BsSearch /></h1>
            <input type="text" placeholder='🔍 search...' onChange={(event) => { setSearchTerm(event.target.value) }} />
            <center>
                <div style={{ height: "1px", backgroundColor: "#eeeeee75", width: "50%", marginTop: "10px" }}></div>
            </center>
            <center>
                <br />
                <div style={{ backgroundColor: '#ffffff95', width: "50%", borderRadius: "25px", paddingBottom: "25px" }}>
                    <br />
                    <br />
                    {
                        spinner ?
                            (
                                <>
                                    <center style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "55vh" }}>
                                        <MagnifyingGlass
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="MagnifyingGlass-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="MagnifyingGlass-wrapper"
                                            glassColor='#c0efff'
                                            color='royalblue'
                                        />
                                    </center>
                                </>
                            ) :
                            (
                                posts.filter((val) => {
                                    if (searchTerm === "") {
                                        return val
                                    }
                                    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val
                                    }
                                }).map((val, key) => {
                                    return (
                                        <div
                                            style={{
                                                marginBottom: "1rem",
                                                border: "solid lightgray 1px",
                                                borderRadius: "8px",
                                            }}
                                            key={key}
                                        >
                                            <h4 style={{ color: '#000' }}>{val.title}</h4>
                                        </div>
                                    )
                                })
                            )
                    }
                </div>
            </center>
        </>
    )
}