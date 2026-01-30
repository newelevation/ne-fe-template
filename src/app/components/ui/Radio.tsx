'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/app/utils';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Error state */
  error?: boolean;
}

/**
 * Radio button component with optional label and description.
 *
 * @example
 * ```tsx
 * <Radio name="plan" value="basic" label="Basic" />
 * <Radio name="plan" value="pro" label="Pro" description="Best for teams" />
 * ```
 */
const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const radioId = id || `${props.name}-${props.value}`;

    return (
      <label
        htmlFor={radioId}
        className={cn(
          'flex items-start gap-3 cursor-pointer group',
          props.disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="radio"
            id={radioId}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              'w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors',
              'peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-primary',
              error
                ? 'border-status-error'
                : 'border-border group-hover:border-primary peer-checked:border-primary'
            )}
          >
            <div
              className={cn(
                'w-2.5 h-2.5 rounded-full bg-primary scale-0 transition-transform',
                'peer-checked:scale-100'
              )}
            />
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <span className="text-sm font-medium text-text-primary">{label}</span>
            )}
            {description && (
              <span className="text-sm text-text-muted">{description}</span>
            )}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
