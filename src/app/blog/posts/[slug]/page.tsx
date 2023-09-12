import ReactMarkdown from "react-markdown";
import PostSideBar from "@/components/posts/PostSideBar";
import { Post } from "@prisma/client";
import Tag from "@/components/ui/Tag";
import { prisma } from "@/lib/clients/prisma";

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
    <div className="mt-80">
      <div className="mb-10 border border-accent p-6">
        <div>
          <Tag category={post.category} bg={post.category.color} />
          <span className="font-mono text-muted">
            {post.createdAt.toDateString().toUpperCase()}
          </span>
        </div>
        <h1 className="mt-5 pb-10 font-syne text-3xl font-bold md:text-4xl lg:text-title lg:leading-[5rem]">
          {post.title}
        </h1>
      </div>
      <div className="grid-cols-8 lg:grid">
        <ReactMarkdown className="prose prose-slate dark:prose-invert col-span-5 mb-10 max-w-4xl border-l border-t border-accent pl-6 pt-6 prose-headings:font-syne">
          {post.content}
        </ReactMarkdown>
        <PostSideBar
          posts={relatedPosts}
          className="sticky top-1/3 col-span-3 h-fit px-5 py-4 lg:ml-8"
        />
      </div>
    </div>
  );
}
