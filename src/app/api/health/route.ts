import { NextResponse } from 'next/server';

/**
 * Health check endpoint.
 *
 * Use this to verify the application is running and responsive.
 * Useful for load balancers, monitoring, and deployment checks.
 *
 * @example
 * GET /api/health
 * Response: { status: 'ok', timestamp: '2024-01-01T00:00:00.000Z' }
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NEXT_PUBLIC_APP_ENV || 'development',
  });
}
