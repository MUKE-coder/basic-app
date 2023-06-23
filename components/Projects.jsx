import React from "react";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  const projects = [
    {
      link: "#",
      image:
        "https://www.aboghanbari.com/static/7882771b4b67e01db2255e01b71d6a5b/180f3/Crypto.webp",
    },
    {
      link: "#",
      image:
        "https://www.aboghanbari.com/static/a89fe8a4ad332d942da74da90f09fb8f/180f3/Flop.webp",
    },
    {
      link: "#",
      image:
        "https://www.aboghanbari.com/static/51307f12012e74fb2b28b5c4456f6569/180f3/Lendscape.webp",
    },
    {
      link: "#",
      image:
        "https://www.aboghanbari.com/static/7882771b4b67e01db2255e01b71d6a5b/180f3/Crypto.webp",
    },
    {
      link: "#",
      image:
        "https://www.aboghanbari.com/static/7882771b4b67e01db2255e01b71d6a5b/180f3/Crypto.webp",
    },
    {
      link: "#",
      image:
        "https://www.aboghanbari.com/static/7882771b4b67e01db2255e01b71d6a5b/180f3/Crypto.webp",
    },
  ];

  return (
    <div className="projects">
      {projects.map((project, i) => {
        return <ProjectCard key={i} link={project.link} src={project.image} />;
      })}
    </div>
  );
}
