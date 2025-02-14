import React from "react";
import styles from './Home.module.css';
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
import ProductList from "../productList/ProductList";

function Home() {
    return (
        <div>
            <Navbar />
            <Header title="New Arrival" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing." />
            <ProductList />
        </div>
    )
}

export default Home;