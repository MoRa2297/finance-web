import { cva } from "class-variance-authority";

export const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-lg border p-4 shadow-lg transition-all",
  {
    variants: {
      variant: {
        default: "border-gray-700 bg-gray-900 text-white",
        success: "border-green-800 bg-green-950 text-green-300",
        error: "border-red-800 bg-red-950 text-red-300",
        warning: "border-yellow-800 bg-yellow-950 text-yellow-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
