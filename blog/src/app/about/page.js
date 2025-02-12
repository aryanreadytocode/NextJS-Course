"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
    const router = useRouter();
  return (
    <div>
      <h1 className="heading">About Page</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '20px', gap: '10px' }}>
        <button onClick={() => {router.push("/");}}>Go to Home Page</button>
        <Link href={"/about/aboutcollege"}>Go to College Page</Link>
        <Link href={"/about/aboutstudent"}>Go to Student Page</Link>
      </div>
    </div>
  );
}
