export interface PostFrontmatter {
    title: string;
    slug: string;
    coverImage?: string;
    tags?: string[];
    date: string;
    dateObject?: Date;
    category: string;
}

export interface Post extends PostFrontmatter {
    content: string;
}
