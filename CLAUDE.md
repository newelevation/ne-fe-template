# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Build tokens + Next.js production build
npm run tokens:build # Regenerate tokens from JSON
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with Prettier
npm run test         # Run unit tests
npm run test:e2e     # Run Playwright e2e tests
```

## Architecture

This is a **Next.js 15 App Router** template for New Elevation branded applications.

### Token Architecture

Two separate token systems:

1. **Application tokens** (`tokens/*.json` → style-dictionary):
   - `color.json` - Brand colors, text, buttons, status
   - `typography.json` - Font families, sizes, weights
   - `spacing.json` - Numeric and semantic scales
   - `shadow.json`, `border.json`, `transition.json`, `layout.json`
   - Generated to: `tokens.css`, `extend.generated.js`, `tokens.generated.ts`

2. **System/framework tokens** (`globals.css`):
   - Static `--sys-*` variables for app chrome (header, sidebar, footer)
   - Independent of application tokens
   - Ensures shell renders correctly regardless of token loading

**To modify application tokens**: Edit JSON in `tokens/`, run `npm run tokens:build`

### Layout System

Fixed chrome layout in `src/app/layout.tsx`:
- **Header** (64px): `--sys-header-*` variables
- **Sidebar** (72px): `--sys-sidebar-*` variables
- **Footer** (56px): `--sys-footer-*` variables
- **Main content**: Scrollable with proper spacing

### Key Patterns

**Adding pages**: Create `src/app/{route}/page.tsx`

**Configuring navigation**: Edit `src/config/navigation.tsx`

**Configuring SEO/metadata**: Edit `src/config/site.ts`

**Class utility**: `cn()` from `@/app/utils` (clsx + tailwind-merge)

---

## UI Components Reference

**IMPORTANT: Always use these components instead of raw HTML elements with custom classes.**

Import from `@/app/components/ui`:

```tsx
import { Button, Card, Input, Modal, Alert, Badge } from '@/app/components/ui';
```

### Core Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Button` | `variant`: primary, secondary, outline, ghost, danger<br>`size`: sm, md, lg<br>`loading`: boolean<br>`fullWidth`: boolean | Primary interaction element |
| `Card` | `padding`: none, sm, md, lg<br>`hoverable`: boolean | Container for grouped content |
| `Input` | `label`: string<br>`error`: string<br>`helperText`: string | Form text input |
| `Modal` | `open`: boolean<br>`onClose`: function<br>`title`: string<br>`size`: sm, md, lg, xl | Dialog overlay |

### Feedback Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Alert` | `variant`: info, success, warning, error<br>`title`: string | Status messages |
| `Badge` | `variant`: default, primary, success, warning, error | Small status indicator |
| `Tooltip` | `content`: string<br>`position`: top, bottom, left, right | Hover information |
| `Toast` | Via `useToast()` hook | Temporary notifications |
| `Skeleton` | `width`, `height` | Loading placeholder |
| `EmptyState` | `title`, `description`, `icon`, `action` | No-content placeholder |

### Form Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Select` | `options`: SelectOption[]<br>`label`: string | Dropdown select |
| `Checkbox` | `checked`: boolean<br>`label`: string | Checkbox input |
| `Radio` | `checked`: boolean<br>`label`: string | Radio button |
| `ToggleSwitch` | `checked`: boolean<br>`label`: string | On/off toggle |

### Navigation Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Tabs`, `TabList`, `Tab`, `TabPanel` | `defaultValue`: string | Tabbed interface |

---

## Usage Examples

### Creating a New Page

```tsx
// src/app/my-page/page.tsx
import { Card, Button } from '@/app/components/ui';

export default function MyPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold text-primary mb-2">Page Title</h1>
      <p className="text-text-secondary mb-8">Page description</p>

      <Card padding="lg">
        <h2 className="text-2xl font-semibold mb-4">Section Title</h2>
        <p className="text-text-secondary mb-4">Content here</p>
        <Button variant="primary">Action</Button>
      </Card>
    </div>
  );
}
```

### Building a Form

```tsx
import { Card, Input, Select, Button } from '@/app/components/ui';

export default function FormExample() {
  return (
    <Card padding="lg">
      <form className="space-y-4">
        <Input label="Name" placeholder="Enter your name" />
        <Input label="Email" type="email" error={errors.email} />
        <Select
          label="Category"
          options={[
            { value: 'a', label: 'Option A' },
            { value: 'b', label: 'Option B' },
          ]}
        />
        <Button type="submit" variant="primary">Submit</Button>
      </form>
    </Card>
  );
}
```

### Interactive Card Grid

```tsx
import { Card } from '@/app/components/ui';

const items = [/* ... */];

export default function CardGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} hoverable className="cursor-pointer">
          <h3 className="text-lg font-medium mb-2">{item.title}</h3>
          <p className="text-text-secondary text-sm">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
```

---

## DO's and DON'Ts

### DO

- **Use UI components** from `@/app/components/ui` for all interactive elements
- **Use Tailwind utilities** for layout and spacing (`flex`, `grid`, `p-4`, `mb-8`)
- **Use design token colors** via Tailwind: `text-primary`, `bg-secondary`, `text-text-secondary`
- **Use `cn()` utility** for conditional classes: `cn('base-class', condition && 'conditional-class')`
- **Use semantic HTML** with proper heading hierarchy (h1 → h2 → h3)
- **Add `'use client'`** directive for components with state, effects, or event handlers

### DON'T

- **DON'T use raw `<button>` elements** - Use `<Button>` component
- **DON'T use `<div className="card">`** - Use `<Card>` component
- **DON'T create custom CSS classes** for components - Use existing UI components or Tailwind
- **DON'T use inline styles** except for dynamic values from CSS variables
- **DON'T use `border-radius` or `rounded-*`** - NE brand uses sharp corners
- **DON'T use purple colors** - Not part of NE brand palette
- **DON'T use gradients** - NE brand uses flat, solid colors

### Color Classes (Tailwind)

```
text-primary         - Primary brand color text
text-secondary       - Gold accent text
text-text-primary    - Main body text
text-text-secondary  - Muted/secondary text
text-text-muted      - Very subtle text

bg-primary           - Primary background
bg-secondary         - Gold accent background
bg-card-bg           - Card background
bg-gray-mist         - Subtle gray background

text-status-success  - Green for success
text-status-warning  - Yellow/orange for warnings
text-status-error    - Red for errors
```

---

## NE Brand Requirements

- **Colors**: Use token palette. No purple. Prefer grayscale backgrounds.
- **Corners**: Sharp corners (no border-radius)
- **Effects**: No gradients. Flat, solid colors only.
- **Gold accent**: `--color-secondary` (#967847) at 25% opacity for subtle use

---

## File Structure for New Features

```
src/app/
├── {feature}/
│   └── page.tsx           # Route page (server component by default)
├── components/
│   ├── ui/                # Reusable UI primitives (Button, Card, etc.)
│   │   └── index.ts       # Barrel export - add new components here
│   └── {feature}/         # Feature-specific components
└── api/
    └── {endpoint}/
        └── route.ts       # API route handler
```

## SEO & Social Sharing

Configure in `src/config/site.ts`:
- `name` - App name (title, OG title)
- `description` - Meta description
- `url` - Canonical URL for production
- `keywords` - SEO keywords
- `themeColor` - Browser chrome color
- `social.twitter` - Twitter handle

Auto-generated assets in `src/app/`:
- `icon.svg` - Favicon (NE emblem)
- `apple-icon.svg` - Apple touch icon
- `opengraph-image.svg` - Facebook/LinkedIn sharing (1200x630)
- `twitter-image.svg` - Twitter/X sharing

## Path Alias

`@/*` maps to `./src/*`
