import { HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  category?: string;
  description?: string;
  onClick?: () => void;
}

export function ProjectCard({
  imageUrl,
  title,
  category,
  description,
  onClick,
  className,
  ...props
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg cursor-pointer group",
        className
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
      {...props}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
        />
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent",
          "flex flex-col justify-end p-6 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Category Badge */}
        {category && (
          <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-3 w-fit">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-white/80 text-sm line-clamp-2">
            {description}
          </p>
        )}

        {/* View More Indicator */}
        <div
          className={cn(
            "flex items-center gap-2 text-primary mt-4 transition-transform duration-300",
            isHovered && "translate-x-2"
          )}
        >
          <span className="text-sm font-medium">View Project</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
