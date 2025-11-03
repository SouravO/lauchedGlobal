# Copilot Instructions - Lauched Project

## Project Overview

React 19 + Vite 7 + Tailwind CSS v4 single-page application. Entry point: `src/main.jsx` → `src/App.jsx`.

## Tech Stack

- **React 19.1.1** (latest with new features)
- **Vite 7.1.7** (build tool with HMR)
- **Tailwind CSS 4.1.16** (v4 - uses `@import "tailwindcss"` pattern)
- **ESLint 9** (flat config format)

## Build Commands

```bash
npm run dev      # Start dev server (default: http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture & Patterns

### Component Structure - UNIFORM PATTERN REQUIRED

**ALL components must follow this exact structure:**

```jsx
import React from "react";

const ComponentName = () => {
  return (
    <div className="w-full">
      {/* Component content with Tailwind classes */}
    </div>
  );
};

export default ComponentName;
```

**Mandatory conventions:**

- Components in `src/` directory (e.g., `Hero.jsx`)
- Default export pattern: `export default ComponentName`
- Functional components with hooks (no class components)
- React import required: `import React from 'react'`
- Root element must have responsive width classes
- File name matches component name (PascalCase)

### Styling Approach - MANDATORY TAILWIND ONLY

- **Tailwind CSS v4** via Vite plugin (`@tailwindcss/vite`)
- Global styles: `src/index.css` imports Tailwind with `@import "tailwindcss"`
- **ALL styling MUST use Tailwind utility classes** - no custom CSS files
- Legacy CSS: `src/App.css` exists but should NOT be used for new components
- Remove custom CSS and replace with Tailwind utilities

### Mobile-First Responsive Design - REQUIRED

**ALL pages and components MUST be mobile responsive:**

- Use mobile-first approach: base styles for mobile, then `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Test all components at breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop)
- Common responsive patterns:

  ```jsx
  // Stack on mobile, row on desktop
  <div className="flex flex-col md:flex-row gap-4">

  // Full width mobile, constrained desktop
  <div className="w-full md:w-1/2 lg:w-1/3">

  // Hide on mobile, show on desktop
  <div className="hidden md:block">

  // Different text sizes by screen
  <h1 className="text-2xl md:text-4xl lg:text-6xl">
  ```

### File Organization

```
src/
├── main.jsx        # Entry point (ReactDOM render)
├── App.jsx         # Root component
├── index.css       # Global styles (Tailwind import)
├── App.css         # Legacy component styles
├── Hero.jsx        # Page components
└── assets/         # Static assets (images, SVGs)
```

## Development Conventions

### ESLint Rules

- Unused vars allowed if UPPERCASE pattern (e.g., `_UNUSED`, constants)
- React Hooks rules enforced (`eslint-plugin-react-hooks`)
- React Fast Refresh rules for HMR (`eslint-plugin-react-refresh`)
- ES2020+ syntax supported

### Vite Configuration

- Plugins: `@vitejs/plugin-react` + `@tailwindcss/vite`
- HMR enabled by default
- Assets in `public/` served at root (e.g., `/vite.svg`)

### Component Pattern Example

```jsx
import React from "react";

const ComponentName = () => {
  return <div className="tailwind-classes">{/* Component content */}</div>;
};

export default ComponentName;
```

### Responsive Component Example

```jsx
import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center mb-4">
        Welcome
      </h1>
      <p className="text-sm md:text-base lg:text-lg text-center max-w-md md:max-w-2xl">
        Description text that adapts to screen size
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg">
          Call to Action
        </button>
      </div>
    </section>
  );
};

export default Hero;
```

## Key Integration Points

- HTML entry: `index.html` (loads `src/main.jsx` via `<script type="module">`)
- Root element: `<div id="root">`
- StrictMode enabled in production and development

## Important Notes

- **Tailwind v4**: Uses new `@import` syntax, not traditional config file
- **React 19**: Latest version with new concurrent features
- **Vite 7**: Fast refresh requires `eslint-plugin-react-refresh` compliance
- All components should be fast-refresh compatible (no anonymous default exports)

## When Adding Features

1. Create component in `src/` with `.jsx` extension
2. Use Tailwind utilities for styling
3. Import and use in `App.jsx` or other components
4. Run `npm run lint` to check for issues
5. Test with `npm run dev` for HMR feedback
