import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 flex h-20 flex-row items-center justify-end gap-x-4 bg-neutral-200 bg-opacity-30 backdrop-blur-lg">
            <Link href="/" className="px-3 text-neutral-900">
                Home
            </Link>
            <Link href="/blog" className="px-3">
                Blog
            </Link>
            <Link href="/projects" className="px-3">
                Projects
            </Link>
            <Link href="/pictures" className="pl-3 pr-6">
                Pictures
            </Link>
        </nav>
    );
}
