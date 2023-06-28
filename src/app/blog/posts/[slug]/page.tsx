import ReactMarkdown from "react-markdown";
import prisma from "@/db/client";
import PostSideBar from "@/components/posts/PostSideBar";
import { Post } from "@prisma/client";
import ScrollProgress from "@/components/ui/ScrollProgress";

// generate routes at build time
export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: {
      slug: true,
    },
  });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      category: true,
    },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  const relatedPosts: Post[] = await prisma.post.findMany({
    where: {
      categoryId: post.categoryId,
    },
  });

  return (
    <>
      <ScrollProgress></ScrollProgress>
      <div className="mt-80 grid grid-cols-8">
        <div className="col-span-8 pr-10">
          <span className="rounded-md border border-zinc-600 p-1 text-xs text-zinc-600">
            {post.category.name}
          </span>
          <h1 className="mt-5 pb-10 font-syne text-3xl font-bold md:text-4xl lg:text-title lg:leading-[8rem]">
            {post.title}
          </h1>
        </div>
        <div className="col-span-6 pr-10">
          <ReactMarkdown className="prose prose-neutral max-w-4xl prose-headings:font-syne">
            {post.content}
          </ReactMarkdown>
        </div>
        <div className="relative top-1/3 col-span-2 h-fit border">
          <PostSideBar posts={relatedPosts} />
        </div>
      </div>
    </>
  );
}
