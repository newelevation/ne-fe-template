# NE Front-End Template

A production-ready Next.js 16 template with New Elevation branding, design tokens, and enterprise features.

## Features

- **Next.js 16** with App Router and Turbopack
- **Design Token System** - Style Dictionary for consistent theming
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling with token integration
- **Security Headers** - CSP, HSTS, and OWASP-recommended headers
- **SEO Ready** - Meta tags, Open Graph, Twitter cards, sitemap
- **Accessibility** - WCAG-compliant components with skip links
- **Testing** - Vitest + React Testing Library
- **CI/CD** - GitHub Actions workflow

## Quick Start

```bash
# Clone the template
git clone https://github.com/newelevation/ne-fe-template.git my-app
cd my-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Configuration

### 1. Site Configuration

Edit `src/config/site.ts` to customize:

```typescript
export const siteConfig = {
  name: 'Your App Name',
  description: 'Your app description',
  url: 'https://your-domain.com',
  // ...
};
```

### 2. Navigation

Edit `src/config/navigation.tsx` to customize sidebar and header navigation.

### 3. Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── layout/      # Header, Sidebar, Footer
│   │   ├── theme/       # ThemeProvider, tokens
│   │   └── ui/          # Button, Input, Modal
│   ├── styles/
│   │   └── generated/   # Auto-generated token CSS
│   ├── utils/           # Utility functions
│   ├── api/             # API routes
│   ├── error.tsx        # Error boundary
│   ├── loading.tsx      # Loading state
│   ├── not-found.tsx    # 404 page
│   └── layout.tsx       # Root layout with metadata
├── config/
│   ├── site.ts          # Site metadata
│   └── navigation.tsx   # Navigation config
└── tokens/              # Design token JSON files
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors |
| `npm run format` | Format with Prettier |
| `npm run tokens:build` | Regenerate design tokens |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## Design Tokens

Tokens are defined in `tokens/*.json` and compiled using Style Dictionary:

```bash
npm run tokens:build
```

This generates:
- `src/app/styles/generated/tokens.css` - CSS custom properties
- `extend.generated.js` - Tailwind theme extension
- `src/app/components/theme/tokens.generated.ts` - TypeScript constants

### Token Files

| File | Contents |
|------|----------|
| `color.json` | Brand colors, text, buttons, status |
| `typography.json` | Fonts, sizes, weights |
| `spacing.json` | Spacing scale |
| `shadow.json` | Box shadows |
| `border.json` | Border radius, widths |
| `transition.json` | Animation durations |

## UI Components

Import from `@/app/components/ui`:

```tsx
import { Button, Input, Modal } from '@/app/components/ui';

// Button variants: primary, secondary, outline, ghost, danger
<Button variant="primary" size="md">Click me</Button>

// Input with validation
<Input label="Email" error="Invalid email" />

// Modal dialog
<Modal open={isOpen} onClose={close} title="Confirm">
  <p>Are you sure?</p>
</Modal>
```

## API Routes

Example API route at `src/app/api/health/route.ts`:

```typescript
// GET /api/health
// Returns: { status: 'ok', timestamp: '...', environment: '...' }
```

## Testing

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## NE Brand Guidelines

- **Colors**: Use token palette. No purple. Prefer grayscale backgrounds.
- **Corners**: Sharp corners (minimal border-radius)
- **Effects**: No gradients. Flat, solid colors only.
- **Gold accent**: Use `--color-secondary` (#967847) at 25% opacity for subtle use

## Security

Security headers are configured in `next.config.ts`:

- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## License

Proprietary - New Elevation
