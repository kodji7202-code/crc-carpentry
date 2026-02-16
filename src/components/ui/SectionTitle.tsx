import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  showAccent?: boolean;
  accentColor?: "primary" | "secondary";
}

export function SectionTitle({
  title,
  subtitle,
  alignment = "center",
  showAccent = true,
  accentColor = "primary",
  className,
  ...props
}: SectionTitleProps) {
  const alignmentClasses = {
    center: "text-center",
    left: "text-left",
  };

  const accentClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
  };

  return (
    <div className={cn("mb-12", alignmentClasses[alignment], className)}>
      {showAccent && (
        <div
          className={cn(
            "h-1 w-16 rounded-full mb-4",
            alignment === "center" && "mx-auto",
            accentClasses[accentColor]
          )}
        />
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold text-secondary font-serif",
          subtitle && "mb-4"
        )}
        {...props}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
