import PostSidebar from "@/components/PostSidebar";
import { getRecentPostFrontmatter } from "@/util/getBlogData";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-1">
                <PostSidebar posts={getRecentPostFrontmatter(3)} />
            </div>
            <div className="col-span-2 justify-items-center">{children}</div>
        </div>
    );
}
