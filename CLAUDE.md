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

**Component classes** (from `globals.css`):
- `.card` - Card container
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-outline` - Buttons

**Class utility**: `cn()` from `@/app/utils` (clsx + tailwind-merge)

## NE Brand Requirements

- **Colors**: Use token palette. No purple. Prefer grayscale backgrounds.
- **Corners**: Sharp corners (minimal border-radius)
- **Effects**: No gradients. Flat, solid colors only.
- **Gold accent**: `--color-secondary` (#967847) at 25% opacity for subtle use

## Path Alias

`@/*` maps to `./src/*`
