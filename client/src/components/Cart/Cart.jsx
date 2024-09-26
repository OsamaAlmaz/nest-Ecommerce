import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Cart.scss"

const Cart = ()=> {
    const data = [
        {
            id: 1,
            img1: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
            img2: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
            title: "Long Sleeve Graphic T-shirt", 
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, eveniet error quidem quam ab aspernatur, accusantium pariatur ducimus inventore repellendus possimus voluptatibus deserunt nemo repudiandae, explicabo itaque quibusdam ea distinctio",
            isNew: true, 
            oldPrice: 19, 
            newPrice: 12
        },
        {
            id: 2,
            img1: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg",
            img2: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
            title: "White T-Shirt Long Sleeve",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, eveniet error quidem quam ab aspernatur, accusantium pariatur ducimus inventore repellendus possimus voluptatibus deserunt nemo repudiandae, explicabo itaque quibusdam ea distinctio",
            isNew: true, 
            oldPrice: 20,
            newPrice: 12
        }
    ]
    return (
        <div className="cart">
            <h1>Product in your Cart</h1>
            {data.map((item)=>(
                <div className="item">
                    <img src={item.img1} alt="" />
                    
                    <div className="details">
                        <h3>{item.title}</h3>
                        <p>{item.desc.substring(0,100)}</p>
                        <div className="price">
                            1 * {item.newPrice}
                        </div>
                        
                    </div>
                    <DeleteIcon className="delete"/>
                </div>
            ))};
            
            <div className="total">
                <span>SubTotal</span>
                <span>$123</span>
            </div>
            <button>Process to Checkout</button>
            <div className="reset">
                Reset Cart
            </div>
        </div>
    )
};
export default Cart;