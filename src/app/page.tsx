"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("../../public/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("network response working")
      }
      return response.json();
    })
    .then((jsonData) => setData(jsonData))
    .catch((error) => console.error("error fetching data: ", error))
  }, [])

  return (
    <div>
      <h1>Data from JSON: </h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
