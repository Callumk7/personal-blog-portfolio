import PostSidebar from "@/components/PostSidebar";
import { getRecentPostFrontmatter } from "@/util/getBlogData";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <div className="mx-auto max-w-6xl">{children}</div>;
}
