import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS class names intelligently.
 *
 * Combines `clsx` for conditional class handling with `tailwind-merge`
 * to properly handle conflicting Tailwind utility classes (e.g.,
 * `p-4 p-2` becomes `p-2`).
 *
 * @param inputs - Class names, conditionals, or arrays to merge
 * @returns Merged class string with conflicts resolved
 *
 * @example
 * ```ts
 * cn('p-4', 'p-2')
 * // 'p-2' (tailwind-merge resolves conflict)
 *
 * cn('btn', isActive && 'btn-active', { 'btn-disabled': disabled })
 * // 'btn btn-active' (if isActive is true, disabled is false)
 * ```
 */
export function cn(...inputs: (string | undefined | boolean)[]) {
  return twMerge(clsx(inputs));
}
