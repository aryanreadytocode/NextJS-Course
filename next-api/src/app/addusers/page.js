"use client"
import "../style.css"
import { useState } from "react";

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const addUser = async () => {
        let response = await fetch("http://localhost:3000/api/users",{
            method:"Post",
            body:JSON.stringify({name, age,email})
        })
        response = await response.json();
        console.log(response)
    }
    return (
        <div className="add-user">
            <h1>Add New User</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className="input-field" />
            <input value={age} onChange={(e) => setAge(e.target.value)} type="text" placeholder="Enter Age" className="input-field" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" className="input-field" />
            <button className="btn" onClick={addUser}>Add User</button>
        </div>
    )
}