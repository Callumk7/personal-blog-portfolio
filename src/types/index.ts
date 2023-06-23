export interface PostFrontmatter {
  title: string;
  slug: string;
  date: string;
  dateObject: Date;
  coverImage: string;
  description: string;
  category: string;
}

export interface Post extends PostFrontmatter {
  content: string;
}

export interface Upload {
  title: string;
  date: string;
  coverImage: string;
  description: string;
  content: string;
  category: string;
}
