import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
  avatarUrl?: string;
}

export function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
  avatarUrl,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg p-6 md:p-8 shadow-md border border-gray-100",
        className
      )}
      {...props}
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={cn(
              "w-5 h-5",
              index < rating ? "text-primary" : "text-gray-300"
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-6">
        <p className="text-text-secondary text-lg leading-relaxed italic">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={`${author}'s profile`}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold text-lg">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-secondary">{author}</p>
          {location && (
            <p className="text-sm text-text-muted">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
}
