import React from "react";
import "./Footer.scss"
const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Products</span>
                    <span>NewArrival</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>This is a random Text</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Random text</span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="logo">MyStore</div>
                    <div className="copyright">@ Copyright 2024. All right reserved</div>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;