import React,{ useState, useEffect } from "react";
import { MdSend } from 'react-icons/md';
import axios from "axios";
import FormSubmit from './FormSubmit';

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
    <form className="gform" method="POST" data-email="nishantvedjadhav@gmail.com" action="https://script.google.com/macros/s/AKfycbyAnc529PMiMft1K6V_q3cUyTnQUo700QoNhpqiOvQX4Zm9UQjxDE2z8jDqWj3X1FuU/exec">
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
                  
                  <select name="workshop">
                  {posts.map((post) => {  
                  return(
                    <option key={post._id}>{post.title}</option>
                  )                 
                  })}
                  </select>
                  </center>
          </div>
          <div>
                <button id="submit" value="Submit" style={{ width: "50%" }}><div>Register&nbsp;&nbsp; <MdSend />&nbsp;</div>
                </button>
          </div>
          <div style={{display:"none"}} className="thankyou_message">
              <h2><em>Thanks</em> for contacting us! We will get back to you soon!
              </h2>
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
