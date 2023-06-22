import { PostFrontmatter } from "@/types";
import CoverPostCard from "./CoverPostCard";
import PostCard from "./PostCard";

export default function PostView({ posts }: { posts: PostFrontmatter[] }) {
	const coverPost = posts.shift()!;
	return (
		<div>
            <div className="mb-4">
                <CoverPostCard post={coverPost} />
            </div>
			<div className="grid grid-cols-1 justify-items-stretch gap-x-5 gap-y-5 lg:grid-cols-2">
				{posts.map((post) => (
					<PostCard key={post.slug} post={post} />
				))}
			</div>
		</div>
	);
}
