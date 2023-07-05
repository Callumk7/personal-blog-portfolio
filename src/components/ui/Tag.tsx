import { Category } from "@prisma/client";
import clsx from "clsx";

export default function Tag({ category }: { category: Category }) {
  let bg = "";
  switch (category.color) {
    case "orange":
      bg = "bg-tertiary";
      break;

    case "blue":
      bg = "bg-blue-500 text-dune-100";
      break;

    case "mindaro":
      bg = "bg-mindaro";
      break;

    case "oxford":
      bg = "bg-oxford text-dune-100";
      break;

    default:
      break;
  }
  return (
    <div className={clsx(bg, "mb-2 w-fit px-1 text-sm font-bold")}>
      {category.name.toUpperCase()}
    </div>
  );
}
