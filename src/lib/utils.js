import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string and resolves Tailwind CSS conflicts
 * @param {...string} inputs - Class names or conditional class name objects
 * @returns {string} - Merged class string with resolved Tailwind conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
