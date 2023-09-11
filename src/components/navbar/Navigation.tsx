"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { Button } from "../ui/Button";
import NavLink from "../ui/Link";
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from "../ui/Popover";
import { ContactForm } from "../contact-dropdown/Form";

export default function Navigation() {
  const items = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
  ];

  const pathname = usePathname();

  return (
    <header className="sticky left-0 top-0 z-30 w-screen border-b border-slate-400 bg-background-light bg-opacity-10 py-4 backdrop-blur-md">
      <Container intent={"single"}>
        <nav className="flex place-items-center justify-between">
          <ul className="hidden space-x-14 md:flex">
            {items.map((item) => {
              if (pathname === item.link) {
                return (
                  <li key={item.name}>
                    <NavLink href={item.link}>{item.name}</NavLink>
                  </li>
                );
              }
              return (
                <li key={item.name}>
                  <NavLink href={item.link} variant={{ state: "inactive" }}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <Disclosure as="nav" className="md:hidden">
            <Disclosure.Button className="px-3 text-dark hover:text-primary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z"
                />
              </svg>
            </Disclosure.Button>
            <Disclosure.Panel className="flex flex-col gap-y-2">
              {items.map((item) => {
                if (pathname === item.link) {
                  return (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="px-3 font-bold text-primary transition ease-in-out  hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="px-3 text-dark transition ease-in-out  hover:text-primary"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </Disclosure.Panel>
          </Disclosure>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={{ intent: "primary" }}
                className="self-start md:self-center"
              >
                Contact
              </Button>
            </PopoverTrigger>
            <PopoverContent sideOffset={24}>
              <ContactForm />
            </PopoverContent>
          </Popover>
        </nav>
      </Container>
    </header>
  );
}
