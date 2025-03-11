---
sidebar_position: 1
id: architecture
title: Architecture
description: Understanding the architecture of our Vite-powered platform
---

# Architecture Overview

Learn about the modern architecture of our platform, optimized for performance with Vite and SWC.

## Core Components

### Build System
- **Vite**: Ultra-fast development server and build tool
- **SWC**: Rust-based transpiler for improved performance
- **ESBuild**: Optimized bundling and minification

### Performance Features
```javascript
// vite.config.js
export default {
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'utils': ['lodash', 'axios']
        }
      }
    }
  }
}
```

## Development Flow

1. **Local Development**
   - Hot Module Replacement (HMR)
   - No bundling in development
   - Instant server start

2. **Build Process**
   - Code splitting
   - Tree shaking
   - Asset optimization

3. **Deployment**
   - Optimized chunks
   - Compressed assets
   - Performance monitoring

## Performance Benefits

| Feature | Benefit |
|---------|---------|
| ESM-based Dev Server | Faster startup |
| Native ESM | Better browser support |
| HMR with SWC | Quick refresh cycles |
| Code Splitting | Optimized loading |

## Best Practices

### Development
- Use dynamic imports
- Enable build caching
- Implement lazy loading

### Production
- Configure compression
- Optimize chunk sizes
- Monitor performance metrics

## Next Steps

- [Configure your environment](../setup/environment.md)
- [Learn about components](./components.md)
- [Explore workflows](./workflows.md)
