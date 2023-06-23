import Image from "next/image";
export default function ProjectCard({ link, src }) {
  return (
    <a href={link} className="project-card">
      <Image src={src} fill alt="" />
    </a>
  );
}
