'use client';

import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/app/components/ui';

/**
 * Custom 404 Not Found page.
 *
 * Displayed when a user navigates to a route that doesn't exist.
 */
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-secondary mb-4">
        <FileQuestion size={64} />
      </div>
      <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-text-primary mb-2">Page Not Found</h2>
      <p className="text-text-secondary mb-6 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-4">
        <Link href="/">
          <Button variant="primary" className="flex items-center gap-2">
            <Home size={16} />
            Go Home
          </Button>
        </Link>
        <Button variant="outline" onClick={() => history.back()} className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Go Back
        </Button>
      </div>
    </div>
  );
}
