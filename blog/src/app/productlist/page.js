"use client";
import { useState, useEffect } from "react";    
export default function Page() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            setProducts(data.products);
            console.log(data.products);
        };
        fetchData();
    }, [])
    return(
        <div>
            <h1>Product List:</h1>
            <ol style={{paddingLeft: "40px"}}>
                {products.map((product, index) => (
                    <li key={index}>Name: {product.title}, Price: {product.price}</li>
                ))}
            </ol>
        </div>
    );
}