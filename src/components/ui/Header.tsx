import { clsx } from "clsx";
import { cva } from "class-variance-authority";

const headings = cva("font-syne font-bold", {
  variants: {
    h: {
      1: "pb-10 text-6xl",
      2: "pb-8 text-3xl",
      3: "pb-4 text-xl",
    },
  },
});

export default function Header({
  children,
  h,
  className,
}: {
  children: React.ReactNode;
  h: 1 | 2 | 3 | null | undefined;
  className?: string;
}) {
  return <h1 className={clsx(headings({ h: h }), className)}>{children}</h1>;
}
