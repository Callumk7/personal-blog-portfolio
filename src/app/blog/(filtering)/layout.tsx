import TagFilter from "@/components/tag-filter/TagFilter";
import { Category } from "@/types";
import { getAllCategories } from "@/util";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const categories: Category[] = await getAllCategories();
  return (
    <div className="mt-16">
      <TagFilter categories={categories} />
      {children}
    </div>
  );
}
