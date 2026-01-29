/**
 * About page example.
 *
 * This demonstrates how to create additional pages in the NE template.
 */
export default function AboutPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">About</h1>
        <p className="text-lg text-text-secondary">Learn more about this template</p>
      </div>

      <section className="mb-8">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">NE Front-End Template</h2>
          <p className="text-text-secondary mb-4">
            This template provides a standardized starting point for building New Elevation
            branded web applications. It incorporates our design system, component library,
            and development best practices.
          </p>
          <p className="text-text-secondary">
            The template is built with Next.js 15, React 18, TypeScript, and Tailwind CSS,
            ensuring modern development practices and excellent performance.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <div className="grid gap-4">
          <div className="card">
            <h3 className="text-lg font-medium mb-2">Design Tokens</h3>
            <p className="text-text-secondary text-sm">
              Centralized design tokens for colors, spacing, typography, and more.
              Easy to customize and maintain consistency across your application.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-medium mb-2">Responsive Layout</h3>
            <p className="text-text-secondary text-sm">
              Pre-built header, sidebar, and footer components that work across
              all screen sizes.
            </p>
          </div>
          <div className="card">
            <h3 className="text-lg font-medium mb-2">Developer Experience</h3>
            <p className="text-text-secondary text-sm">
              TypeScript for type safety, ESLint for code quality, Prettier for
              formatting, and Husky for pre-commit hooks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
