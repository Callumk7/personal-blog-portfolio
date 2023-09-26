import { ContactForm } from "@/components/contact-dropdown/Form";
import { WeatherSmall } from "@/components/contact-dropdown/weather/WeatherSmall";
import PostCardView from "@/components/posts/PostCardView";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectView } from "@/components/projects/ProjectView";
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
          based in London.{" ("}
          <WeatherSmall />{")"}
        </Header>
      </section>
      <section className="relative block h-[80vh]">
        <Header className="px-2" h={1}>
          Projects
        </Header>
        <ProjectView projects={projects} />
      </section>
      <section className="relative block h-[80vh] min-h-fit">
        <Header className="px-2" h={1}>
          Recent Posts
        </Header>
        <PostCardView posts={recentPosts} />
      </section>
      <section className="relative top-64 block h-[80vh]">
        <Header className="px-2" h={1}>
          About Me
        </Header>
      </section>
      <section className="relative top-44 block h-[80vh]">
        <Header className="px-2" h={1}>
          Contact
        </Header>
        <ContactForm />
      </section>
    </div>
  );
}
