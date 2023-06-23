import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <a href="#" className="logo">
        <div className="dot"></div>
        <span>JB</span>
      </a>
      <nav>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}
