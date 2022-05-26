import * as React from 'react';
import '../styles/home.css';
import { FaLinkedin }  from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
    return (
        <div id="footer">
            <div className="top-footer">
                <div className="social-media">
                    <p className="text">CONTACT</p>
                    <a href= "mailto:annacheng09@hotmail.com">
                        <MdEmail className="contact-icon"/>
                    </a> 
                    <a href="https://github.com/ycheng2021" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare className="contact-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/yang-cheng-b4b090229/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="contact-icon"/>
                    </a>
                    <a href="https://www.facebook.com/anna.cheng.5815" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className="contact-icon"/>
                    </a>
                </div>
            </div>
            <div className="bottom-footer">
                <p className="text note">
                    Designed and built by Anna Cheng
                </p>
            </div>
           
        </div>
    )
}

export default Footer;