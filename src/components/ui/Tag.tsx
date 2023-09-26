import { Category } from "@prisma/client";
import clsx from "clsx";

export default function Tag({ category }: { category: Category, bg: string }) {
  let style = "mb-2 w-fit px-1 text-sm font-bold";
  style += category.color;

  return (
    <div className="mb-2 w-fit px-1 text-sm font-bold">
      {category.name.toUpperCase()}
    </div>
  );
}
