"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "@/../public/github.svg";
import twitterIcon from "@/../public/twitter.svg";

export default function Navigation() {
	const items = [
		{ name: "Home", link: "/" },
		{ name: "Blog", link: "/blog" },
	];

	return (
		<header className="sticky top-0 z-30 w-full border-b-2 border-black bg-neutral-400 bg-opacity-10 px-4 py-4 backdrop-blur-xl">
			<nav className="flex items-center justify-between gap-x-6">
				<ul className="hidden justify-between gap-x-6 md:flex">
					{items.map((item) => (
						<li key={item.name}>
							<Link
								href={item.link}
								className="hover:text-quinary px-3 text-zinc-900 transition  ease-in-out"
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>

				<Disclosure as="nav" className="md:hidden">
					<Disclosure.Button className="px-3 text-zinc-900 hover:text-primary">
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
								className="px-3 text-zinc-900 hover:text-primary"
							>
								{item.name}
							</Link>
						))}
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
