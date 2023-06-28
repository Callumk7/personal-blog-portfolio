"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "@/../public/github.svg";
import twitterIcon from "@/../public/twitter.svg";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const items = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Projects", link: "/projects" },
  ];

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-dune-900 bg-background-light bg-opacity-20 px-4 py-4 backdrop-blur-lg">
      <nav className="mx-auto flex w-4/5 items-center justify-between gap-x-6">
        <ul className="hidden justify-between gap-x-6 md:flex">
          {items.map((item) => {
            if (pathname === item.link) {
              return (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="px-3 font-bold text-primary transition ease-in-out  hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-dark px-3 transition ease-in-out  hover:text-primary"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <Disclosure as="nav" className="md:hidden">
          <Disclosure.Button className="text-dark px-3 hover:text-primary">
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
                  className="text-dark px-3 transition ease-in-out  hover:text-primary"
                >
                  {item.name}
                </Link>
              );
            })}
          </Disclosure.Panel>
        </Disclosure>
        <div className="flex gap-x-6">
          <a href="https://github.com/Callumk7">
            <Image src={githubIcon} width={32} height={32} alt="Github icon"></Image>
          </a>
          <a href="https://twitter.com/Calk7">
            <Image src={twitterIcon} width={32} height={32} alt="Twitter icon"></Image>
          </a>
        </div>
      </nav>
    </header>
  );
}
