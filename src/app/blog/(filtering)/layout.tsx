import TagFilter from "@/components/tag-filter/TagFilter";
import { Category } from "@/types";
import { getAllCategories } from "@/util";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const categories: Category[] = await getAllCategories();
  return (
    <div className="mb-24 px-8 md:w-2/3 lg:w-3/4 xl:w-2/3">
      <TagFilter categories={categories} />
      {children}
    </div>
  );
}
