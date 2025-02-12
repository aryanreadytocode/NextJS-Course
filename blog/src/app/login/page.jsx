"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import './login.css';

export default function Login() {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name);
    };

    return (
        <div>
            <h1 className="heading">Login Page</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '20px', gap: '10px' }}>
                <Link href={"/"}>Go to home</Link>
                <button onClick={() => { navigate("/login/studentlogin") }}>Go to Student Login Page</button>
                <button onClick={() => { navigate("/login/collegelogin") }}>Go to College Login Page</button>
            </div>
        </div>
    );
}