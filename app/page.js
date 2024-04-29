"use client";

export default function Home() {

  async function handleApiCall() {
    const res = await fetch('/api/akash');
    const data = await res.json();
    console.log(data);
  }

  return (
    <div onClick={handleApiCall} >Akash</div>
  );
}
