export interface PostFrontmatter {
    title: string;
    date: string;
    slug: string;
}

export interface Post extends PostFrontmatter {
    content: string;
}
