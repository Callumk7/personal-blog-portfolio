import Header from "@/components/ui/Header";

export default function ProjectsPage({children}: {children: React.ReactNode}) {
  return (
    <div className="mt-16">
      <div className="flex flex-col mb-10 items-center border border-accent p-5 md:p-28">
        <Header h={1}>Projects.</Header>
        <p className="text-center md:w-2/3">
          Browse the projects that I am currently working on.
        </p>
      </div>
      {children}
    </div>
  );
}
