import React from "react";
import "./List.scss";
import Card from "../Card/Card";
const List = () => {
    const data = [
        {
            id: 1,
            img1: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
            img2: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
            title: "Long Sleeve Graphic T-shirt", 
            isNew: true, 
            oldPrice: 19, 
            newPrice: 12
        },
        {
            id: 2,
            img1: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg",
            img2: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
            title: "White T-Shirt Long Sleeve",
            isNew: true, 
            oldPrice: 20,
            newPrice: 12
        },
        {
            id: 3,
            img1: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg",
            title: "White T-Shirt Long Sleeve",
            isNew: true, 
            oldPrice: 20,
            newPrice: 12
        },
        {
            id: 4,
            img1: "https://images.pexels.com/photos/86757/substances-colorful-color-pattern-86757.jpeg",
            title: "White T-Shirt Long Sleeve",
            isNew: true, 
            oldPrice: 20,
            newPrice: 12
        },
        {
            id: 5,
            img1: "https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg",
            title: "White T-Shirt Long Sleeve",
            isNew: true, 
            oldPrice: 20,
            newPrice: 12
        },
    ]

    return (
        <div className="list">
            {data.map(
                item => (
                    <Card item={item} key={item.id}/>
                )
            )}
        </div>
    )
};
export default List;
