import React from 'react';
import './Footer.css';

const Footer = () =>{
    return(
        <div className='footer-content'>
            <p className="footer-copyright">Copyright &copy; {new Date().getFullYear()}All Rights Reserved.</p>
        </div>
    )
}

export default Footer;
