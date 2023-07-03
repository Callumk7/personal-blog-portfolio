import TagFilter from "@/components/tag-filter/TagFilter";
import Container from "@/components/ui/Container";
import { Category } from "@/types";
import { getRecentCategories } from "@/util";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const categories: Category[] = await getRecentCategories(4);
  return (
    <div className="mt-16">
      <TagFilter categories={categories} />
      {children}
    </div>
  );
}
