'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/app/components/ui';

/**
 * Global error boundary for the application.
 *
 * Catches runtime errors in the app and displays a user-friendly error page.
 * Provides options to retry the failed operation or return home.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-status-error mb-4">
        <AlertTriangle size={64} />
      </div>
      <h1 className="text-3xl font-bold text-primary mb-2">Something went wrong</h1>
      <p className="text-text-secondary mb-6 max-w-md">
        An unexpected error occurred. Please try again or return to the home page.
      </p>
      {error.digest && (
        <p className="text-xs text-text-muted mb-4">Error ID: {error.digest}</p>
      )}
      <div className="flex gap-4">
        <Button variant="primary" onClick={reset} className="flex items-center gap-2">
          <RefreshCw size={16} />
          Try Again
        </Button>
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <Home size={16} />
            Go Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
