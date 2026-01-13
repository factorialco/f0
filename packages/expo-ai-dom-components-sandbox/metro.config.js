const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Add watch folders for symlinked packages
config.watchFolders = [path.resolve(__dirname, '../react')];

// Resolve symlinks and ensure single React version for DOM components
const projectRoot = __dirname;
const reactPath = path.resolve(projectRoot, 'node_modules/react');
const reactDomPath = path.resolve(projectRoot, 'node_modules/react-dom');

config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    '@factorialco/f0-react': path.resolve(__dirname, '../react'),
    // Force single React version to avoid "multiple React versions" error in DOM components
    react: reactPath,
    'react-dom': reactDomPath,
    'react/jsx-runtime': path.resolve(reactPath, 'jsx-runtime'),
    'react/jsx-dev-runtime': path.resolve(reactPath, 'jsx-dev-runtime'),
  },
  unstable_enablePackageExports: true,
  // Ensure resolverMainFields includes 'react-native' first for proper module resolution
  resolverMainFields: ['react-native', 'browser', 'main'],
  // Disable hierarchical lookup to avoid resolving React from wrong locations
  disableHierarchicalLookup: true,
  // Resolve property-information subpaths for DOM components
  resolveRequest: (context, moduleName, platform) => {
    // Handle property-information subpaths (e.g., property-information/html)
    if (moduleName.startsWith('property-information/')) {
      const subPath = moduleName.replace('property-information/', '');
      const propertyInfoPath = path.resolve(
        projectRoot,
        'node_modules/property-information'
      );
      const resolvedPath = path.resolve(
        propertyInfoPath,
        'lib',
        `${subPath}.js`
      );

      if (require('fs').existsSync(resolvedPath)) {
        return {
          filePath: resolvedPath,
          type: 'sourceFile',
        };
      }
    }

    // Default resolution
    return context.resolveRequest(context, moduleName, platform);
  },
};

module.exports = config;
