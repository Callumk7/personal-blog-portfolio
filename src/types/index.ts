export interface PostFrontmatter {
    title: string;
    date: string;
    dateObject?: Date;
    slug: string;
}

export interface Post extends PostFrontmatter {
    content: string;
}
