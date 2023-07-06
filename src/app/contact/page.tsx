import { Social } from "@/types";
import githubIcon from "@/public/github.svg";
import ContactCard from "@/components/ui/contact/ContactCard";

const socials: Social[] = [
  {
    name: "Github",
    link: "https://github.com/Callumk7",
    icon: githubIcon,
  },
];

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      {socials.map((social, index) => (
        <ContactCard key={index} social={social} />
      ))}
    </div>
  );
}
