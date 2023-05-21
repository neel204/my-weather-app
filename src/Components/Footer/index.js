import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
// import { Link } from 'react-router-dom';

import './index.css'

const Footer = () => (
    <>
    <div className='footer-container-1'>
        <div className='footer-info-container'>
            <div>
            <h1>Weather By</h1>
            <p>Stay informed and prepared with our weather website. From sunny skies to severe weather warnings, we've got you covered.</p>
            </div>
            <div>
            <a target="_blank" href="https://www.instagram.com/accounts/login/" rel="noreferrer">
                <BsInstagram/>
            </a>
            <a target="_blank" href='https://www.facebook.com/login/' rel="noreferrer">
                <BsFacebook/>
            </a>
            <a target="_blank" href='https://twitter.com/login?lang=en' rel="noreferrer">
                <BsTwitter/>
            </a>
            </div>
        </div>
        <div>
            <h1>About Us</h1>
            <p>Who am I?</p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Help</p>
        </div>
        <div>
            <h1>FeedBack</h1>
            <p>About API</p>
            <p>Features</p>
            <p>Bugs</p>
        </div>
    </div>
    <div className='footer-container-2'>
        <BiCopyright className=''/>
        <p>CopyRight WeatherBy. Api by M3o.com</p>
    </div>
    </>
)

export default Footer