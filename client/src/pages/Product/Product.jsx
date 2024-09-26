import React, { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import "./Product.scss";

const Product = () => {
    const [selectedImage, setselectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const images = [
        "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg",
        "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
        
    ]
    
    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e=> setselectedImage(0) }/>
                    <img src={images[1]} alt="" onClick={e=> setselectedImage(1)}/>
                </div>
                <div className="mainImage">
                    <img src={images[selectedImage]} alt="" />
                </div>
            </div>
            <div className="right">
                <h2>Title</h2>
                <span className="price">$199</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam esse ex magnam pariatur hic, impedit odio illo perspiciatis laborum iusto consequuntur perferendis qui, nulla nemo dolorum dolores aliquid commodi ut.</p>
                <div className="quantity">
                    <button onClick={()=> setQuantity((prev) => (prev === 1? 1: prev - 1))}>-</button>
                    <span>{quantity}</span>
                    <button
                    onClick={() => setQuantity((prev)=> (prev + 1))}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon /> ADD TO WHISHLIST
                    </div>
                    <div className="item">
                        <BalanceIcon/> ADD TO COMPARE
                    </div>
                </div>
                <div className="info">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-shirt</span>
                    <span>Tag: T-Shirt, Wommen, Top</span>
                </div>
                <div className="details">
                    <span>Description</span>
                    <hr/>
                    <span>Additional Information</span>
                    <hr/>
                    <span>FAQ</span>
                </div>

            </div>

        </div>
    )
}

export default Product;