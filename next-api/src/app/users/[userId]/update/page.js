"use client"

import React, { useEffect, useState } from "react";
import './../../../style.css'
import { Concert_One } from "next/font/google";

export default function Page({params}) {
    let id = React.use(params).userId;
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log("user details get called")
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        let userData = await fetch("http://localhost:3000/api/users/"+id)
        userData = await userData.json();
        setName(userData.result.name)
        setAge(userData.result.age)
        setEmail(userData.result.email)
    }

    const updateUser = async () => {
        console.log("update user called")
        let result = await fetch("http://localhost:3000/api/users/"+id,
            {
                method:"PUT",
                body:JSON.stringify({name, age, email})
            }
        )
        if (result.ok) {
            result = await result.json();
            alert("user information updated")
        }else {
            alert("please try with valid data")
        }
    }
    return(
        <div className="add-user">
            <h1>Update User Details</h1>
            <input className="input-field" type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
            <input className="input-field" type="text" value={age} placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
            <input className="input-field" type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            <button className="btn" onClick={updateUser}>Update User</button>
        </div>
    )
}