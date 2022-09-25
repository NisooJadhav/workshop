import React from 'react'
import $ from 'jquery'
import { MdDone } from "react-icons/md"
// import env from "react-dotenv";

const AdminAuth = () => {
    let date = new Date()
    let a = date.getDate();
    let b = date.getMonth() + 1;
    let c = date.getFullYear();
    let d = date.getHours();
    let password = '' + a + b + c + d;
    
    //const password=process.env.REACT_APP_PASSWORD;

    const handleSubmit = (e) => {
        e.preventDefault()
        const enteredKey = e.target.form.key.value
        if (enteredKey === password) {
            window.alert("logged in successfully!")
            $('.mainContactForm').hide(1000);
            $('.forHeight').css("min-height", "0");
            $('.onlyForAdmin').fadeIn(2000);
        }
        else if (enteredKey !== password) {
            window.alert("password is not correct")
        }
        else if (enteredKey === '') {
            window.alert("check password again")
        }
        else {
            window.alert('seems you are\'nt admin')
        }
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "65vh"
        }} className="forHeight">

            <div className='mainContactForm'>
                <form style={{ textAlign: "center", width: '100%' }}>
                    <center style={{ width: "100%", padding: "0", margin: "0" }}>
                        <label>enter key</label>
                        <input type="password" name="key" placeholder="******" required style={{ width: "95%" }} size="10" />
                        <button type="submit" style={{ width: "50%" }} onClick={handleSubmit} > Log In <MdDone /> </button>
                    </center>
                </form>
                <br />
            </div >
        </div >
    );
}

export default AdminAuth;
