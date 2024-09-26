import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import axios from 'axios';

import Card from "../Card/Card";
import useFetch from "../../hooks/Fetch";
import Fetch from "../../hooks/Fetch";

const FeaturedProducts = ({type})=>{
    
    const {data, loading, error} = Fetch("store/category");
    

    return(
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} Product</h1>
                <p>Insert a random text</p>
            </div>
            <div className="bottom">
                {
                    data?.map(
                        (item) => (
                            <Card item={item} key={item._id} />
                        )
                    )
                };
            </div>
        </div>
    )
}

export default FeaturedProducts;