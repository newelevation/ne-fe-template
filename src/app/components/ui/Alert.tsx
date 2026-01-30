import { ReactNode } from 'react';
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import { cn } from '@/app/utils';

type AlertVariant = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  /** Alert variant/type */
  variant: AlertVariant;
  /** Alert title */
  title?: string;
  /** Alert content */
  children: ReactNode;
  /** Show close button */
  dismissible?: boolean;
  /** Callback when dismissed */
  onDismiss?: () => void;
  /** Additional className */
  className?: string;
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const styles = {
  success: 'bg-status-success/10 border-status-success text-status-success',
  error: 'bg-status-error/10 border-status-error text-status-error',
  warning: 'bg-status-warning/10 border-status-warning text-status-warning',
  info: 'bg-status-info/10 border-status-info text-status-info',
};

/**
 * Alert component for displaying status messages.
 *
 * @example
 * ```tsx
 * <Alert variant="success" title="Success!">
 *   Your changes have been saved.
 * </Alert>
 *
 * <Alert variant="error" dismissible onDismiss={() => setError(null)}>
 *   Something went wrong. Please try again.
 * </Alert>
 * ```
 */
export default function Alert({
  variant,
  title,
  children,
  dismissible = false,
  onDismiss,
  className,
}: AlertProps) {
  const Icon = icons[variant];

  return (
    <div
      className={cn(
        'flex items-start gap-3 p-4 border-l-4 rounded-r',
        styles[variant],
        className
      )}
      role="alert"
    >
      <Icon size={20} className="flex-shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        {title && <p className="font-medium">{title}</p>}
        <div className={cn('text-sm', title && 'mt-1', 'text-text-primary opacity-80')}>
          {children}
        </div>
      </div>
      {dismissible && onDismiss && (
        <button
          onClick={onDismiss}
          className="flex-shrink-0 p-1 hover:bg-black/10 rounded transition-colors"
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
