import React from "react";
import { FaDribbble, FaTwitter } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
export default function SocialLinks() {
  return (
    <div className="socials">
      <a href="#" className="contact-link">
        Contact me
      </a>
      <a href="#" className="dribble">
        <FaDribbble className="icon " />
      </a>
      <a href="#" className="instagram">
        <BsInstagram className="icon " />
      </a>
      <a href="#" className="twitter">
        <FaTwitter className="icon " />
      </a>
      <a href="#" className="linkedin">
        <BsLinkedin className="icon " />
      </a>
    </div>
  );
}
