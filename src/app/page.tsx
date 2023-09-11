import { ContactForm } from "@/components/contact-dropdown/Form";
import PostCardView from "@/components/posts/PostCardView";
import { ProjectCard } from "@/components/projects/ProjectCard";
import Header from "@/components/ui/Header";
import { getAllProjectsWithCategory, getRecentPosts } from "@/util";

export default async function Home() {
  const projects = await getAllProjectsWithCategory();
  const recentPosts = await getRecentPosts(4);

  return (
    <div className="relative">
      <section className="relative block h-[80vh]">
        <Header className="absolute top-1/4 border-primary" h={1}>
          Hi, I am Callum, A{" "}
          <span className="underline decoration-primary underline-offset-2">
            Digital Product Designer
          </span>{" "}
          and{" "}
          <span className="underline decoration-primary underline-offset-2">
            Web Developer
          </span>{" "}
          based in London.
        </Header>
      </section>
      <section className="relative block h-[80vh]">
        <Header className="px-2" h={1}>
          Projects
        </Header>
        <div className="grid grid-cols-1 justify-items-stretch lg:grid-cols-2 lg:gap-x-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
      <section className="relative block min-h-fit h-[80vh]">
        <Header className="px-2" h={1}>
          Recent Posts
        </Header>
        <PostCardView posts={recentPosts} />
      </section>
      <section className="relative top-36 block h-[80vh]">
        <Header className="px-2" h={1}>
          About Me
        </Header>
      </section>
      <section className="relative top-36 block h-[80vh]">
        <Header className="px-2" h={1}>
          Contact
        </Header>
        <ContactForm />
      </section>
    </div>
  );
}
