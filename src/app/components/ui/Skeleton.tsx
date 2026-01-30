import { cn } from '@/app/utils';

export interface SkeletonProps {
  /** Width (CSS value or Tailwind class) */
  width?: string;
  /** Height (CSS value or Tailwind class) */
  height?: string;
  /** Shape variant */
  variant?: 'text' | 'circular' | 'rectangular';
  /** Animation */
  animation?: 'pulse' | 'wave' | 'none';
  /** Additional className */
  className?: string;
}

/**
 * Skeleton loading placeholder component.
 *
 * @example
 * ```tsx
 * // Text placeholder
 * <Skeleton variant="text" width="200px" />
 *
 * // Avatar placeholder
 * <Skeleton variant="circular" width="40px" height="40px" />
 *
 * // Card placeholder
 * <Skeleton variant="rectangular" height="200px" />
 * ```
 */
export default function Skeleton({
  width,
  height,
  variant = 'text',
  animation = 'pulse',
  className,
}: SkeletonProps) {
  const animations = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: '',
  };

  const variants = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded',
  };

  return (
    <div
      className={cn(
        'bg-gray-light',
        animations[animation],
        variants[variant],
        className
      )}
      style={{
        width: width,
        height: height || (variant === 'text' ? '1rem' : undefined),
      }}
      aria-hidden="true"
    />
  );
}

/**
 * Skeleton text lines for paragraph placeholders.
 */
export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          width={i === lines - 1 ? '70%' : '100%'}
        />
      ))}
    </div>
  );
}

/**
 * Skeleton card placeholder.
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('card space-y-4', className)}>
      <Skeleton variant="rectangular" height="120px" />
      <Skeleton variant="text" width="60%" />
      <SkeletonText lines={2} />
    </div>
  );
}
