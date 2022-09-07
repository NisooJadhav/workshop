import { useState, useEffect } from "react";
import axios from "axios";
import RandomImage from "./RandomImage";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("/posts")
            .then((res) => {
                if (res) {
                    setPosts(res.data)
                }
                else {
                     setPosts(res.data="<p style={{zIndex:6,color:'#fff'}}>loading...</p>")
                }
            })
            .catch(
                (err) => console.log(err)
            );
    }, []);

    return (
        <>
            <RandomImage />
            <h1 className='main-head' style={{ paddingBottom: "1.4rem" }}>Workshops</h1>
						
            <div style={{ width: "90%", textAlign: "center", margin: "0% 5%" }}>

                {posts ?
                    (
                        <div className="belowWorkshop">
                            {posts.map((post) => {
                                return (
                                    <div
                                        style={{
                                            marginBottom: "1rem",
                                            border: "solid lightgray 1px",
                                            borderRadius: "8px",
                                        }}
                                        key={post._id}
                                    >
                                        <h2>{post.title}</h2>
                                        <p>{post.content}</p>
                                        <span>workshop tenure: </span>
                                        <p>{post.fromDate} ~ {post.toDate}</p>
										<span>instructor: </span>
                                        <p>{post.instructor}</p>
                                        <center>
                                            <hr color="#eee" />
                                        </center>
                                    </div>
                                );
                            })}
                        </div>
                    ) :
                    (
                        <div className="belowWorkshop">
                            return(<p style={{ color: "#fff" }}>loading...</p>);
                        </div>
                    )
                }
            </div>
            <br />
            <br />
        </>
    )
}

export default Posts;