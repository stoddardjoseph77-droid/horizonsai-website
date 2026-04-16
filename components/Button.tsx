"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  trackEvent?: string;
  trackProps?: Record<string, unknown>;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "bg-[#E8EAED] text-[#0B1622] font-semibold hover:bg-white shadow-lg shadow-white/20",
  secondary:
    "bg-[#E8EAED] text-[#0B1622] hover:bg-white",
  ghost:
    "bg-transparent text-[#7B8FA3] border border-white/[0.07] hover:border-white/[0.12] hover:text-[#E8EAED]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  trackEvent,
  trackProps,
  onClick,
}: ButtonProps) {
  const className = `inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 active:scale-[0.98] ${variantStyles[variant]} ${sizeStyles[size]}`;

  const handleClick = () => {
    if (trackEvent) track(trackEvent, trackProps);
    if (onClick) onClick();
  };

  if (href) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
