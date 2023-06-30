import TagFilter from "@/components/tag-filter/TagFilter";
import { Category } from "@/types";
import { getAllCategories } from "@/util";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const categories: Category[] = await getAllCategories();
  return (
    <div>
      <TagFilter categories={categories} />
      {children}
    </div>
  );
}
