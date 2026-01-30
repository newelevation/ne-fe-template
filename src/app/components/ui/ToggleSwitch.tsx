'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/app/utils';

export interface ToggleSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Label text */
  label?: string;
  /** Description text */
  description?: string;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: {
    track: 'w-8 h-4',
    thumb: 'w-3 h-3',
    translate: 'translate-x-4',
  },
  md: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5',
    translate: 'translate-x-5',
  },
  lg: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    translate: 'translate-x-7',
  },
};

/**
 * Toggle switch component for boolean settings.
 *
 * @example
 * ```tsx
 * <ToggleSwitch label="Dark mode" />
 * <ToggleSwitch
 *   label="Notifications"
 *   description="Receive push notifications"
 *   checked={enabled}
 *   onChange={(e) => setEnabled(e.target.checked)}
 * />
 * ```
 */
const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
  ({ className, label, description, size = 'md', id, ...props }, ref) => {
    const switchId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const sizeConfig = sizes[size];

    return (
      <label
        htmlFor={switchId}
        className={cn(
          'flex items-center justify-between gap-3 cursor-pointer group',
          props.disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
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
        <div className="relative flex-shrink-0">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            className="peer sr-only"
            role="switch"
            {...props}
          />
          <div
            className={cn(
              'rounded-full transition-colors',
              'peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-primary',
              'peer-checked:bg-primary bg-gray-light',
              sizeConfig.track
            )}
          />
          <div
            className={cn(
              'absolute top-0.5 left-0.5 bg-white rounded-full shadow transition-transform',
              'peer-checked:' + sizeConfig.translate,
              sizeConfig.thumb
            )}
          />
        </div>
      </label>
    );
  }
);

ToggleSwitch.displayName = 'ToggleSwitch';

export default ToggleSwitch;
