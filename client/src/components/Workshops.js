import { useState, useEffect } from "react";
import axios from "axios";
import RandomImage from "./RandomImage";
import { InfinitySpin } from "react-loader-spinner";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        axios
            .get("/posts")
            .then((res) => {
                if (res) {
                    setSpinner(false);
                    setPosts(res.data)
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

                {spinner ?
                    (
                        <>
                            <center style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "55vh" }}>
                                <InfinitySpin
                                    width="200"
                                    color="#42d392"
                                    wrapperStyle
                                    wrapperClass
                                />
                            </center>
                        </>
                    ) :
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
                    )
                }
            </div>
            <br />
            <br />
        </>
    )
}

export default Posts;