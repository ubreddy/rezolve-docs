import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // Enable build caching with optimized settings
  cacheDir: '.vite',
  build: {
    // Optimize build settings
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('@docusaurus')) return 'docusaurus-vendor';
            return 'vendor';
          }
        },
      },
    },
    // Enable build cache
    cache: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    react({
      // Use SWC for faster transpilation
      swc: {
        jsc: {
          target: 'es2020',
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
              development: process.env.NODE_ENV === 'development',
              refresh: true,
              // Enable Fast Refresh for development
              fastRefresh: true,
            },
            optimizer: {
              globals: {
                vars: {
                  'process.env.NODE_ENV': process.env.NODE_ENV,
                },
              },
            },
          },
          minify: {
            compress: true,
            mangle: true,
          },
        },
      },
    }),
  ],
  
  build: {
    // Enable minification for production builds
    minify: 'esbuild',
    // Configure code splitting
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('@docusaurus')) return 'docusaurus-vendor';
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs', '.jsx', '.ts', '.tsx'],
    },
    // Enable source maps for debugging
    sourcemap: process.env.NODE_ENV === 'development',
    // Increase build performance
    target: 'esnext',
    assetsInlineLimit: 4096,
  },

  // Development server configuration
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      // Enable faster HMR
      timeout: 1000,
    },
    watch: {
      usePolling: false,
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**'],
    },
    fs: {
      strict: false,
      // Allow serving from beyond the project root
      allow: ['..'],
    },
    // Optimize middleware
    middlewareMode: 'ssr',
  },

  // Resolve aliases for better imports
  resolve: {
    alias: {
      '@site': resolve(__dirname),
      '@docs': resolve(__dirname, 'docs'),
      '@components': resolve(__dirname, 'src/components'),
      '@css': resolve(__dirname, 'src/css'),
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@docusaurus/core',
      '@docusaurus/preset-classic',
      'clsx',
      '@mdx-js/react',
      'prism-react-renderer',
    ],
    exclude: ['@docusaurus/theme-classic'],
    esbuildOptions: {
      target: 'esnext',
      platform: 'browser',
      supported: { bigint: true },
      // Enable more aggressive optimizations
      minify: true,
      treeShaking: true,
      splitting: true,
      format: 'esm',
      metafile: true,
    },
  },
  // Enable build-time optimizations
  esbuild: {
    jsxInject: `import React from 'react'`,
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});
