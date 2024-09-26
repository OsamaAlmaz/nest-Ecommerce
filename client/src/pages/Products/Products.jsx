import {React, useState} from "react";
import List from "../../components/List/List";
import {useParams} from "react-router-dom"; 
import "./Products.scss";
const Products = () => {
    
    const params = useParams()
    const catId = parseInt(useParams.id);
    const [maxPrice, setmaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    return (
        <div className="products">
            <div className="left">
                <div className="filteritem">
                    <h2>Product Categories</h2>
                    <div className="inputItems">
                        <input type="checkbox" id="1" value={1}/>
                        <label htmlFor="1">Mixed Nuts</label>
                    </div>
                    <div className="inputItems">
                        <input type="checkbox" id="2" value={2}/>
                        <label htmlFor="2">Coffe</label>
                    </div>
                    <div className="inputItems">
                        <input type="checkbox" id="3" value={3}/>
                        <label htmlFor="3">Another Category</label>
                    </div>

                </div>
                <div className="filteritem">
                    <h2>Filter by Price</h2>
                    <span>0</span>
                    <input type="range" min={0} max={1000} onChange={(e)=> setmaxPrice(e.target.value)} />
                    <span>{maxPrice}</span>
                </div>
                <div className="filteritem">
                    <h2>Sort by</h2>
                    <div className="inputItems">
                        <input type="radio" id="desc" value="desc" name="price" onChange={e=> setSort("desc")}/>
                        <label htmlFor="desc">Price (Lowest to Highest) </label>
                    </div>
                    <div className="inputItems">
                        <input type="radio" id="asc" value="asc" name="price" onChange={e=> setSort("asc")}/>
                        <label htmlFor="desc">Price (Highest to Lowest) </label>
                    </div>

                </div>
            </div>
            <div className="right">
                <img 
                className="catImg" 
                src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg" 
                alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>

        </div>
    )
}

export default Products;