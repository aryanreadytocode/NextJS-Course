'use client';

import Link from "next/link";

export default function Home() {
  return(
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '20px', gap: '10px' }}>
      <h1>Fetch Data with API in client Component</h1>
      <Link href={"/productlist"}>Go to Product List</Link>
    </main>
  );
}