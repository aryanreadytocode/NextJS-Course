"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== "/login/collegelogin" ? (
        <ul className="login-menu">
          <li>
            <h4>Login Menu</h4>
          </li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/studentlogin">Student Login</Link>
          </li>
          <li>
            <Link href="/login/collegelogin">Teacher Login</Link>
          </li>
        </ul>
      ) : null}
      {children}
    </div>
  );
}
