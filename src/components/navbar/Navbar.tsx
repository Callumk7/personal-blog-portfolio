"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
    const items = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Blog", link: "/blog" },
        { name: "Projects", link: "/projects" },
        { name: "Pictures", link: "/pictures" },
    ];

    return (
        <header className="sticky top-0 z-20 mb-10 bg-neutral-200 bg-opacity-30 py-8 backdrop-blur-lg">
            <nav className="flex items-center justify-between gap-x-6">
                <ul className="hidden justify-between gap-x-6 lg:flex">
                    {items.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.link}
                                className="px-3 text-neutral-900 hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Disclosure as="nav" className="lg:hidden">
                    <Disclosure.Button className="px-3 text-neutral-900 hover:text-primary">
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
                        {items.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className="px-3 text-neutral-900 hover:text-primary"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </Disclosure.Panel>
                </Disclosure>
                <div className="flex gap-x-6">
                    <div className="px-3 hover:text-primary">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <a href="https://github.com/Callumk7">
                                <path
                                    fill="currentColor"
                                    d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.563 4.938c.363.312.676.912.676 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
                                />
                            </a>
                        </svg>
                    </div>
                    <div className="pl-3 pr-6 hover:text-primary">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <a href="https://twitter.com/Callumk7">
                                <path
                                    fill="currentColor"
                                    d="M22.212 5.656a8.384 8.384 0 0 1-2.401.658A4.195 4.195 0 0 0 21.649 4c-.82.488-1.719.83-2.655 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.621-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.739 2.731 1.86 3.481a4.169 4.169 0 0 1-1.894-.523v.051a4.185 4.185 0 0 0 3.355 4.102a4.205 4.205 0 0 1-1.89.072A4.185 4.185 0 0 0 8.02 16.65a8.394 8.394 0 0 1-6.192 1.732a11.831 11.831 0 0 0 6.41 1.88c7.694 0 11.9-6.373 11.9-11.9c0-.18-.004-.362-.012-.541a8.497 8.497 0 0 0 2.086-2.164Z"
                                />
                            </a>
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
    );
}
