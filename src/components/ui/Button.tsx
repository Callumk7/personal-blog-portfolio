import { clsx } from "clsx";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const button = cva("font-sans h-max", {
  variants: {
    intent: {
      primary: "bg-primary text-light",
      secondary: "bg-secondary",
    },
    size: {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-4",
    },
    rounded: {
      small: "rounded-sm",
      medium: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
    rounded: "medium",
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
  const { className, intent, size, rounded, ...otherProps } = props;
  return (
    <button
      ref={ref}
      className={clsx(button({intent, size, rounded}), className)}
      {...otherProps}
    ></button>
  );
});
