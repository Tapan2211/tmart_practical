import React, { useEffect, useState } from "react";
import styles from './Product.module.css';
import Card from "../card/Card";
import data from '../../data/projects.json';

function ProductList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, [])
    return (
        <div className={styles.main}>
            {
                items.map((item) => (
                    <Card key={item.name} send={item} />
                ))
            }
        </div>
    )
}

export default ProductList;