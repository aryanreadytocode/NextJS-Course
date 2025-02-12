import './about.css';
import Link from "next/link";


export default function AboutLayout({children}) {
    return (
        <div>
           <ul className='login-menu'>
            <li>
                <h4>About Menu</h4>
            </li>
            <li>
                <Link href="/about">About Main</Link>
            </li>
            <li>
                <Link href="/about/aboutcollege">About College</Link>
            </li>
            <li>
                <Link href="/about/aboutstudent">About Student</Link>
            </li>
           </ul>
            {children}
        </div>
    );  
}