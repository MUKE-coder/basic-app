import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="left">
        <h1 className="intro-text">
          Hello, I’m JB, a Fullstack Dev With 3 years of experience.
        </h1>
        <p className="description">
          I care a lot about using design for positive impact. and enjoy
          creating user-centric, delightful, and human experiences.
        </p>
        <div className="social-links">
          <SocialLinks />
        </div>
      </div>
      <div className="right"></div>
    </section>
  );
}
