import { getAllPostFrontmatter, getPostData } from "@/util/getBlogData";
import ReactMarkdown from "react-markdown";

// generate routes at build time
export async function generateStaticParams() {
    const posts = getAllPostFrontmatter();

    return posts.map((post) => {
        return {
            slug: post.slug,
        };
    });
}

export default function BlogPage({ params }: { params: { slug: string } }) {
    const post = getPostData(params.slug);

    return (
        <div>
            <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
        </div>
    );
}
