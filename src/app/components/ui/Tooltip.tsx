'use client';

import { useState, ReactNode, useRef, useEffect } from 'react';
import { cn } from '@/app/utils';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Tooltip content */
  content: ReactNode;
  /** Element to attach tooltip to */
  children: ReactNode;
  /** Tooltip position */
  position?: TooltipPosition;
  /** Delay before showing (ms) */
  delay?: number;
  /** Additional className for tooltip */
  className?: string;
}

const positions = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrows = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-dark border-x-transparent border-b-transparent',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-dark border-x-transparent border-t-transparent',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-dark border-y-transparent border-r-transparent',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-dark border-y-transparent border-l-transparent',
};

/**
 * Tooltip component for displaying additional information on hover.
 *
 * @example
 * ```tsx
 * <Tooltip content="This is helpful information">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * <Tooltip content="Settings" position="right">
 *   <IconButton icon={<Settings />} />
 * </Tooltip>
 * ```
 */
export default function Tooltip({
  content,
  children,
  position = 'top',
  delay = 200,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {visible && (
        <div
          className={cn(
            'absolute z-50 px-2 py-1 text-xs text-white bg-gray-dark rounded shadow-lg whitespace-nowrap',
            'animate-in fade-in zoom-in-95 duration-150',
            positions[position],
            className
          )}
          role="tooltip"
        >
          {content}
          <span
            className={cn('absolute border-4', arrows[position])}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}
