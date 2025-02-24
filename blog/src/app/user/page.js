'use client'
import { useState } from "react";

export default function User() {
    const [style, setStyle] = useState({backgroundColor: 'green'})
    return (
        <div>
            <h1 style={{background:"grey"}}>User Page</h1>
            <h2 style={style}>this is header 2 Page</h2>
            <button onClick={() => {setStyle({backgroundColor:'violet'})}}>
                change color
            </button>
        </div>
    );
}