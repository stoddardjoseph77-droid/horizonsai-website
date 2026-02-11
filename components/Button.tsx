import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/25 hover:shadow-xl hover:shadow-brand-primary/30",
  secondary:
    "bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary/5",
  ghost: "bg-transparent text-brand-primary hover:bg-brand-primary/5",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
}: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-lg font-heading font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${variantStyles[variant]} ${sizeStyles[size]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
