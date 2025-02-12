'use client';
// import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <Heading name="John" />
//       <Heading name="Abraham" />
//       <h1>My Blog</h1>
//     </div>
//   );
// }

// export function Heading(props) {
//   return <h1>My name is {props.name}</h1>
// }

// export default function Home() {
//   const [name, setName] = useState("John");

//   const apple = () =>{
//     // return(
//       // alert("Hello next js with fruit")
//     // );
//     setName("Raj Aryan");
//   }
//   return (
//     <div className={styles.page}>
//       <h1>Event function and state {name}</h1>
//       <button onClick={apple}>Click Me</button>
//     </div>
//   )
// }


export default function Home() {
  const router = useRouter();
  const navigate = (name) => {  
    router.push(name);
  }
  return(
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '20px', gap: '10px' }}>
      <h1>Basic Routing | Make New Page</h1> 
      <Link href={"/login"}>Go to login</Link>
      <Link href={"/about"}>Go to about</Link>
      <button onClick={() => {navigate("/login")}}>Go to Login Page</button>
      <button onClick={() => {navigate("/about")}}>Go to About Page</button>
    </main>
  );
}