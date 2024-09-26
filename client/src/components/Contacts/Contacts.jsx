import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "./Contacts.scss";


const Contacts = () => {
    return (
        <div className="contacts">
        <div className="wrapper">
            <span>BE IN TOUCH WITH US</span>
            <div className="mail">
                <input type="text" placeholder="Enter your email..." />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
                <XIcon/>
                <GoogleIcon/>
                <PinterestIcon/>
            </div>
        </div>
    </div>
    )

}

export default Contacts;