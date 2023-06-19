import Navigation from "@/components/navbar/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navigation />
			<div className="mt-10">{children}</div>
		</>
	);
}
