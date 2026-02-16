import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "footer" | "header";
  background?: "white" | "gray" | "dark" | "primary";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

export function SectionWrapper({
  as: Tag = "section",
  className,
  background = "white",
  spacing = "md",
  children,
  ...props
}: SectionWrapperProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-secondary",
    primary: "bg-primary/5",
  };

  const spacings = {
    none: "",
    sm: "py-8 md:py-10",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-20 md:py-32",
  };

  return (
    <Tag
      className={cn(backgrounds[background], spacings[spacing], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
