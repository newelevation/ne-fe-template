/**
 * Global loading state component.
 *
 * Displayed automatically by Next.js during page transitions
 * and data fetching with Suspense boundaries.
 */
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh]">
      <div className="relative">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-light rounded-full animate-spin border-t-secondary" />
      </div>
      <p className="mt-4 text-text-secondary text-sm">Loading...</p>
    </div>
  );
}
