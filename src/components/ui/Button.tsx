import { clsx } from "clsx";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const button = cva("font-sans h-max transition ease-in", {
  variants: {
    intent: {
      primary: "bg-primary text-light hover:bg-eminence-600",
      secondary: "bg-secondary text-dark",
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-4",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  const { className, intent, size, ...otherProps } = props;
  return (
    <button
      ref={ref}
      className={clsx(button({intent, size }), className)}
      {...otherProps}
    ></button>
  );
});
