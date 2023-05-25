import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
// import { Link } from 'react-router-dom';

import './index.css'

const Footer = () => (
    <>
    <div className='footer-container-1'>
        <div className='footer-info-container'>
            <div className='f-container-1'>
            <h1 className='footer-1-heading'>Weather By</h1>
            <p className='footer-1-para'>Stay informed and prepared with our weather website. From sunny skies to severe weather warnings, we've got you covered.</p>
            </div>
            <div className='social-icons'>
            <a className='each-icon' target="_blank" href="https://www.instagram.com/accounts/login/" rel="noreferrer">
                <BsInstagram/>
            </a>
            <a className='each-icon' target="_blank" href='https://www.facebook.com/login/' rel="noreferrer">
                <BsFacebook/>
            </a>
            <a className='each-icon' target="_blank" href='https://twitter.com/login?lang=en' rel="noreferrer">
                <BsTwitter/>
            </a>
            </div>
        </div>
        <div className='f-container-2'>
            <h1 className='footer-1-heading'>About Us</h1>
            <p className='footer-1-para'>Contact Us</p>
            <p className='footer-1-para'>Who am I?</p>
            <p className='footer-1-para'>FAQ</p>
            <p className='footer-1-para'>Help</p>
        </div>
        <div className='f-container-3'>
            <h1 className='footer-1-heading'>FeedBack</h1>
            <p className='footer-1-para'>About API</p>
            <p className='footer-1-para'>Features</p>
            <p className='footer-1-para'>Bugs</p>
        </div>
    </div>
    <div className='footer-container-2'>
        <BiCopyright className='copy-icon'/>
        <p className='footer-2-para'>CopyRight WeatherBy. Api by M3o.com</p>
    </div>
    </>
)

export default Footer