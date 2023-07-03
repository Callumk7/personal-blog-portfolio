import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import Link from "next/link";

const link = cva("transition ease-in-out", {
  variants: {
    state: {
      active: "text-primary",
      inactive: "text-dark hover:text-primary",
    },
  },
  defaultVariants: {
    state: "active",
  }
});

interface NavLinkProps {
  href: string;
  className?: string;
  variant?: any;
  children?: React.ReactNode;
}

export default function NavLink({ href, className, variant, children }: NavLinkProps) {
  return (
    <Link href={href} className={clsx(link(variant), className)}>
      {children}
    </Link>
  );
}
