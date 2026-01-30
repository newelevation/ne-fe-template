'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/app/utils';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Error state */
  error?: boolean;
}

/**
 * Checkbox component with optional label and description.
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" />
 * <Checkbox
 *   label="Email notifications"
 *   description="Receive updates about your account"
 *   checked={checked}
 *   onChange={(e) => setChecked(e.target.checked)}
 * />
 * ```
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          'flex items-start gap-3 cursor-pointer group',
          props.disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              'w-5 h-5 border-2 rounded flex items-center justify-center transition-colors',
              'peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-primary',
              'peer-checked:bg-primary peer-checked:border-primary',
              error
                ? 'border-status-error'
                : 'border-border group-hover:border-primary'
            )}
          >
            <Check
              size={14}
              className="text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              strokeWidth={3}
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;
