import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
        secondary:
          "bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400",
        danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
        ghost:
          "bg-transparent text-gray-300 hover:bg-gray-800 active:bg-gray-700",
        outline:
          "border border-gray-700 text-gray-300 hover:bg-gray-800 active:bg-gray-700",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "h-9 w-9",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
