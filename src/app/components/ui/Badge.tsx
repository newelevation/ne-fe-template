import { ReactNode } from 'react';
import { cn } from '@/app/utils';

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /** Badge variant */
  variant?: BadgeVariant;
  /** Badge size */
  size?: BadgeSize;
  /** Badge content */
  children: ReactNode;
  /** Show dot indicator */
  dot?: boolean;
  /** Additional className */
  className?: string;
}

const variants = {
  default: 'bg-gray-light text-text-primary',
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  success: 'bg-status-success text-white',
  warning: 'bg-status-warning text-white',
  error: 'bg-status-error text-white',
  info: 'bg-status-info text-white',
};

const sizes = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-1 text-xs',
  lg: 'px-2.5 py-1 text-sm',
};

/**
 * Badge component for status indicators, counts, and labels.
 *
 * @example
 * ```tsx
 * <Badge>Default</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="error" dot>Offline</Badge>
 * <Badge variant="primary" size="lg">99+</Badge>
 * ```
 */
export default function Badge({
  variant = 'default',
  size = 'md',
  children,
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full',
            variant === 'default' ? 'bg-text-muted' : 'bg-current opacity-80'
          )}
        />
      )}
      {children}
    </span>
  );
}
