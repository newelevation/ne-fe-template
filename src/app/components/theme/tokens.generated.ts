/**
 * Auto-generated theme constants from design tokens.
 * DO NOT EDIT DIRECTLY - Run 'npm run tokens:build' to regenerate.
 *
 * @generated
 */

/** Theme colors */
export const theme = {
  "primary": "#011540",
  "secondary": "#967847",
  "accent": "#967847",
  "tertiary": "#d9d9d9",
  "background": "#ffffff",
  "background-secondary": "#f9fafb",
  "background-tertiary": "#f3f4f6",
  "textPrimary": "#1f2937",
  "textSecondary": "#4b5563",
  "textTertiary": "#ffffff",
  "textMuted": "#9ca3af",
  "buttonPrimary": "#011540",
  "buttonPrimary-text": "#ffffff",
  "buttonHover": "#012060",
  "buttonPressed": "#010d30",
  "buttonSecondary": "#967847",
  "buttonSecondary-text": "#ffffff",
  "buttonOutline-border": "#011540",
  "buttonOutline-text": "#011540",
  "link": "#0066cc",
  "link-hover": "#004499",
  "cardBg": "#ffffff",
  "cardBorder": "#e5e7eb",
  "toggleActive": "#011540",
  "toggleInactive": "#e5e7eb",
  "grayDark": "#374151",
  "grayMedium": "#6b7280",
  "grayLight": "#e5e7eb",
  "grayMist": "#f3f4f6",
  "grayDivider": "#d1d5db",
  "statusSuccess": "#10b981",
  "statusWarning": "#f59e0b",
  "statusError": "#ef4444",
  "statusInfo": "#3b82f6",
  "border": "#e5e7eb",
  "divider": "#d1d5db"
} as const;

/** Spacing scale */
export const spacingScale = {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "3xs": "0.125rem",
  "2xs": "0.25rem",
  "xs": "0.5rem",
  "sm": "0.75rem",
  "md": "1rem",
  "lg": "1.5rem",
  "xl": "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "button-x": "1rem",
  "button-y": "0.5rem",
  "input-x": "0.75rem",
  "input-y": "0.5rem",
  "card": "1.5rem",
  "section": "3rem"
} as const;

/** Color token type */
export type ThemeColor = keyof typeof theme;

/** Spacing token type */
export type SpacingSize = keyof typeof spacingScale;

/**
 * Get a CSS variable reference for a color
 */
export const getColor = (colorName: ThemeColor): string => {
  return `var(--color-${kebabCase(colorName)})`;
};

/**
 * Get a CSS variable reference for spacing
 */
export const getSpacing = (size: SpacingSize): string => {
  return `var(--spacing-${size})`;
};

/** Convert camelCase to kebab-case */
function kebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
