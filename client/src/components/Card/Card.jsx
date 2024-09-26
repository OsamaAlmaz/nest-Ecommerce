import React from "react";
import "./Card.scss";
import {Link} from "react-router-dom";

const Card = ({item})=>{
    return(
        <Link className="link" to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.isNew && <span>New Season</span>}
                    <img src={item.img1} alt="" />
                    <img src={item.img2} alt="" />
                    <h2>{item.title}</h2>
                    <div className="prices">
                        <h3>${item.oldPrice}</h3>
                        <h3>${item.newPrice}</h3>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default Card
