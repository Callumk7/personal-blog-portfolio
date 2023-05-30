import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { figtree, inter, space_grotesk } from "@/style/fonts";
export const metadata = {
    title: "Callum - develop, design",
    description: "Building a better web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${space_grotesk.variable} ${figtree.variable}`}
        >
            <body>
                <Navbar />
                {children}
                <div className="fixed top-0 -z-10 h-full w-full bg-gray-50 bg-opacity-50 backdrop-blur-lg"></div>
                <div className="fixed inset-0 -z-30 scale-[3] transform">
                    <div className="absolute inset-0 animate-background-gradient bg-gradient-to-b from-primary to-white"></div>
                </div>
            </body>
        </html>
    );
}
