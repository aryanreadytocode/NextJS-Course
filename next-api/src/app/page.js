import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", height: "100vh"}}>
      <Link href="/addproducts">Add Product</Link>
      <Link href="/getProducts">Get Product</Link>
    </div>
  );
}
