import React from "react";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contacts from "../../components/Contacts/Contacts";
import "./Home.scss"

const Home = () => {

    return (
        <div className="home">
            <Slider/>
            <FeaturedProducts type="Featured"/>
            <Categories />
            <Contacts />
            <FeaturedProducts type="Trending"/>

        </div>
    )
}

export default Home;