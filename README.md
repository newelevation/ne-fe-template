# NE Front-End Template

A modern React/Next.js template for building New Elevation branded web applications. This template provides a solid foundation with pre-configured tooling, responsive layout, and NE design tokens.

## Features

- **Next.js 15** with App Router and Turbopack
- **TypeScript** for type safety
- **Tailwind CSS** with NE design tokens
- **Responsive Layout** with header, sidebar, and footer
- **Theme Support** (light/dark mode ready)
- **Code Quality** tools (ESLint, Prettier, Husky)
- **NE Branding** assets and color palette

## Quick Start

```bash
# Navigate to the template directory
cd ne-fe-template

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ne-fe-template/
├── public/                      # Static assets (logos)
├── src/app/
│   ├── components/
│   │   ├── layout/             # Header, Footer, Sidebar, Logo
│   │   ├── theme/              # ThemeProvider
│   │   └── ui/                 # Add your components here
│   ├── styles/generated/       # Design tokens CSS
│   ├── utils/                  # Utility functions
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Change Application Name

Edit `src/app/layout.tsx`:

```tsx
<Header appName="Your Application Name" />
```

### Modify Navigation

Edit `src/app/components/layout/Sidebar.tsx` to update navigation items:

```tsx
const defaultNavItems: NavItem[] = [
  { id: 'home', href: '/', icon: <Home size={24} />, label: 'Home' },
  { id: 'custom', href: '/custom', icon: <Star size={24} />, label: 'Custom Page' },
];
```

### Update Colors

Edit `src/app/styles/generated/tokens.css` to customize the color palette:

```css
:root {
  --color-primary: #011540;      /* Your primary color */
  --color-secondary: #967847;    /* Your secondary color */
  /* ... */
}
```

### Add New Pages

Create a new directory in `src/app/`:

```tsx
// src/app/my-page/page.tsx
export default function MyPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-primary">My Page</h1>
    </div>
  );
}
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |

## Design Tokens

The template includes a comprehensive design token system:

### Colors
- **Primary**: Navy blue (`#011540`)
- **Secondary/Accent**: Gold (`#967847`)
- **Status**: Success, Warning, Error, Info
- **Grays**: Dark, Medium, Light, Mist

### Spacing
- Semantic scale: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
- Numeric scale: `0` through `24`

### Typography
- Font families: Sans (Inter), Mono
- Sizes: `xs` through `4xl`, plus display/headline

### Borders & Shadows
- Border radius: `none` through `full`
- Shadows: `none` through `xl`

## Component Classes

Pre-built CSS classes for common patterns:

```html
<!-- Card -->
<div class="card">...</div>

<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>

<!-- Spacing utilities -->
<div class="padding-md margin-lg gap-sm">...</div>
```

## NE Brand Guidelines

When building applications with this template:

1. **Colors**: Use the defined token palette. Avoid purple.
2. **Corners**: Prefer sharp corners (minimal border-radius)
3. **Effects**: Avoid gradients. Use flat, solid colors.
4. **Gold Accent**: Use secondary color at 25% opacity for subtle presentation

## Path Aliases

Import using the `@/*` alias:

```tsx
import { Header } from '@/app/components/layout';
import { cn } from '@/app/utils';
```

## Adding Components

Create new components in `src/app/components/ui/`:

```tsx
// src/app/components/ui/Button.tsx
import { cn } from '@/app/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return (
    <button className={cn('btn', `btn-${variant}`)}>
      {children}
    </button>
  );
}
```

## Deployment

Deploy to any platform that supports Next.js:

- **Vercel** (recommended): Connect your repository for automatic deployments
- **AWS Amplify**: Use the Next.js build settings
- **Docker**: Build and containerize the application
- **Static Export**: Run `next build` with output: 'export' in next.config.ts

## Related Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons)
- [NE Style Guide](../ne-style-guide/) - Full design system reference

## License

Copyright New Elevation. All rights reserved.
