import { Category } from "@prisma/client";
import clsx from "clsx";

export default function Tag({ category, bg }: { category: Category, bg: string }) {
  return (
    <div className={clsx("mb-2 w-fit px-1 text-sm font-bold", bg)}>
      {category.name.toUpperCase()}
    </div>
  );
}
