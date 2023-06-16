import Navigation from "@/components/navbar/Navigation";
import "./globals.css";
import { figtree, inconsolata, inter, karla, space_grotesk, syne } from "@/style/fonts";
export const metadata = {
	title: "Callum - develop, design",
	description: "Building a better web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${space_grotesk.variable} ${figtree.variable} ${karla.variable} ${inconsolata.variable} ${syne.variable}`}
		>
			<body className="bg-neutral-300">
                {children}
			</body>
		</html>
	);
}
