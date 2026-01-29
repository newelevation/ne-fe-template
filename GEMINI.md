# Gemini Project Context: NE Front-End Template

This document provides context for working on the `ne-fe-template` project. It is a Next.js application designed as a starting point for New Elevation (NE) branded web applications.

## Project Overview

This is a modern React/Next.js template that includes:

*   **Framework:** Next.js 15 (with App Router and Turbopack)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS, configured with NE design tokens.
*   **Layout:** A responsive layout with a Header, Sidebar, and Footer is pre-built.
*   **Tooling:** ESLint, Prettier, and Husky are configured for code quality and consistency.
*   **Branding:** Includes NE brand assets and a pre-defined color palette.

The purpose is to provide a solid and consistent foundation for building new front-end applications that adhere to the New Elevation brand guidelines.

## Building and Running

The following npm scripts are available to build, run, and test the application.

*   **`npm run dev`**: Starts the development server with Next.js Turbopack at `http://localhost:3000`.
*   **`npm run build`**: Creates a production-ready build of the application.
*   **`npm run start`**: Starts the production server. Requires a build to be run first.
*   **`npm run lint`**: Lints the codebase for potential errors and style issues.
*   **`npm run format`**: Formats the code using Prettier.

## Development Conventions

### Project Structure

The project follows the standard Next.js App Router structure.

*   `src/app/`: Contains all the application routes and pages.
    *   `src/app/components/`: Shared React components.
        *   `layout/`: Components that define the main application shell (Header, Sidebar, etc.).
        *   `theme/`: Theme management components (`ThemeProvider`).
        *   `ui/`: General-purpose UI components.
    *   `src/app/styles/generated/tokens.css`: Contains the NE design system tokens (colors, spacing, etc.) as CSS variables.
    *   `src/app/utils/`: Utility functions. `cn.ts` is used for conditional class names.
    *   `src/app/layout.tsx`: The root layout of the application.
*   `public/`: Static assets like logos and images.
*   `tokens/`: Source files for generating design tokens (though the generation process itself is not defined in the scripts).

### Coding Style

*   **Formatting:** Code is automatically formatted by Prettier on commit using Husky and lint-staged.
*   **Linting:** ESLint is used to enforce code quality and consistency.
*   **Path Aliases:** The project is configured with a `@/*` alias for the `src` directory. Always use this alias for imports (e.g., `import { MyComponent } from '@/app/components/ui/MyComponent'`).
*   **Styling:** Use Tailwind CSS utility classes for styling. Adhere to the design tokens defined in `src/app/styles/generated/tokens.css`.

### NE Brand Guidelines

*   **Colors:** Use the defined color palette from the design tokens. Avoid gradients and purples.
*   **Corners:** Prefer sharp corners with minimal `border-radius`.
*   **Accent Color:** The gold accent color (`--color-secondary`) should be used sparingly, often at 25% opacity for subtle highlights.
