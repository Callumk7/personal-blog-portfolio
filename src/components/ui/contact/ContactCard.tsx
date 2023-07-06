import { Social } from "@/types";
import Image from "next/image";

export default function ContactCard({ social }: { social: Social }) {
  return (
    <div>
      <div>
        <h1>{social.name}</h1>
        <a href={social.link}>{social.link}</a>
        <Image src={social.icon} alt={social.name} width={32} height={32} />
      </div>
    </div>
  );
}
