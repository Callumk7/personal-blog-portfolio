import TagFilter from "@/components/tag-filter/TagFilter";
import Header from "@/components/ui/Header";
import { Category } from "@/types";
import { getRecentCategories } from "@/util";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const categories: Category[] = await getRecentCategories(4);
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center border border-accent p-5 md:p-28">
        <Header h={1}>Blog.</Header>
        <p className="text-center md:w-2/3">I post about anything, but mostly web development, and what I have learn&apos;t along the way. Presently you can enjoy posts written by ChatGPT to test my designs. Have fun!</p>
      </div>
      <TagFilter categories={categories} />
      {children}
    </div>
  );
}
