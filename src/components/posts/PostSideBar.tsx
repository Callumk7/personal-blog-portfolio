import { Post } from "@prisma/client";

export default function PostSideBar({ posts }: { posts: Post[] }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
}
