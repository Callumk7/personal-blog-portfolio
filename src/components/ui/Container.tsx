import { clsx } from "clsx";
import { cva } from "class-variance-authority";

const container = cva(["relative"], {
  variants: {
    intent: {
      single: ["mx-auto", "w-4/5", "max-w-8xl"],
      wrapper: ["fixed", "w-screen"],
      double: "grid grid-cols-8",
    },
  },
});

export default function Container({
  children,
  intent,
  className,
}: {
  children: React.ReactNode;
  intent: "single" | "wrapper" | null | undefined;
  className?: string;
}) {
  return <div className={clsx(container({ intent: intent }), className)}>{children}</div>;
}
