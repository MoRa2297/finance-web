import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-600/20 text-blue-400",
        success: "bg-green-600/20 text-green-400",
        warning: "bg-yellow-600/20 text-yellow-400",
        danger: "bg-red-600/20 text-red-400",
        neutral: "bg-gray-600/20 text-gray-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
