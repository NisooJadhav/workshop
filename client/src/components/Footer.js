import React from 'react';
// import { FaReact } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';
import { DiGitBranch } from 'react-icons/di';

const Footer = () => {
    return (
        <div>
            <footer>
                <nav className="footer-nav">
                    {/* created by&nbsp; */}

                    <a href="https://nisootech.vercel.app" target="_blank">
                        <img src="./images/nisoo.jpg" />
                    </a>

                    {/* using&nbsp; */}
                    {/* <SiMongodb /><SiExpress /><FaReact /><SiNodedotjs /> */}

                    <a href="https://github.com/NisooJadhav/workshop" target="_blank" style={{ fontSize: "2.5rem", color: "#eee", padding: "0", margin: "0" }}>&nbsp;<DiGitBranch /></a>

                </nav>
            </footer>
        </div >
    );
}

export default Footer;
