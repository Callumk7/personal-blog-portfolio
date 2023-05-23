import PostSidebar from "@/components/PostSidebar";
import { getRecentPostFrontmatter } from "@/util/getBlogData";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    const posts = getRecentPostFrontmatter(3);

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <PostSidebar posts={posts} />
            </div>
            <div className="col-span-3">{children}</div>
        </div>
    );
}
