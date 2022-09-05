import React from 'react';
import { MdSend } from 'react-icons/md'
import FormSubmit from './FormSubmit';
//import './form-submission-handler'
import RandomImage from './RandomImage';

export default function Contact() {

    return (
        <div>
            <RandomImage />
            <FormSubmit />

            <h1 className='main-head'>Contact Us</h1>

            <div className='mainContactForm'>
                <form className="gform" method="POST" data-email="nishantvedjadhav@gmail.com" action="https://script.google.com/macros/s/AKfycbye86W056T_xBWeIquC5sdX5zF_0c9uiMZUEE2Qf9gN_2vMg0SPNDq5eLVZplBLbcw_4A/exec" >
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
                            <input type="tel" size="10" pattern="^[0-9]{10}$" name="mobile" title="mobile" placeholder="Phone" style={{ width: "90%" }} required maxLength="10" spellCheck="false"/>
                            <br />
                            <br />

                            <label>enter address:</label>
                            <br />
                            <input type="text" size="30" name="address" placeholder="Address" style={{ width: "90%" }} spellCheck="false"/>
                            <br />
                            <br />
                        </center>
                    </div>
                    <div>
                        <label>enter message:</label>
                        <br />
                        <textarea cols="31" rows="5" name="message"
                            placeholder="Message" style={{ width: "90%" }} required spellCheck="false">
                        </textarea>
                    </div>
                    <div>
                        <button id="submit" value="Submit" style={{ width: "50%" }}><div>Send&nbsp;&nbsp; <MdSend />&nbsp;</div>
                        </button>
                        <div style={{ display: "none" }} className="thankyou_message">
                            <h2><em>Thanks</em> for contacting us! We will get back to you soon!
                            </h2>
                        </div>
                    </div>
                </form>
            </div >
            <br />
            <br />
            <br />
        </div>
    );
}
