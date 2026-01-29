/**
 * Home page for the NE Front-End Template.
 *
 * This is your application's landing page. Customize this component
 * to display your main content.
 */
export default function HomePage() {
  return (
    <div className="max-w-4xl">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Welcome to Your Application
        </h1>
        <p className="text-lg text-text-secondary">
          Built with the New Elevation Front-End Template
        </p>
      </div>

      {/* Introduction Section */}
      <section className="mb-8">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-text-secondary mb-4">
            This template provides a solid foundation for building New Elevation branded
            applications. It includes:
          </p>
          <ul className="list-disc list-inside text-text-secondary space-y-2">
            <li>Pre-configured Next.js 15 with TypeScript</li>
            <li>Tailwind CSS with NE design tokens</li>
            <li>Responsive layout with header, sidebar, and footer</li>
            <li>Theme support (light/dark mode ready)</li>
            <li>ESLint, Prettier, and Husky for code quality</li>
          </ul>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-lg font-medium mb-2">Customize the Header</h3>
            <p className="text-text-secondary text-sm mb-3">
              Edit <code className="bg-gray-mist px-1 rounded">layout.tsx</code> to change the
              application name and navigation items.
            </p>
            <button className="btn btn-primary text-sm">Learn More</button>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium mb-2">Update Design Tokens</h3>
            <p className="text-text-secondary text-sm mb-3">
              Modify <code className="bg-gray-mist px-1 rounded">tokens.css</code> to customize
              colors, spacing, and typography.
            </p>
            <button className="btn btn-outline text-sm">View Tokens</button>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium mb-2">Add New Pages</h3>
            <p className="text-text-secondary text-sm mb-3">
              Create new files in the <code className="bg-gray-mist px-1 rounded">app/</code>{' '}
              directory to add routes.
            </p>
            <button className="btn btn-secondary text-sm">Documentation</button>
          </div>

          <div className="card">
            <h3 className="text-lg font-medium mb-2">Build Components</h3>
            <p className="text-text-secondary text-sm mb-3">
              Use the <code className="bg-gray-mist px-1 rounded">components/ui/</code> directory
              for reusable UI components.
            </p>
            <button className="btn btn-outline text-sm">Components</button>
          </div>
        </div>
      </section>

      {/* Brand Colors Demo */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Brand Colors</h2>
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-primary" />
            <span className="text-sm text-text-secondary mt-2">Primary</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-secondary" />
            <span className="text-sm text-text-secondary mt-2">Secondary</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-accent" />
            <span className="text-sm text-text-secondary mt-2">Accent</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-status-success" />
            <span className="text-sm text-text-secondary mt-2">Success</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-status-warning" />
            <span className="text-sm text-text-secondary mt-2">Warning</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg bg-status-error" />
            <span className="text-sm text-text-secondary mt-2">Error</span>
          </div>
        </div>
      </section>
    </div>
  );
}
