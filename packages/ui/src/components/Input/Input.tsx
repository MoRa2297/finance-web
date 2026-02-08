import { forwardRef, useId } from "react";
import { cn } from "../../lib/utils";
import type { InputProps } from "./Input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...rest }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1.5">
        {label ? (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-300"
          >
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 outline-none transition-colors",
            "focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className,
          )}
          {...rest}
        />
        {error ? <p className="text-sm text-red-400">{error}</p> : null}
      </div>
    );
  },
);

Input.displayName = "Input";
