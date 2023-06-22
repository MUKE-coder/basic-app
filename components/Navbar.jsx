import Link from "next/link";
export default function Navbar() {
  return (
    <header>
      <Link href="/">Home</Link>
      <nav>
        <Link href="/about">About</Link>
        <Link href="#">Services</Link>
      </nav>
      <Link href="#" className="cta">
        Login
      </Link>
    </header>
  );
}
