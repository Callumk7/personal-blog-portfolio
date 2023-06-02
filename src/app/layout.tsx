import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { figtree, inter, space_grotesk } from "@/style/fonts";
import GradientNav from "@/components/gradients/GradientNav";
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
			<body className="bg-zinc-100">
				<GradientNav  />
				<div className="mt-32">{children}</div>
			</body>
		</html>
	);
}
