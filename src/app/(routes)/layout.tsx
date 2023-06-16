import Navigation from "@/components/navbar/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navigation />
			{children}
		</>
	);
}
