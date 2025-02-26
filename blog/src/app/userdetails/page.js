'use client'
import Script from "next/script";

export default function Page() {
  return (
    <div>
      <h1>Get user getLocation</h1>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />
    </div>
  );
}
