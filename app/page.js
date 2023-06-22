import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/Button";
import Card from "../components/Card";
import poster from "../public/images/poster.png";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <section>
      {/* <Navbar /> */}
      <h1>Home Page</h1>
      <Button title="Click" />
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
    </section>
  );
}
