import "./HeaderGradient.module.css";

export function HeaderGradientHome() {
	return (
		<div className="fixed top-0 -z-50 mb-8 h-fit w-full">
			<div className="relative top-0 h-24 w-full overflow-hidden">
				<div className="absolute left-0 top-0 z-30 h-full w-full bg-zinc-100 bg-opacity-20 backdrop-blur-2xl"></div>
				<div className="absolute left-0 top-0 z-10 h-full w-full animate-gradient-fade bg-gradient-to-br from-primary to-secondary"></div>
				<div className="absolute left-0 top-0 z-10 h-full w-full animate-gradient-fade-reverse bg-gradient-to-t from-tertiary to-quinary"></div>
			</div>
		</div>
	);
}

export function HeaderGradientBlog() {
	return (
		<div className="fixed top-0 z-10 mb-8 h-fit w-full">
			<div className="relative top-0 h-16 w-full overflow-hidden">
				<div className="absolute left-0 top-0 z-30 h-full w-full bg-zinc-100 bg-opacity-20 backdrop-blur-2xl"></div>
				<div className="absolute left-0 top-0 z-10 h-full w-full animate-gradient-fade bg-gradient-to-br from-primary to-secondary"></div>
				<div className="absolute left-0 top-0 z-10 h-full w-full animate-gradient-fade-reverse bg-gradient-to-t from-tertiary to-quinary"></div>
			</div>
		</div>
	);
}

export function HeaderGradientBlogPost({ header }: { header: string }) {
	return (
		<div className="relative z-10 mb-8 w-full">
			<h1 className="absolute top-48 z-20  px-8 font-grotesk text-3xl font-bold text-zinc-900">
				{header}
			</h1>
			<div className="absolute top-0 z-10 h-[80vh] w-full overflow-hidden">
				<div className="absolute left-0 top-0 z-30 h-full w-full bg-zinc-100 bg-opacity-20 backdrop-blur-2xl"></div>
				<div className="absolute left-0 top-0 z-10 h-full w-full animate-gradient-fade bg-gradient-to-br from-primary to-secondary"></div>
				<div className="absolute left-0 top-0 z-10 h-full w-full animate-gradient-fade-reverse bg-gradient-to-t from-tertiary to-quinary"></div>
			</div>
		</div>
	);
}
