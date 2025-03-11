# First Steps with Vite

Learn how to get started with our platform using Vite for blazing-fast development and build performance.

## Migrating to Vite

### 1. Update Dependencies

Replace CRA dependencies with Vite in `package.json`:

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.3.0",
    "vite": "^4.4.0",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-pwa": "^0.16.4"
  }
}
```

### 2. Configure Vite

Create `vite.config.js`:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    compression(),
    VitePWA({
      registerType: 'autoUpdate'
    })
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'utils': ['lodash', 'axios']
        }
      }
    }
  },
  server: {
    port: 3000,
    hmr: {
      protocol: 'ws'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: []
  }
});
```

### 3. Update Scripts

Modify `package.json` scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "serve": "vite preview",
    "analyze": "vite build --mode analyze"
  }
}
```

## Development Workflow

### Starting Development Server

```bash
npm run dev
```

Features:
- Hot Module Replacement (HMR)
- Fast refresh
- No bundling in development
- Instant server start

### Building for Production

```bash
npm run build
```

Optimizations:
- Code splitting
- Tree shaking
- Asset optimization
- CSS minification

### Previewing Production Build

```bash
npm run preview
```

## Performance Features

### 1. SWC Integration

Using SWC for faster transpilation:

```javascript
// vite.config.js
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react({
      swc: {
        jsc: {
          target: 'es2021',
          parser: {
            syntax: 'typescript',
            tsx: true
          }
        }
      }
    })
  ]
});
```

### 2. Code Splitting

Implement dynamic imports:

```javascript
// Example router configuration
const routes = [
  {
    path: '/dashboard',
    component: React.lazy(() => import('./pages/Dashboard'))
  }
];
```

### 3. Build Caching

Enable build caching:

```javascript
// vite.config.js
export default defineConfig({
  build: {
    cache: true,
    manifest: true
  }
});
```

## Best Practices

### 1. Asset Handling

Optimize asset imports:

```javascript
// Images
import logo from './assets/logo.png';

// Styles
import './styles/main.css';

// SVG as components
import { ReactComponent as Icon } from './assets/icon.svg';
```

### 2. Environment Variables

Use Vite's env handling:

```javascript
// .env
VITE_API_URL=http://api.example.com

// Usage in code
const apiUrl = import.meta.env.VITE_API_URL;
```

### 3. TypeScript Integration

Enable TypeScript:

```javascript
// vite.config.js
export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        jsx: 'preserve'
      }
    }
  }
});
```

## Performance Monitoring

### Build Analysis

```bash
npm run analyze
```

Monitor:
- Bundle size
- Build time
- Chunk distribution
- Tree-shaking effectiveness

### Development Performance

Check development server performance:

```javascript
// vite.config.js
export default defineConfig({
  server: {
    watch: {
      usePolling: false
    },
    hmr: {
      overlay: true
    }
  }
});
```

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| HMR not working | Check WebSocket config |
| Build failures | Clear cache and node_modules |
| Type errors | Update tsconfig.json |
| Import errors | Check path aliases |

### Performance Issues

Solutions for common performance problems:

1. Large bundle size
   - Enable code splitting
   - Use dynamic imports
   - Configure chunk strategy

2. Slow development server
   - Disable unused plugins
   - Use SWC instead of Babel
   - Optimize dependencies

3. Memory issues
   - Adjust Node.js memory limit
   - Configure chunk size
   - Enable build caching

## Next Steps

- Explore [Core Concepts](/docs/getting-started/core-concepts/architecture)
- Learn about [Best Practices](/docs/getting-started/best-practices/performance)
- Set up [Advanced Configuration](/docs/getting-started/setup/customization)
