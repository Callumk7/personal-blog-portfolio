import { Category } from "@prisma/client";
import clsx from "clsx";

export default function Tag({ category }: { category: Category }) {
  return (
    <div className={clsx(category.color, "mb-2 w-fit px-1 text-sm font-bold")}>
      {category.name.toUpperCase()}
    </div>
  );
}
