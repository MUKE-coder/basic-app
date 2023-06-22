"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/Button";
import Card from "../components/Card";
import poster from "../public/images/poster.png";
import Navbar from "../components/Navbar";
import { useState } from "react";
export default function Home() {
  const [isOrphan, setIsOrphan] = useState(false);
  const [shapeClass, setShapeClass] = useState("");
  function changeState() {
    setIsOrphan(true);
    console.log(isOrphan);
  }
  function changeTorec() {
    setShapeClass("rectangle");
  }
  console.log(isOrphan);
  return (
    <section>
      {/* <Navbar /> */}
      <h1>Home Page</h1>
      <div
        className={shapeClass == "rectangle" ? "shape rectangle" : "shape"}
      ></div>
      <button onClick={changeTorec}>
        {shapeClass === "rectangle"
          ? "Change to Square"
          : "Convert to Rectangle"}
      </button>
      {/* <Button title="Click" /> */}
      <Card
        heading="Booking card"
        description="This is the Home Page card description"
        facebookLink="https://facebook.com"
      />
      {/* <img src="images/poster.png" alt="This a poster Image" /> */}
      {/* <Image
        src="/images/poster.png"
        alt="This is a poster"
        width="600"
        height="600"
      /> */}
      <div className="home-image">
        <Image src={poster} alt="This is a poster" fill className="poster" />
      </div>
      {isOrphan ? (
        <button>Apply for Scholarship</button>
      ) : (
        <button onClick={changeState}>Become an Orphan</button>
      )}
    </section>
  );
}
