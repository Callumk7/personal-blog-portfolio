import { Category } from "@prisma/client";
import clsx from "clsx";

enum Color {
  Orange = "bg-bright-orange text-light",
  Blue = "bg-blue-500 text-light",
  Sky = "bg-blue-200 text-dark",
  Pink = "bg-pink-400 text-dark",
  Black = "bg-black text-light",
  Lime = "bg-bright-green text-dark",
}

export default function Tag({ category }: { category: Category }) {
  let style = "";
  switch (category.color) {
    case "orange":
        style = Color.Orange;
      break;
    case "pink":
        style = Color.Pink;
      break;
    case "blue":
        style = Color.Blue;
      break;
    case "sky":
        style = Color.Sky;
      break;
    case "lime":
        style = Color.Lime;
      break;
    case "black":
        style = Color.Black;
      break;

    default:
      break;
  }

  return (
    <div className={clsx(style, "mb-2 w-fit px-1 text-sm font-bold") }>
      {category.name.toUpperCase()}
    </div>
  );
}
