import Button from "../../components/Button";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
export default function About() {
  return (
    <section>
      {/* <Navbar /> */}
      <h1>About Page</h1>
      <Button title="Book Now" />
      <Card
        heading="About Us Card"
        description="This is the About Page card description"
        facebookLink="https://facebook.com"
      />
    </section>
  );
}
