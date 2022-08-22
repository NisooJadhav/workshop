import React,{ useState, useEffect } from "react";
import { MdSend } from 'react-icons/md';
import axios from "axios";

export default function Register(){
  const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios
          .get("/posts")
          .then((res) => {
              if (res) {
                  setPosts(res.data)
              }
          })
          .catch(
              (err) => console.log(err)
          );
  }, []);
    
  return(
  <>
    <h1 className='main-head'>Register</h1>
    
    <div className='mainContactForm'>
    
    {posts?(    
    <form method="POST" className="gform">
          <div className="contactForm">
              <center>
                  <label>enter name:</label>
                  <br />
                  <input type="text" maxLength="30" name="name" placeholder="Name" style={{ width: "90%" }} required
                  spellCheck="false" />
                  <br />
                  <br />

                  <label>enter email:</label>
                  <br />
                  <input type="email" maxLength="30" name="email" placeholder="Email" style={{ width: "90%" }} required spellCheck="false"/>
                  <br />
                  <br />

                  <label>enter mobile no:</label>
                  <br />
                  <input type="tel" size="10" name="mobile" placeholder="Phone" style={{ width: "90%" }} required maxLength="10" spellCheck="false"/>
                  <br />
                  <br />
                  
                  <label>select workshop: </label>
                  <br />
                  
                  <select>
                  {posts.map((post) => {  
                  return(
                    <option key={post._id}>{post.title}</option>
                  )                 
                  })}
                  </select>
                  </center>
          </div>
          <div>
              <button type="submit" style={{ width: "50%" }}><div>Send&nbsp;&nbsp; <MdSend />&nbsp;</div>
              </button>
          </div>
      </form>
      ):(
      <div>
        return(<p style={{ color: "#fff" }}>loading...</p>);
      </div>
      )}
  </div>
  </>
  )
}
