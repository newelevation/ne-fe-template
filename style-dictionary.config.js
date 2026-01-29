/**
 * Style Dictionary configuration for NE Front-End Template.
 * Generates CSS variables, Tailwind config, and TypeScript types from JSON tokens.
 *
 * Run: npm run tokens:build
 *
 * @see https://styledictionary.com/
 */

/**
 * Helper to get CSS variable reference for a token path
 */
function getCssVarRef(path) {
  if (path[0] === 'color') {
    return `var(--color-${path.slice(1).join('-')})`;
  }
  if (path[0] === 'spacing') {
    return `var(--spacing-${path[1]})`;
  }
  if (path[0] === 'font' && path[1] === 'family') {
    return `var(--font-family-${path[2]})`;
  }
  if (path[0] === 'font' && path[1] === 'size') {
    return `var(--font-size-${path[2]})`;
  }
  if (path[0] === 'font' && path[1] === 'weight') {
    return `var(--font-weight-${path[2]})`;
  }
  if (path[0] === 'font' && path[1] === 'lineHeight') {
    return `var(--line-height-${path[2]})`;
  }
  if (path[0] === 'border' && path[1] === 'radius') {
    const key = path[2] === 'default' ? 'default' : path[2];
    return `var(--border-radius-${key})`;
  }
  if (path[0] === 'shadow') {
    const key = path[1] === 'default' ? 'default' : path[1];
    return `var(--shadow-${key})`;
  }
  return null;
}

/**
 * Custom format for Tailwind extend configuration
 * Outputs CSS variable references for dynamic theming
 */
function tailwindFormatter({ dictionary }) {
  const tokens = {};

  // Process colors - flatten into Tailwind-friendly structure with CSS var references
  const colors = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'color') {
      const cssVarRef = getCssVarRef(token.path);

      if (token.path.length === 2) {
        // Top-level color: color.primary -> primary
        const kebabKey = token.path[1].replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        colors[kebabKey] = cssVarRef;
      } else {
        // Nested color: color.button.primary -> button.primary
        let obj = colors;
        for (let i = 1; i < token.path.length - 1; i++) {
          const key = token.path[i];
          if (!obj[key]) obj[key] = {};
          obj = obj[key];
        }
        const finalKey = token.path[token.path.length - 1];
        const kebabKey = finalKey.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        obj[kebabKey] = cssVarRef;
      }
    }
  });
  colors.white = '#ffffff';
  colors.black = '#000000';
  colors.transparent = 'transparent';
  colors.current = 'currentColor';
  tokens.colors = colors;

  // Process spacing
  const spacing = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'spacing') {
      spacing[token.path[1]] = getCssVarRef(token.path);
    }
  });
  if (Object.keys(spacing).length > 0) tokens.spacing = spacing;

  // Process font family
  const fontFamily = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'font' && token.path[1] === 'family') {
      fontFamily[token.path[2]] = getCssVarRef(token.path);
    }
  });
  if (Object.keys(fontFamily).length > 0) tokens.fontFamily = fontFamily;

  // Process font size
  const fontSize = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'font' && token.path[1] === 'size') {
      fontSize[token.path[2]] = getCssVarRef(token.path);
    }
  });
  if (Object.keys(fontSize).length > 0) tokens.fontSize = fontSize;

  // Process font weight
  const fontWeight = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'font' && token.path[1] === 'weight') {
      fontWeight[token.path[2]] = getCssVarRef(token.path);
    }
  });
  if (Object.keys(fontWeight).length > 0) tokens.fontWeight = fontWeight;

  // Process line height
  const lineHeight = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'font' && token.path[1] === 'lineHeight') {
      lineHeight[token.path[2]] = getCssVarRef(token.path);
    }
  });
  if (Object.keys(lineHeight).length > 0) tokens.lineHeight = lineHeight;

  // Process border radius
  const borderRadius = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'border' && token.path[1] === 'radius') {
      const key = token.path[2] === 'default' ? 'DEFAULT' : token.path[2];
      borderRadius[key] = getCssVarRef(token.path);
    }
  });
  if (Object.keys(borderRadius).length > 0) tokens.borderRadius = borderRadius;

  // Process box shadow
  const boxShadow = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'shadow') {
      const key = token.path[1] === 'default' ? 'DEFAULT' : token.path[1];
      boxShadow[key] = getCssVarRef(token.path);
    }
  });
  if (Object.keys(boxShadow).length > 0) tokens.boxShadow = boxShadow;

  // Process breakpoints
  const screens = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'breakpoint') {
      screens[token.path[1]] = token.value;
    }
  });
  if (Object.keys(screens).length > 0) tokens.screens = screens;

  // Process transition duration
  const transitionDuration = {};
  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'transition' && token.path[1] === 'duration') {
      const key = token.path[2] === 'default' ? 'DEFAULT' : token.path[2];
      transitionDuration[key] = token.value;
    }
  });
  if (Object.keys(transitionDuration).length > 0) tokens.transitionDuration = transitionDuration;

  return `/**
 * Auto-generated Tailwind extend configuration from design tokens.
 * DO NOT EDIT DIRECTLY - Run 'npm run tokens:build' to regenerate.
 *
 * @generated
 */
const extend = ${JSON.stringify(tokens, null, 2)};

export default extend;
`;
}

/**
 * Custom format for TypeScript theme types and constants
 */
function typescriptFormatter({ dictionary }) {
  const colors = {};
  const spacing = {};

  dictionary.allTokens.forEach(token => {
    if (token.path[0] === 'color') {
      if (token.path.length === 2) {
        colors[token.path[1]] = token.value;
      } else if (token.path.length === 3) {
        const group = token.path[1];
        const name = token.path[2];
        const key = group + name.charAt(0).toUpperCase() + name.slice(1);
        colors[key] = token.value;
      }
    }
    if (token.path[0] === 'spacing') {
      spacing[token.path[1]] = token.value;
    }
  });

  return `/**
 * Auto-generated theme constants from design tokens.
 * DO NOT EDIT DIRECTLY - Run 'npm run tokens:build' to regenerate.
 *
 * @generated
 */

/** Theme colors */
export const theme = ${JSON.stringify(colors, null, 2)} as const;

/** Spacing scale */
export const spacingScale = ${JSON.stringify(spacing, null, 2)} as const;

/** Color token type */
export type ThemeColor = keyof typeof theme;

/** Spacing token type */
export type SpacingSize = keyof typeof spacingScale;

/**
 * Get a CSS variable reference for a color
 */
export const getColor = (colorName: ThemeColor): string => {
  return \`var(--color-\${kebabCase(colorName)})\`;
};

/**
 * Get a CSS variable reference for spacing
 */
export const getSpacing = (size: SpacingSize): string => {
  return \`var(--spacing-\${size})\`;
};

/** Convert camelCase to kebab-case */
function kebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
`;
}

/**
 * Custom format for CSS variables
 */
function cssVariablesFormatter({ dictionary }) {
  let cssVars = '';

  dictionary.allTokens.forEach(token => {
    const path = token.path;
    let varName = '';

    if (path[0] === 'color') {
      varName = `--color-${path.slice(1).join('-')}`;
    } else if (path[0] === 'spacing') {
      varName = `--spacing-${path[1]}`;
    } else if (path[0] === 'layout') {
      // layout.header.height -> --header-height
      varName = `--${path[1]}-${path[2]}`;
    } else if (path[0] === 'font' && path[1] === 'family') {
      varName = `--font-family-${path[2]}`;
    } else if (path[0] === 'font' && path[1] === 'size') {
      varName = `--font-size-${path[2]}`;
    } else if (path[0] === 'font' && path[1] === 'weight') {
      varName = `--font-weight-${path[2]}`;
    } else if (path[0] === 'font' && path[1] === 'lineHeight') {
      varName = `--line-height-${path[2]}`;
    } else if (path[0] === 'font' && path[1] === 'letterSpacing') {
      varName = `--letter-spacing-${path[2]}`;
    } else if (path[0] === 'shadow') {
      varName = `--shadow-${path[1]}`;
    } else if (path[0] === 'border' && path[1] === 'radius') {
      varName = `--border-radius-${path[2]}`;
    } else if (path[0] === 'border' && path[1] === 'width') {
      varName = `--border-width-${path[2]}`;
    } else if (path[0] === 'transition') {
      varName = `--transition-${path.slice(1).join('-')}`;
    } else if (path[0] === 'breakpoint') {
      varName = `--breakpoint-${path[1]}`;
    } else if (path[0] === 'z') {
      varName = `--z-${path[1]}`;
    }

    if (varName) {
      cssVars += `  ${varName}: ${token.value};\n`;
    }
  });

  return `/**
 * Auto-generated CSS custom properties from design tokens.
 * DO NOT EDIT DIRECTLY - Run 'npm run tokens:build' to regenerate.
 *
 * @generated
 */
:root {
${cssVars}}
`;
}

export default {
  source: [
    'tokens/color.json',
    'tokens/typography.json',
    'tokens/spacing.json',
    'tokens/shadow.json',
    'tokens/border.json',
    'tokens/transition.json',
    'tokens/layout.json'
  ],
  hooks: {
    formats: {
      'javascript/tailwind': tailwindFormatter,
      'typescript/theme': typescriptFormatter,
      'css/custom-variables': cssVariablesFormatter
    }
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/app/styles/generated/',
      files: [{
        destination: 'tokens.css',
        format: 'css/custom-variables'
      }]
    },
    tailwind: {
      transformGroup: 'js',
      buildPath: './',
      files: [{
        destination: 'extend.generated.js',
        format: 'javascript/tailwind'
      }]
    },
    typescript: {
      transformGroup: 'js',
      buildPath: 'src/app/components/theme/',
      files: [{
        destination: 'tokens.generated.ts',
        format: 'typescript/theme'
      }]
    }
  }
};
