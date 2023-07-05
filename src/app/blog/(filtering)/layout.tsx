import TagFilter from "@/components/tag-filter/TagFilter";
import Header from "@/components/ui/Header";
import { Category } from "@/types";
import { getRecentCategories } from "@/util";

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const categories: Category[] = await getRecentCategories(4);
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center border border-slate-400 p-5 md:p-28">
        <Header h={1}>Blog.</Header>
        <p className="text-center md:w-2/3">
          Empower your digital creativity with our software development and design blog.
          Elevate your skills, gather insights, and fuel inspiration. Let&apos;s unlock
          your full potential!
        </p>
      </div>
      <TagFilter categories={categories} />
      {children}
    </div>
  );
}
