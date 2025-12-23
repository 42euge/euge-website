"use client";

import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons/lib";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: IconType;
  rightIcon?: IconType;
  rightText?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  icon: Icon,
  rightIcon: RightIcon,
  rightText,
  href,
  onClick,
  className,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "cartoon-btn inline-flex items-center justify-center font-bold text-lg rounded-2xl px-6 py-4";

  const variantStyles = {
    primary: "bg-violet-500 text-white hover:bg-violet-600",
    secondary: "bg-white text-indigo-950 hover:bg-gray-50",
  };

  const hasRightElement = RightIcon || rightText;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-3" />}
      <span>{children}</span>
      {hasRightElement && (
        <span className="ml-3 pl-3 border-l-2 border-current/30 flex items-center gap-1">
          {RightIcon && <RightIcon className="w-4 h-4" />}
          {rightText && <span className="text-sm font-semibold">{rightText}</span>}
        </span>
      )}
    </>
  );

  const combinedStyles = twMerge(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
