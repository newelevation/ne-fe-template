import { ReactNode } from 'react';
import { Inbox, Search, FileX, FolderOpen } from 'lucide-react';
import { cn } from '@/app/utils';

type EmptyStateVariant = 'default' | 'search' | 'error' | 'folder';

export interface EmptyStateProps {
  /** Variant determines the default icon */
  variant?: EmptyStateVariant;
  /** Custom icon (overrides variant icon) */
  icon?: ReactNode;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Action button or content */
  action?: ReactNode;
  /** Additional className */
  className?: string;
}

const icons = {
  default: Inbox,
  search: Search,
  error: FileX,
  folder: FolderOpen,
};

/**
 * Empty state component for when there's no data to display.
 *
 * @example
 * ```tsx
 * <EmptyState
 *   title="No results found"
 *   description="Try adjusting your search or filters"
 *   variant="search"
 * />
 *
 * <EmptyState
 *   title="No projects yet"
 *   description="Create your first project to get started"
 *   action={<Button>Create Project</Button>}
 * />
 * ```
 */
export default function EmptyState({
  variant = 'default',
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  const Icon = icons[variant];

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center py-12 px-4',
        className
      )}
    >
      <div className="text-gray-light mb-4">
        {icon || <Icon size={48} strokeWidth={1.5} />}
      </div>
      <h3 className="text-lg font-medium text-text-primary mb-1">{title}</h3>
      {description && (
        <p className="text-sm text-text-muted max-w-sm mb-4">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
}
