import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {Link} from "react-router-dom"
import "./Navbar.scss"
import Cart from "../Cart/Cart";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    console.log(open)
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon/>
                    </div>
                    <div className="item">
                        <Link className="link" to ='/products'>Products</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to ='/products'>Category</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className="link" to ="/">MyStore</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className="link" to ="/">HomePage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to ="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to ="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to ="/">Stores</Link>
                    </div>
                    <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderIcon/>
                    <div className="cartIcon" onClick={()=> setOpen(!open)}>
                            <ShoppingCartIcon/>
                            <span>0</span>
                        </div> 
                    </div>

                </div>
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar;