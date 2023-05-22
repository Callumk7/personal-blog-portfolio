import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { inter, space_grotesk } from "@/style/fonts";
export const metadata = {
    title: "Callum - develop, design",
    description: "Building a better web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${space_grotesk.variable}`}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
