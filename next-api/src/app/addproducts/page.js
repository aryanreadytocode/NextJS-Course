"use client"
import "../style.css"
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [company, setCompany] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");

    const addUser = async () => {
        let response = await fetch("http://localhost:3000/api/products",{
            method:"Post",
            body:JSON.stringify({name, price,company, color, category})
        })
        response = await response.json();
        console.log(response)
    }
    return (
        <div className="add-user">
            <h1>Add New Products</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className="input-field" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Enter Pirce" className="input-field" />
            <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Enter Company" className="input-field" />
            <input value={color} onChange={(e) => setColor(e.target.value)} type="text" placeholder="Enter color" className="input-field" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter category" className="input-field" />

            <button className="btn" onClick={addUser}>Add Product</button>
        </div>
    )
}